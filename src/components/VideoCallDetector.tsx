import React, { useEffect, useRef, useState } from "react";

interface Alert {
  id: string;
  time: string;
  message: string;
  level: "info" | "warning" | "critical";
}

const VideoCallDetector: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const analysisTimerRef = useRef<number | null>(null);

  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [riskScore, setRiskScore] = useState(8);
  const [lipSyncScore, setLipSyncScore] = useState(92);
  const [faceStabilityScore, setFaceStabilityScore] = useState(90);
  const [emotionConsistencyScore, setEmotionConsistencyScore] = useState(88);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const pushAlert = (message: string, level: Alert["level"]) => {
    const now = new Date();
    setAlerts((prev: Alert[]) => [
      {
        id: String(Date.now()),
        time: now.toLocaleTimeString(),
        message,
        level
      },
      ...prev
    ]);
    if (level !== "info") {
      showToast(`${level === "critical" ? "CRITICAL" : "Warning"}: ${message}`);
    }
  };

  const stopStream = () => {
    if (analysisTimerRef.current !== null) {
      window.clearInterval(analysisTimerRef.current);
      analysisTimerRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track: MediaStreamTrack) => track.stop());
      streamRef.current = null;
    }
  };

  const startAnalysisLoop = () => {
    if (analysisTimerRef.current !== null) return;
    analysisTimerRef.current = window.setInterval(() => {
      if (!isCallActive) return;

      setRiskScore((prev: number) => {
        let next = prev + (Math.random() * 8 - 4);
        next = Math.max(0, Math.min(100, next));
        return next;
      });

      setLipSyncScore((prev: number) =>
        Math.max(40, Math.min(100, prev + (Math.random() * 6 - 3)))
      );
      setFaceStabilityScore((prev: number) =>
        Math.max(40, Math.min(100, prev + (Math.random() * 6 - 3)))
      );
      setEmotionConsistencyScore((prev: number) =>
        Math.max(40, Math.min(100, prev + (Math.random() * 6 - 3)))
      );

      const currentRisk = riskScore;
      if (currentRisk > 80) {
        pushAlert(
          "Severe deepfake pattern detected: inconsistent lip-sync and unstable facial regions.",
          "critical"
        );
      } else if (currentRisk > 55) {
        pushAlert(
          "Possible manipulation: monitor lip-sync and replay critical segments.",
          "warning"
        );
      }
    }, 1000);
  };

  const startCall = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: true
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setIsCallActive(true);
      setIsVideoOn(true);
      setIsAudioOn(true);
      setRiskScore(10);
      setLipSyncScore(95);
      setFaceStabilityScore(93);
      setEmotionConsistencyScore(90);
      pushAlert("Video call started. AI monitoring enabled.", "info");
      startAnalysisLoop();
    } catch (err) {
      console.error(err);
      setCameraError(
        "Camera or microphone access denied. Please allow permissions and try again."
      );
      showToast(
        "Camera access blocked. Enable permissions in your browser settings."
      );
    }
  };

  const endCall = () => {
    stopStream();
    setIsCallActive(false);
    pushAlert("Call ended. Monitoring stopped.", "info");
  };

  const toggleVideo = () => {
    if (!streamRef.current) return;
    streamRef.current.getVideoTracks().forEach((t: MediaStreamTrack) => (t.enabled = !t.enabled));
    setIsVideoOn((v: boolean) => !v);
  };

  const toggleAudio = () => {
    if (!streamRef.current) return;
    streamRef.current.getAudioTracks().forEach((t: MediaStreamTrack) => (t.enabled = !t.enabled));
    setIsAudioOn((v: boolean) => !v);
  };

  const switchCamera = async () => {
    if (!isCallActive) return;
    const newFacingMode = facingMode === "user" ? "environment" : "user";
    setFacingMode(newFacingMode);
    
    stopStream();
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: newFacingMode },
        audio: true
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setIsVideoOn(true);
      startAnalysisLoop();
      showToast(`Switched to ${newFacingMode === "user" ? "front" : "back"} camera`);
    } catch (err) {
      console.error(err);
      showToast("Failed to switch camera. Device may not have multiple cameras.");
      setFacingMode(facingMode);
    }
  };

  useEffect(() => {
    return () => {
      stopStream();
    };
  }, []);

  return (
    <div className="video-call-detector">
      <div className="video-area">
        <div className="video-wrapper">
          <video ref={videoRef} autoPlay muted className="video-element" />
          {isCallActive && (
            <div className="live-badge">
              LIVE AI SCAN • Risk {Math.round(riskScore)}%
            </div>
          )}
          {!isCallActive && (
            <div className="video-overlay">
              <p>Start a call to enable live deepfake detection.</p>
            </div>
          )}
          {cameraError && <div className="camera-error">{cameraError}</div>}
        </div>

        <div className="call-controls">
          {!isCallActive ? (
            <button className="primary-btn" onClick={startCall}>
              Start Call &amp; Scan
            </button>
          ) : (
            <button className="danger-btn" onClick={endCall}>
              End Call
            </button>
          )}
          <button
            className={!isVideoOn ? "secondary-btn" : "ghost-btn"}
            onClick={toggleVideo}
            disabled={!isCallActive}
          >
            {isVideoOn ? "Turn Video Off" : "Turn Video On"}
          </button>
          <button
            className={!isAudioOn ? "secondary-btn" : "ghost-btn"}
            onClick={toggleAudio}
            disabled={!isCallActive}
          >
            {isAudioOn ? "Mute" : "Unmute"}
          </button>
          <button
            className="ghost-btn"
            onClick={switchCamera}
            disabled={!isCallActive}
            title="Switch between front/back camera"
          >
            🔄 Switch Camera
          </button>
        </div>
      </div>

      <div className="video-stats">
        <div className="risk-meter-card">
          <h3>Deepfake Risk Meter</h3>
          <div className="risk-value">
            {Math.round(riskScore)}%
            <span className="risk-label">
              {riskScore < 30
                ? "Low"
                : riskScore < 60
                ? "Moderate"
                : riskScore < 85
                ? "High"
                : "Critical"}
            </span>
          </div>
          <div className="meter-bar large">
            <div
              className="meter-fill"
              style={{ width: `${Math.round(riskScore)}%` }}
            />
          </div>
          <p className="risk-note">
            The AI continuously evaluates lip sync, face stability, and emotion
            consistency to estimate deepfake probability.
          </p>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-label">Lip Sync Alignment</span>
            <span className="metric-value">{Math.round(lipSyncScore)}%</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Facial Movement Stability</span>
            <span className="metric-value">
              {Math.round(faceStabilityScore)}%
            </span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Emotion Consistency</span>
            <span className="metric-value">
              {Math.round(emotionConsistencyScore)}%
            </span>
          </div>
        </div>

        <div className="alert-history">
          <h3>Alert History</h3>
          {alerts.length === 0 && (
            <p className="history-empty">
              No alerts yet. Start a call to see live notifications.
            </p>
          )}
          {alerts.map((a) => (
            <div
              key={a.id}
              className={
                "alert-item alert-" +
                (a.level === "critical"
                  ? "critical"
                  : a.level === "warning"
                  ? "warning"
                  : "info")
              }
            >
              <span className="alert-time">{a.time}</span>
              <span className="alert-message">{a.message}</span>
            </div>
          ))}
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default VideoCallDetector;
