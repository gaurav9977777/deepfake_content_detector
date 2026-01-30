# 🛡️ DeepShield - AI Fake News & Deepfake Detector

An advanced multi-modal AI system for detecting fake news, deepfakes, and manipulated content in real-time. Built with React, TypeScript, and powered by cutting-edge machine learning concepts inspired by Google Gemini and YouTube Safety technologies.

## 🌟 Key Features

### 🔍 Multi-Modal Detection
- **📰 Text Analysis**: Detects fake news articles, social media posts, and written content with confidence scoring
- **🖼️ Image Deepfake Detection**: Identifies manipulated images with fake area highlighting
- **🎬 Video Analysis**: Analyzes videos for deepfake indicators and risk assessment
- **📹 Live Video Call Monitoring**: Real-time deepfake detection during video calls

### 🌍 Global Accessibility
- **12-Language Support**: English, Spanish, French, German, Hindi, and 7 more languages
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Privacy-First**: All processing happens client-side (demo version)

### 📊 Advanced Analytics
- Confidence percentage scoring for all detections
- Detailed forensic analysis with visual highlights
- Upload history tracking
- Downloadable PDF-style reports
- Real-time statistics dashboard

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sejalAi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
```

The built files will be available in the `dist/` directory.

## 🎯 Usage Guide

### Text Detection
1. Navigate to the Detector section
2. Select the "Text" tab
3. Paste news articles, tweets, or any written content
4. Click "Analyze" to get authenticity assessment
5. View detailed analysis including:
   - Writing style evaluation
   - Source credibility scoring
   - Fact consistency analysis
   - Emotional bias detection

### Image Analysis
1. Select the "Image" tab in Detector
2. Upload JPG/PNG files
3. System analyzes for:
   - Face manipulation detection
   - Lighting inconsistency
   - Digital artifacts
   - Composite image indicators
4. Suspicious areas are visually highlighted

### Video Detection
1. Choose the "Video" tab
2. Upload MP4/WebM files
3. Get risk scoring and frame-by-frame analysis
4. Identify temporal inconsistencies

### Live Video Call Detection
1. Go to the "Video Call" section
2. Grant camera permissions
3. Start secure video call session
4. AI continuously monitors:
   - Lip synchronization
   - Facial movement patterns
   - Emotional expression consistency
5. Real-time risk meter with instant alerts

## 🏗️ Technical Architecture

### Frontend Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **CSS Modules** for scoped styling
- **WebRTC** for live video streaming

### Core Components
- `App.tsx` - Main application router and layout
- `Detector.tsx` - Multi-tab content analysis interface
- `VideoCallDetector.tsx` - Real-time video monitoring
- `StatsDashboard.tsx` - Analytics and trending topics
- `LanguageSelector.tsx` - Internationalization handler
- `ReportModal.tsx` - Detailed analysis results display

### State Management
- React Context API for language preferences
- Local component state for UI interactions
- Session-based history tracking

## 🌐 Internationalization

Supports 12 languages with full UI translation:
- English (en)
- Spanish (es)  
- French (fr)
- German (de)
- Hindi (hi)
- And 7 additional languages

Translations are managed through the `translations.ts` file with comprehensive key-value mappings for all UI elements.

## 🔒 Privacy & Security

This demo application prioritizes user privacy:
- All analysis runs client-side in the browser
- No data is transmitted to external servers
- Media streams are processed locally
- Temporary session storage only

*Note: This is a demonstration application using mock AI algorithms for educational purposes.*

## 📈 Performance Metrics

The application includes a statistics dashboard showing:
- Total content analyzed
- Detection accuracy rates
- Popular trending topics
- Risk distribution analytics
- Real-time system metrics

## 🛠️ Development

### Project Structure
```
src/
├── components/           # React components
│   ├── Detector.tsx     # Main detection interface
│   ├── VideoCallDetector.tsx
│   ├── StatsDashboard.tsx
│   ├── LanguageSelector.tsx
│   └── ReportModal.tsx
├── App.tsx             # Root application component
├── LanguageContext.tsx # i18n context provider
├── translations.ts     # Language translations
├── styles.css         # Global styling
└── main.tsx           # Application entry point
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build

### Customization
- Modify detection algorithms in `Detector.tsx`
- Add new languages in `translations.ts`
- Extend styling in `styles.css`
- Add new features by creating components in `/components`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for:

- Bug fixes
- Feature enhancements
- Translation improvements
- Performance optimizations
- Documentation updates

## ⚠️ Disclaimer

This is a demonstration application designed for educational purposes. The detection algorithms are simulated and not suitable for production use in critical applications. For real-world deepfake detection, please use enterprise-grade solutions with proper validation.

## 📄 License

This project is for demonstration purposes only. All rights reserved.

## 🙏 Acknowledgments

- Inspired by Google Gemini ML concepts
- Influenced by YouTube Safety technologies
- Built with modern web development best practices
- Designed with user privacy as a top priority

---

<p align="center">
  <strong>🛡️ Protecting truth in the digital age 🛡️</strong>
</p>

<p align="center">
  Made with ❤️ using React and TypeScript
</p>
