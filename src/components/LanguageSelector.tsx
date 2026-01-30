import React from "react";
import { useLanguage } from "../LanguageContext";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" }
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div className="language-selector">
      <button className="language-button">
        <span>{current.flag}</span>
        <span className="language-label">{current.label}</span>
      </button>
      <div className="language-dropdown">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            className={
              "language-option" +
              (lang.code === language ? " language-option-active" : "")
            }
            onClick={() => setLanguage(lang.code)}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
