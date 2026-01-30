import React from "react";

const BrowserExtension: React.FC = () => {
  return (
    <div className="extension-layout">
      <div className="extension-preview">
        <div className="extension-header">
          <span className="extension-title">DeepShield Extension</span>
          <span className="extension-domain">news.example.com</span>
        </div>
        <div className="extension-body">
          <div className="extension-main">
            <p className="extension-headline">
              Breaking: Viral video claims shocking event...
            </p>
            <button className="primary-btn small">Verify with AI</button>
            <div className="extension-result">
              <span className="pill pill-Suspicious">Suspicious</span>
              <span className="extension-confidence">68% confidence</span>
              <p className="extension-explanation">
                Headline phrasing and source signals suggest clickbait or
                partial misinformation. Open full report for details.
              </p>
            </div>
          </div>
          <div className="extension-sidebar">
            <h4>Real-time Indicators</h4>
            <ul>
              <li>🕒 Age of article</li>
              <li>🌐 Source credibility</li>
              <li>🎬 Video deepfake scan</li>
              <li>🔁 Cross-platform consistency</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="extension-details">
        <h3>Supported Browsers</h3>
        <div className="browser-list">
          <span>Chrome</span>
          <span>Firefox</span>
          <span>Edge</span>
          <span>Safari</span>
          <span>Opera</span>
        </div>
        <p>
          The extension adds a <strong>“Verify with AI”</strong> button next to
          news headlines and embedded videos. It runs the same multi-modal
          checks used in the main detector and shows a compact credibility
          summary.
        </p>
        <ul className="extension-features">
          <li>One-click verification on any page</li>
          <li>Real-time scanning of loaded content</li>
          <li>Visual credibility indicators (Real / Suspicious / Likely Fake)</li>
          <li>Links to full in-depth reports</li>
        </ul>
      </div>
    </div>
  );
};

export default BrowserExtension;
