import React, { useRef } from "react";
import { useLanguage } from "./LanguageContext";
import LanguageSelector from "./components/LanguageSelector";
import Detector from "./components/Detector";
import VideoCallDetector from "./components/VideoCallDetector";
import StatsDashboard from "./components/StatsDashboard";

const App: React.FC = () => {
  const detectorRef = useRef<HTMLDivElement | null>(null);
  const { t } = useLanguage();

  const scrollToDetector = () => {
    detectorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-root">
      <header className="top-bar">
        <div className="logo-area">
          <span className="logo-dot blue" />
          <span className="logo-dot red" />
          <span className="logo-dot yellow" />
          <span className="logo-dot green" />
          <span className="logo-text">DeepShield</span>
        </div>
        <nav className="nav-links">
          <button onClick={scrollToDetector}>{t.detector}</button>
          <a href="#video-call">{t.videoCall}</a>
          <a href="#features">{t.features}</a>
        </nav>
        <LanguageSelector />
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-text">
            <h1>{t.heroTitle}</h1>
            <p className="hero-subtitle">
              {t.heroSubtitle}
            </p>
            <div className="hero-badges">
              <span>{t.badge1}</span>
              <span>{t.badge2}</span>
              <span>{t.badge3}</span>
            </div>
            <div className="hero-actions">
              <button className="primary-btn" onClick={scrollToDetector}>
                {t.startVerification}
              </button>
              <a href="#video-call" className="ghost-btn">
                {t.tryVideoCall}
              </a>
            </div>
            <p className="hero-note">
              {t.privacyNote}
            </p>
          </div>
          <div className="hero-card">
            <div className="hero-card-title">{t.multiModalTitle}</div>
            <ul className="hero-card-list">
              <li>{t.feature1}</li>
              <li>{t.feature2}</li>
              <li>{t.feature3}</li>
              <li>{t.feature4}</li>
              <li>{t.feature5}</li>
            </ul>
          </div>
        </section>

        <section ref={detectorRef}>
          <Detector />
        </section>

        <StatsDashboard />

        <section id="video-call" className="section">
          <h2>{t.videoCallTitle}</h2>
          <p className="section-subtitle">
            {t.videoCallSubtitle}
          </p>
          <VideoCallDetector />
        </section>

        <section id="features" className="section">
          <h2>{t.featuresTitle}</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>{t.featureCard1Title}</h3>
              <p>{t.featureCard1Desc}</p>
            </div>
            <div className="feature-card">
              <h3>{t.featureCard2Title}</h3>
              <p>{t.featureCard2Desc}</p>
            </div>
            <div className="feature-card">
              <h3>{t.featureCard3Title}</h3>
              <p>{t.featureCard3Desc}</p>
            </div>
            <div className="feature-card">
              <h3>{t.featureCard4Title}</h3>
              <p>{t.featureCard4Desc}</p>
            </div>
            <div className="feature-card">
              <h3>{t.featureCard5Title}</h3>
              <p>{t.featureCard5Desc}</p>
            </div>
            <div className="feature-card">
              <h3>{t.featureCard6Title}</h3>
              <p>{t.featureCard6Desc}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} DeepShield Labs</span>
        <span>{t.footerDemo}</span>
      </footer>
    </div>
  );
};

export default App;
