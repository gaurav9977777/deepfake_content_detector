import React from "react";

export type AnalysisType = "text" | "image" | "video";

export interface AnalysisResult {
  id: string;
  type: AnalysisType;
  title: string;
  inputPreview: string;
  verdict: "Real" | "Suspicious" | "Likely Fake";
  confidence: number;
  explanation: string;
  timestamp: string;
}

interface ReportModalProps {
  visible: boolean;
  onClose: () => void;
  result: AnalysisResult | null;
}

const ReportModal: React.FC<ReportModalProps> = ({ visible, onClose, result }) => {
  if (!visible || !result) return null;

  const handleDownload = () => {
    const content = `
AI Fake News & Deepfake Detector – Analysis Report

ID: ${result.id}
Type: ${result.type.toUpperCase()}
Title: ${result.title}
Time: ${result.timestamp}

Verdict: ${result.verdict}
Confidence: ${result.confidence}%

Explanation:
${result.explanation}

Input Preview:
${result.inputPreview}
`.trim();

    const blob = new Blob([content], {
      type: "application/pdf"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `deepfake-report-${result.id}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <header className="modal-header">
          <h3>Detailed Analysis Report</h3>
          <button onClick={onClose}>✕</button>
        </header>
        <div className="modal-body">
          <p className="modal-meta">
            <span>Type: {result.type.toUpperCase()}</span>
            <span>•</span>
            <span>Time: {result.timestamp}</span>
          </p>
          <p className="modal-verdict">
            Verdict: <strong>{result.verdict}</strong> ({result.confidence}%)
          </p>
          <p className="modal-explanation">{result.explanation}</p>
          <div className="modal-input-preview">
            <h4>Input Preview</h4>
            <p>{result.inputPreview}</p>
          </div>
        </div>
        <footer className="modal-footer">
          <button className="secondary-btn" onClick={handleDownload}>
            Download Report
          </button>
          <button className="primary-btn" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ReportModal;
