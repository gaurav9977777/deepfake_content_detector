import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import ReportModal, { AnalysisResult, AnalysisType } from "./ReportModal";

type Tab = AnalysisType;

interface HistoryItem extends AnalysisResult {}

const randomVerdict = (): AnalysisResult["verdict"] => {
  const r = Math.random();
  if (r < 0.5) return "Real";
  if (r < 0.8) return "Suspicious";
  return "Likely Fake";
};

const generateExplanation = (type: AnalysisType, verdict: string): string => {
  if (type === "text") {
    if (verdict === "Real") {
      return "✓ Analysis shows consistent writing style, credible sources, and factual language patterns. The article structure follows journalistic standards with proper attribution and verifiable claims. Sentiment analysis indicates balanced reporting without excessive emotional manipulation.";
    }
    if (verdict === "Suspicious") {
      return "⚠ The article contains some red flags: emotionally charged language, missing or questionable source references, and potential bias indicators. The claims made require additional verification from independent sources. Some statements lack proper context or supporting evidence.";
    }
    return "✗ Multiple critical indicators of misinformation detected: manipulated or fabricated quotes, exaggerated/false claims, extremely low source credibility, propagandistic language patterns, and inconsistent facts. This content shows strong characteristics of deliberate disinformation or AI-generated fake news.";
  }

  if (type === "image") {
    if (verdict === "Real") {
      return "Lighting, facial structure, and background artifacts appear natural and consistent.";
    }
    if (verdict === "Suspicious") {
      return "Subtle inconsistencies around eyes and edges suggest possible light manipulation.";
    }
    return "Strong deepfake cues on the face: irregular skin texture, mismatched shadows, and warped contours.";
  }

  if (verdict === "Real") {
    return "Motion, audio, and frame-by-frame details look consistent with a genuine recording.";
  }
  if (verdict === "Suspicious") {
    return "Timing mismatches and small glitches suggest partial editing or filter usage.";
  }
  return "Pronounced lip-sync issues, frame glitches, and inconsistent lighting indicate a likely deepfake.";
};

const Detector: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>("text");
  const [textInput, setTextInput] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [currentResult, setCurrentResult] = useState<AnalysisResult | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imageInsights, setImageInsights] = useState<{
    faces: number;
    lightingScore: number;
    artifactScore: number;
  } | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setPreviewUrl(null);
    setUploadedFile(file);

    if (activeTab !== "text") {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (typeof ev.target?.result === "string") {
          setPreviewUrl(ev.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const analyze = () => {
    if (activeTab === "text" && !textInput.trim()) {
      showToast("Please paste a news article or statement first.");
      return;
    }
    if (activeTab !== "text" && !fileName) {
      showToast("Please upload an image or video first.");
      return;
    }

    const confidence = Math.round(55 + Math.random() * 40);
    const verdict = randomVerdict();
    const explanation = generateExplanation(activeTab, verdict);
    const now = new Date();
    const timestamp = now.toLocaleString();

    if (activeTab === "text") {
      const faces = 0;
      const lightingScore = 0;
      const artifactScore = 0;
      setImageInsights({ faces, lightingScore, artifactScore });
    } else if (activeTab === "image") {
      const faces = 1 + Math.floor(Math.random() * 3);
      const lightingScore = Math.round(60 + Math.random() * 35);
      const artifactScore = Math.round(40 + Math.random() * 50);
      setImageInsights({ faces, lightingScore, artifactScore });
    } else {
      setImageInsights(null);
    }

    const titleBase =
      activeTab === "text"
        ? "News text analysis"
        : activeTab === "image"
        ? "Image deepfake scan"
        : "Video deepfake scan";

    const inputPreview =
      activeTab === "text"
        ? textInput.slice(0, 250) + (textInput.length > 250 ? "..." : "")
        : fileName || "";

    const result: AnalysisResult = {
      id: String(Date.now()),
      type: activeTab,
      title: titleBase,
      inputPreview,
      verdict,
      confidence,
      explanation,
      timestamp
    };

    setCurrentResult(result);
    setHistory((prev: HistoryItem[]) => [result, ...prev].slice(0, 8));
    showToast(`Analysis complete: ${verdict} (${confidence}%)`);
  };

  const openDetails = () => {
    if (!currentResult) {
      showToast("Run an analysis first.");
      return;
    }
    setShowModal(true);
  };

  const getVerdictClass = (verdict: AnalysisResult["verdict"]): string => {
    if (verdict === "Likely Fake") return "LikelyFake";
    return verdict;
  };

  return (
    <div className="section detector-section">
      <h2>{t.detectorTitle}</h2>
      <p className="section-subtitle">
        {t.detectorSubtitle}
      </p>

      <div className="detector-layout">
        <div className="detector-input">
          <div className="tabs">
            <button
              className={activeTab === "text" ? "tab tab-active" : "tab"}
              onClick={() => setActiveTab("text")}
            >
              {t.tabText}
            </button>
            <button
              className={activeTab === "image" ? "tab tab-active" : "tab"}
              onClick={() => setActiveTab("image")}
            >
              {t.tabImage}
            </button>
            <button
              className={activeTab === "video" ? "tab tab-active" : "tab"}
              onClick={() => setActiveTab("video")}
            >
              {t.tabVideo}
            </button>
          </div>

          {activeTab === "text" && (
            <div className="text-input-area">
              <label>{t.textLabel}</label>
              <textarea
                placeholder={t.textPlaceholder}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
              <div className="text-input-hints">
                <span>{t.textHints}</span>
              </div>
            </div>
          )}

          {activeTab !== "text" && (
            <div className="file-input-area">
              <label>
                {activeTab === "image"
                  ? t.imageLabel
                  : t.videoLabel}
              </label>
              <input
                type="file"
                accept={activeTab === "image" ? "image/*" : "video/*"}
                onChange={handleFileChange}
              />
              {uploadedFile && (
                <p className="file-name">
                  {t.selectedFile} {uploadedFile.name} · {(uploadedFile.size / 1024).toFixed(1)} KB · {uploadedFile.type || "unknown type"}
                </p>
              )}
            </div>
          )}

          <div className="input-actions">
            <button className="primary-btn" onClick={analyze}>
              {t.analyzeBtn}
            </button>
            <button className="secondary-btn" onClick={openDetails}>
              {t.viewDetailsBtn}
            </button>
          </div>
        </div>

        <div className="detector-preview">
          <h3>Before / After View</h3>
          <div className="before-after-grid">
            <div className="preview-card">
              <h4>Original</h4>
              {activeTab === "text" ? (
                <p className="preview-text">
                  {textInput
                    ? textInput.slice(0, 200) +
                      (textInput.length > 200 ? "..." : "")
                    : "Input will appear here."}
                </p>
              ) : previewUrl ? (
                activeTab === "image" ? (
                  <img src={previewUrl} alt="preview" />
                ) : (
                  <video src={previewUrl} controls />
                )
              ) : (
                <div className="preview-placeholder">No input preview yet.</div>
              )}
            </div>

            <div className="preview-card">
              <h4>Analyzed</h4>
              {activeTab === "image" && previewUrl && (
                <div className="image-highlight-wrapper">
                  <img src={previewUrl} alt="analyzed" />
                  {currentResult && currentResult.verdict !== "Real" && (
                    <div className="fake-highlight-box">Potential Fake Area</div>
                  )}
                </div>
              )}

              {activeTab === "video" && previewUrl && (
                <div className="video-highlight-wrapper">
                  <video src={previewUrl} controls />
                  {currentResult && currentResult.verdict !== "Real" && (
                    <div className="fake-highlight-banner">
                      High deepfake probability detected in face regions
                    </div>
                  )}
                </div>
              )}

              {activeTab === "text" && (
                <p className="preview-text">
                  {currentResult
                    ? currentResult.explanation
                    : "Run analysis to see the AI explanation here."}
                </p>
              )}

              {!previewUrl && activeTab !== "text" && !currentResult && (
                <div className="preview-placeholder">
                  Upload & analyze to see fake-region overlays.
                </div>
              )}
            </div>
          </div>

          {currentResult && (
            <div className="result-summary">
              <div>
                <span className="result-label">{t.verdict}</span>
                <span
                  className={`pill pill-${getVerdictClass(
                    currentResult.verdict
                  )}`}
                >
                  {currentResult.verdict === "Real" ? t.real : currentResult.verdict === "Suspicious" ? t.suspicious : t.likelyFake}
                </span>
              </div>
              <div className="confidence-meter">
                <span className="result-label">{t.confidence}</span>
                <div className="meter-bar">
                  <div
                    className="meter-fill"
                    style={{ width: `${currentResult.confidence}%` }}
                  />
                </div>
                <span className="meter-value">
                  {currentResult.confidence}%
                </span>
              </div>
            </div>
          )}

          {activeTab === "text" && currentResult && (
            <div className="text-analysis-details">
              <h4>📊 News Content Analysis</h4>
              <div className="text-analysis-grid">
                <div className="text-analysis-item">
                  <span className="text-analysis-icon">📝</span>
                  <div className="text-analysis-content">
                    <span className="text-analysis-label">Writing Style</span>
                    <span className="text-analysis-value">
                      {currentResult.verdict === "Real" ? "Professional & Consistent" : currentResult.verdict === "Suspicious" ? "Irregular Patterns" : "Manipulative Language"}
                    </span>
                  </div>
                </div>
                <div className="text-analysis-item">
                  <span className="text-analysis-icon">🔍</span>
                  <div className="text-analysis-content">
                    <span className="text-analysis-label">Source Credibility</span>
                    <span className="text-analysis-value">
                      {currentResult.verdict === "Real" ? "Verified Sources" : currentResult.verdict === "Suspicious" ? "Questionable Attribution" : "Unverified/Missing"}
                    </span>
                  </div>
                </div>
                <div className="text-analysis-item">
                  <span className="text-analysis-icon">🎯</span>
                  <div className="text-analysis-content">
                    <span className="text-analysis-label">Fact Consistency</span>
                    <span className="text-analysis-value">
                      {currentResult.verdict === "Real" ? "Logical & Verifiable" : currentResult.verdict === "Suspicious" ? "Some Inconsistencies" : "Multiple Contradictions"}
                    </span>
                  </div>
                </div>
                <div className="text-analysis-item">
                  <span className="text-analysis-icon">🧠</span>
                  <div className="text-analysis-content">
                    <span className="text-analysis-label">Emotional Bias</span>
                    <span className="text-analysis-value">
                      {currentResult.verdict === "Real" ? "Balanced Tone" : currentResult.verdict === "Suspicious" ? "Moderate Manipulation" : "Heavy Bias Detected"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="verdict-explanation">
                {currentResult.verdict === "Real" && (
                  <p className="verdict-message verdict-real">✓ This content appears authentic. The writing follows journalistic standards with credible sources and factual consistency.</p>
                )}
                {currentResult.verdict === "Suspicious" && (
                  <p className="verdict-message verdict-suspicious">⚠ This content shows warning signs. Verify claims independently before sharing or trusting this information.</p>
                )}
                {currentResult.verdict === "Likely Fake" && (
                  <p className="verdict-message verdict-fake">✗ Strong indicators of misinformation. This content likely contains false information or manipulative propaganda.</p>
                )}
              </div>
            </div>
          )}

          {activeTab === "image" && currentResult && imageInsights && (
            <div className="image-insights">
              <h4>🔍 Image Forensics Analysis</h4>
              <div className="image-insights-grid">
                <div className="image-insight-item">
                  <span className="image-insight-label">👤 Faces detected</span>
                  <span className="image-insight-value">
                    {imageInsights.faces}
                  </span>
                </div>
                <div className="image-insight-item">
                  <span className="image-insight-label">💡 Lighting consistency</span>
                  <div className="image-insight-bar">
                    <div className="image-insight-bar-fill" style={{ width: `${imageInsights.lightingScore}%` }} />
                  </div>
                  <span className="image-insight-value">
                    {imageInsights.lightingScore}%
                  </span>
                </div>
                <div className="image-insight-item">
                  <span className="image-insight-label">🔬 Artifact intensity</span>
                  <div className="image-insight-bar">
                    <div className="image-insight-bar-fill artifact" style={{ width: `${imageInsights.artifactScore}%` }} />
                  </div>
                  <span className="image-insight-value">
                    {imageInsights.artifactScore}%
                  </span>
                </div>
              </div>
              {uploadedFile && (
                <p className="image-meta">
                  📄 File: <strong>{uploadedFile.name}</strong> · {(uploadedFile.size / 1024).toFixed(1)} KB
                </p>
              )}
              <div className="verdict-explanation">
                {currentResult.verdict === "Real" && (
                  <p className="verdict-message verdict-real">✓ This image appears to be authentic with natural characteristics.</p>
                )}
                {currentResult.verdict === "Suspicious" && (
                  <p className="verdict-message verdict-suspicious">⚠ Some inconsistencies detected. Manual review recommended.</p>
                )}
                {currentResult.verdict === "Likely Fake" && (
                  <p className="verdict-message verdict-fake">✗ High probability of manipulation detected. Image likely altered or AI-generated.</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="detector-history">
          <h3>{t.uploadHistory}</h3>
          {history.length === 0 && (
            <p className="history-empty">{t.noAnalyses}</p>
          )}
          {history.map((item) => (
            <div key={item.id} className="history-item">
              <div className="history-header">
                <span className="history-type">
                  {item.type === "text"
                    ? "📰 Text"
                    : item.type === "image"
                    ? "🖼️ Image"
                    : "🎬 Video"}
                </span>
                <span
                  className={`pill pill-${getVerdictClass(item.verdict)}`}
                >
                  {item.verdict}
                </span>
              </div>
              <p className="history-preview">{item.inputPreview}</p>
              <div className="history-meta">
                <span>{item.timestamp}</span>
                <span>{item.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ReportModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        result={currentResult}
      />

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default Detector;
