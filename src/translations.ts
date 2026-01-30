export interface Translation {
  // Header
  detector: string;
  videoCall: string;
  features: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  badge1: string;
  badge2: string;
  badge3: string;
  startVerification: string;
  tryVideoCall: string;
  privacyNote: string;
  multiModalTitle: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;

  // Detector Console
  detectorTitle: string;
  detectorSubtitle: string;
  tabText: string;
  tabImage: string;
  tabVideo: string;
  
  // Text Analysis
  textLabel: string;
  textPlaceholder: string;
  textHints: string;
  
  // Image/Video
  imageLabel: string;
  videoLabel: string;
  selectedFile: string;
  
  // Buttons
  analyzeBtn: string;
  viewDetailsBtn: string;
  
  // Results
  verdict: string;
  confidence: string;
  real: string;
  suspicious: string;
  likelyFake: string;
  
  // Text Analysis Details
  newsAnalysisTitle: string;
  writingStyle: string;
  sourceCredibility: string;
  factConsistency: string;
  emotionalBias: string;
  
  // Image Analysis
  imageForensicsTitle: string;
  facesDetected: string;
  lightingConsistency: string;
  artifactIntensity: string;
  
  // Verdict Messages
  verdictReal: string;
  verdictSuspicious: string;
  verdictFake: string;
  
  // History
  uploadHistory: string;
  noAnalyses: string;
  
  // Video Call
  videoCallTitle: string;
  videoCallSubtitle: string;
  startCallBtn: string;
  endCallBtn: string;
  turnVideoOff: string;
  turnVideoOn: string;
  mute: string;
  unmute: string;
  switchCamera: string;
  liveScan: string;
  deepfakeRisk: string;
  riskLow: string;
  riskModerate: string;
  riskHigh: string;
  riskCritical: string;
  
  // Features Section
  featuresTitle: string;
  featureCard1Title: string;
  featureCard1Desc: string;
  featureCard2Title: string;
  featureCard2Desc: string;
  featureCard3Title: string;
  featureCard3Desc: string;
  featureCard4Title: string;
  featureCard4Desc: string;
  featureCard5Title: string;
  featureCard5Desc: string;
  featureCard6Title: string;
  featureCard6Desc: string;
  
  // Footer
  footerDemo: string;
}

export const translations: Record<string, Translation> = {
  en: {
    detector: "Detector",
    videoCall: "Video Call",
    features: "Features",
    
    heroTitle: "AI-based Fake News & Deepfake Detector",
    heroSubtitle: "Powered by Google Gemini-style ML, YouTube Safety concepts, and real-time deepfake analysis. Verify news, images, videos, and live calls in seconds.",
    badge1: "🔹 Google Gemini / ML",
    badge2: "🔹 YouTube Safety",
    badge3: "🔹 Real-time Deepfake Detection",
    startVerification: "Start Verification",
    tryVideoCall: "Try Live Video Call Detector",
    privacyNote: "Privacy-first: All analysis in this demo runs client-side with mock AI – no data leaves your browser.",
    multiModalTitle: "Multi-Modal AI Detector",
    feature1: "📰 Fake news text analysis with confidence %",
    feature2: "🖼️ Image deepfake detection + fake area highlight",
    feature3: "🎬 Video deepfake check with risk score",
    feature4: "📹 Live camera & video call monitoring",
    feature5: "🌍 12-language UI support",
    
    detectorTitle: "Detector Console",
    detectorSubtitle: "Analyze news articles, images, or videos for manipulation. View confidence scores, highlighted fake regions, and short AI explanations.",
    tabText: "📰 Text",
    tabImage: "🖼️ Image",
    tabVideo: "🎬 Video",
    
    textLabel: "📰 Paste News Article, Tweet, or Statement",
    textPlaceholder: "Paste the full article text, news headline, social media post, or any written content you want to verify for authenticity. The AI will analyze writing patterns, source credibility, factual consistency, and emotional manipulation indicators...",
    textHints: "🔍 AI checks: Source credibility • Writing style • Fact patterns • Emotional bias",
    
    imageLabel: "Upload image (JPG/PNG)",
    videoLabel: "Upload video (MP4/WebM)",
    selectedFile: "Selected:",
    
    analyzeBtn: "Analyze",
    viewDetailsBtn: "View Details",
    
    verdict: "Verdict",
    confidence: "Confidence",
    real: "✓ Real",
    suspicious: "⚠ Suspicious",
    likelyFake: "✗ Likely Fake",
    
    newsAnalysisTitle: "📊 News Content Analysis",
    writingStyle: "Writing Style",
    sourceCredibility: "Source Credibility",
    factConsistency: "Fact Consistency",
    emotionalBias: "Emotional Bias",
    
    imageForensicsTitle: "🔍 Image Forensics Analysis",
    facesDetected: "👤 Faces detected",
    lightingConsistency: "💡 Lighting consistency",
    artifactIntensity: "🔬 Artifact intensity",
    
    verdictReal: "✓ This content appears authentic. The writing follows journalistic standards with credible sources and factual consistency.",
    verdictSuspicious: "⚠ This content shows warning signs. Verify claims independently before sharing or trusting this information.",
    verdictFake: "✗ Strong indicators of misinformation. This content likely contains false information or manipulative propaganda.",
    
    uploadHistory: "Upload History",
    noAnalyses: "No analyses yet.",
    
    videoCallTitle: "Real-Time Video Call Deepfake Detector",
    videoCallSubtitle: "Start a secure video call session. The AI continuously monitors lip sync, facial movement, and emotion consistency. Instant alerts when suspicious patterns are detected.",
    startCallBtn: "Start Call & Scan",
    endCallBtn: "End Call",
    turnVideoOff: "Turn Video Off",
    turnVideoOn: "Turn Video On",
    mute: "Mute",
    unmute: "Unmute",
    switchCamera: "🔄 Switch Camera",
    liveScan: "LIVE AI SCAN • Risk",
    deepfakeRisk: "Deepfake Risk Meter",
    riskLow: "Low",
    riskModerate: "Moderate",
    riskHigh: "High",
    riskCritical: "Critical",
    
    featuresTitle: "Capabilities at a Glance",
    featureCard1Title: "Confidence & Accuracy",
    featureCard1Desc: "Every result shows a clear confidence percentage and is labeled as Real / Suspicious / Likely Fake.",
    featureCard2Title: "Fake Area Highlight",
    featureCard2Desc: "For images and live video, suspicious face regions are highlighted with a red overlay (demo visualization).",
    featureCard3Title: "Before / After View",
    featureCard3Desc: "Compare the original input with the analyzed output and risk indicators side by side.",
    featureCard4Title: "Upload History",
    featureCard4Desc: "Quickly revisit your last analyses, including type, timestamp, and result.",
    featureCard5Title: "AI Explanation",
    featureCard5Desc: "Short, readable explanations describing why content might be fake or manipulated.",
    featureCard6Title: "Downloadable Reports",
    featureCard6Desc: "Export a PDF-style report for each analysis for sharing or archiving.",
    
    footerDemo: "Demo only — mock AI, not production-grade detection.",
  },
  
  es: {
    detector: "Detector",
    videoCall: "Videollamada",
    features: "Características",
    
    heroTitle: "Detector de Noticias Falsas y Deepfakes con IA",
    heroSubtitle: "Impulsado por ML estilo Google Gemini, conceptos de YouTube Safety y análisis de deepfakes en tiempo real. Verifica noticias, imágenes, videos y llamadas en vivo en segundos.",
    badge1: "🔹 Google Gemini / ML",
    badge2: "🔹 Seguridad de YouTube",
    badge3: "🔹 Detección de Deepfakes en Tiempo Real",
    startVerification: "Iniciar Verificación",
    tryVideoCall: "Probar Detector de Videollamadas en Vivo",
    privacyNote: "Privacidad primero: Todo el análisis en esta demo se ejecuta del lado del cliente con IA simulada – ningún dato sale de tu navegador.",
    multiModalTitle: "Detector de IA Multi-Modal",
    feature1: "📰 Análisis de texto de noticias falsas con % de confianza",
    feature2: "🖼️ Detección de deepfakes en imágenes + resaltado de áreas falsas",
    feature3: "🎬 Verificación de deepfakes en video con puntuación de riesgo",
    feature4: "📹 Monitoreo de cámara en vivo y videollamadas",
    feature5: "🌍 Soporte de interfaz en 12 idiomas",
    
    detectorTitle: "Consola del Detector",
    detectorSubtitle: "Analiza artículos de noticias, imágenes o videos en busca de manipulación. Ve puntuaciones de confianza, regiones falsas resaltadas y explicaciones breves de IA.",
    tabText: "📰 Texto",
    tabImage: "🖼️ Imagen",
    tabVideo: "🎬 Video",
    
    textLabel: "📰 Pega Artículo de Noticias, Tweet o Declaración",
    textPlaceholder: "Pega el texto completo del artículo, titular de noticias, publicación en redes sociales o cualquier contenido escrito que desees verificar para autenticidad. La IA analizará patrones de escritura, credibilidad de fuentes, consistencia factual e indicadores de manipulación emocional...",
    textHints: "🔍 Verificaciones de IA: Credibilidad de fuentes • Estilo de escritura • Patrones de hechos • Sesgo emocional",
    
    imageLabel: "Subir imagen (JPG/PNG)",
    videoLabel: "Subir video (MP4/WebM)",
    selectedFile: "Seleccionado:",
    
    analyzeBtn: "Analizar",
    viewDetailsBtn: "Ver Detalles",
    
    verdict: "Veredicto",
    confidence: "Confianza",
    real: "✓ Real",
    suspicious: "⚠ Sospechoso",
    likelyFake: "✗ Probablemente Falso",
    
    newsAnalysisTitle: "📊 Análisis de Contenido de Noticias",
    writingStyle: "Estilo de Escritura",
    sourceCredibility: "Credibilidad de la Fuente",
    factConsistency: "Consistencia de Hechos",
    emotionalBias: "Sesgo Emocional",
    
    imageForensicsTitle: "🔍 Análisis Forense de Imagen",
    facesDetected: "👤 Caras detectadas",
    lightingConsistency: "💡 Consistencia de iluminación",
    artifactIntensity: "🔬 Intensidad de artefactos",
    
    verdictReal: "✓ Este contenido parece auténtico. La escritura sigue estándares periodísticos con fuentes creíbles y consistencia factual.",
    verdictSuspicious: "⚠ Este contenido muestra señales de advertencia. Verifica las afirmaciones de forma independiente antes de compartir o confiar en esta información.",
    verdictFake: "✗ Fuertes indicadores de desinformación. Este contenido probablemente contiene información falsa o propaganda manipuladora.",
    
    uploadHistory: "Historial de Subidas",
    noAnalyses: "Aún no hay análisis.",
    
    videoCallTitle: "Detector de Deepfakes en Videollamadas en Tiempo Real",
    videoCallSubtitle: "Inicia una sesión de videollamada segura. La IA monitorea continuamente la sincronización labial, el movimiento facial y la consistencia emocional. Alertas instantáneas cuando se detectan patrones sospechosos.",
    startCallBtn: "Iniciar Llamada y Escaneo",
    endCallBtn: "Finalizar Llamada",
    turnVideoOff: "Apagar Video",
    turnVideoOn: "Encender Video",
    mute: "Silenciar",
    unmute: "Activar Audio",
    switchCamera: "🔄 Cambiar Cámara",
    liveScan: "ESCANEO EN VIVO • Riesgo",
    deepfakeRisk: "Medidor de Riesgo de Deepfake",
    riskLow: "Bajo",
    riskModerate: "Moderado",
    riskHigh: "Alto",
    riskCritical: "Crítico",
    
    featuresTitle: "Capacidades de un Vistazo",
    featureCard1Title: "Confianza y Precisión",
    featureCard1Desc: "Cada resultado muestra un porcentaje de confianza claro y está etiquetado como Real / Sospechoso / Probablemente Falso.",
    featureCard2Title: "Resaltado de Área Falsa",
    featureCard2Desc: "Para imágenes y video en vivo, las regiones faciales sospechosas se resaltan con una superposición roja (visualización demo).",
    featureCard3Title: "Vista Antes / Después",
    featureCard3Desc: "Compara la entrada original con la salida analizada y los indicadores de riesgo lado a lado.",
    featureCard4Title: "Historial de Subidas",
    featureCard4Desc: "Revisa rápidamente tus últimos análisis, incluyendo tipo, marca de tiempo y resultado.",
    featureCard5Title: "Explicación de IA",
    featureCard5Desc: "Explicaciones cortas y legibles que describen por qué el contenido podría ser falso o manipulado.",
    featureCard6Title: "Informes Descargables",
    featureCard6Desc: "Exporta un informe estilo PDF para cada análisis para compartir o archivar.",
    
    footerDemo: "Solo demo — IA simulada, no detección de nivel de producción.",
  },
  
  fr: {
    detector: "Détecteur",
    videoCall: "Appel Vidéo",
    features: "Fonctionnalités",
    
    heroTitle: "Détecteur de Fausses Nouvelles et Deepfakes par IA",
    heroSubtitle: "Propulsé par ML style Google Gemini, concepts de YouTube Safety et analyse de deepfakes en temps réel. Vérifiez les actualités, images, vidéos et appels en direct en quelques secondes.",
    badge1: "🔹 Google Gemini / ML",
    badge2: "🔹 Sécurité YouTube",
    badge3: "🔹 Détection de Deepfakes en Temps Réel",
    startVerification: "Démarrer la Vérification",
    tryVideoCall: "Essayer le Détecteur d'Appel Vidéo en Direct",
    privacyNote: "Confidentialité d'abord : Toute l'analyse dans cette démo s'exécute côté client avec une IA simulée – aucune donnée ne quitte votre navigateur.",
    multiModalTitle: "Détecteur IA Multi-Modal",
    feature1: "📰 Analyse de texte de fausses nouvelles avec % de confiance",
    feature2: "🖼️ Détection de deepfakes d'image + mise en évidence de zone fausse",
    feature3: "🎬 Vérification de deepfakes vidéo avec score de risque",
    feature4: "📹 Surveillance de caméra en direct et d'appel vidéo",
    feature5: "🌍 Support d'interface en 12 langues",
    
    detectorTitle: "Console du Détecteur",
    detectorSubtitle: "Analysez les articles d'actualité, images ou vidéos pour manipulation. Affichez les scores de confiance, les régions fausses mises en évidence et de brèves explications d'IA.",
    tabText: "📰 Texte",
    tabImage: "🖼️ Image",
    tabVideo: "🎬 Vidéo",
    
    textLabel: "📰 Coller Article, Tweet ou Déclaration",
    textPlaceholder: "Collez le texte complet de l'article, titre d'actualité, publication sur les réseaux sociaux ou tout contenu écrit que vous souhaitez vérifier pour authenticité. L'IA analysera les modèles d'écriture, la crédibilité des sources, la cohérence factuelle et les indicateurs de manipulation émotionnelle...",
    textHints: "🔍 Vérifications IA : Crédibilité des sources • Style d'écriture • Modèles de faits • Biais émotionnel",
    
    imageLabel: "Télécharger image (JPG/PNG)",
    videoLabel: "Télécharger vidéo (MP4/WebM)",
    selectedFile: "Sélectionné :",
    
    analyzeBtn: "Analyser",
    viewDetailsBtn: "Voir les Détails",
    
    verdict: "Verdict",
    confidence: "Confiance",
    real: "✓ Réel",
    suspicious: "⚠ Suspect",
    likelyFake: "✗ Probablement Faux",
    
    newsAnalysisTitle: "📊 Analyse du Contenu des Actualités",
    writingStyle: "Style d'Écriture",
    sourceCredibility: "Crédibilité de la Source",
    factConsistency: "Cohérence des Faits",
    emotionalBias: "Biais Émotionnel",
    
    imageForensicsTitle: "🔍 Analyse Forensique d'Image",
    facesDetected: "👤 Visages détectés",
    lightingConsistency: "💡 Cohérence de l'éclairage",
    artifactIntensity: "🔬 Intensité des artefacts",
    
    verdictReal: "✓ Ce contenu semble authentique. L'écriture suit les normes journalistiques avec des sources crédibles et une cohérence factuelle.",
    verdictSuspicious: "⚠ Ce contenu montre des signes d'avertissement. Vérifiez les affirmations de manière indépendante avant de partager ou de faire confiance à cette information.",
    verdictFake: "✗ Forts indicateurs de désinformation. Ce contenu contient probablement de fausses informations ou de la propagande manipulatrice.",
    
    uploadHistory: "Historique des Téléchargements",
    noAnalyses: "Aucune analyse pour le moment.",
    
    videoCallTitle: "Détecteur de Deepfakes en Appel Vidéo en Temps Réel",
    videoCallSubtitle: "Démarrez une session d'appel vidéo sécurisée. L'IA surveille en continu la synchronisation labiale, le mouvement facial et la cohérence émotionnelle. Alertes instantanées lorsque des modèles suspects sont détectés.",
    startCallBtn: "Démarrer l'Appel et Scanner",
    endCallBtn: "Terminer l'Appel",
    turnVideoOff: "Désactiver Vidéo",
    turnVideoOn: "Activer Vidéo",
    mute: "Couper le Son",
    unmute: "Activer le Son",
    switchCamera: "🔄 Changer de Caméra",
    liveScan: "SCAN EN DIRECT • Risque",
    deepfakeRisk: "Indicateur de Risque Deepfake",
    riskLow: "Faible",
    riskModerate: "Modéré",
    riskHigh: "Élevé",
    riskCritical: "Critique",
    
    featuresTitle: "Capacités en un Coup d'Œil",
    featureCard1Title: "Confiance et Précision",
    featureCard1Desc: "Chaque résultat affiche un pourcentage de confiance clair et est étiqueté comme Réel / Suspect / Probablement Faux.",
    featureCard2Title: "Mise en Évidence de Zone Fausse",
    featureCard2Desc: "Pour les images et vidéos en direct, les régions faciales suspectes sont mises en évidence avec une superposition rouge (visualisation démo).",
    featureCard3Title: "Vue Avant / Après",
    featureCard3Desc: "Comparez l'entrée originale avec la sortie analysée et les indicateurs de risque côte à côte.",
    featureCard4Title: "Historique des Téléchargements",
    featureCard4Desc: "Revisitez rapidement vos dernières analyses, y compris le type, l'horodatage et le résultat.",
    featureCard5Title: "Explication IA",
    featureCard5Desc: "Explications courtes et lisibles décrivant pourquoi le contenu pourrait être faux ou manipulé.",
    featureCard6Title: "Rapports Téléchargeables",
    featureCard6Desc: "Exportez un rapport de style PDF pour chaque analyse pour le partage ou l'archivage.",
    
    footerDemo: "Démo uniquement — IA simulée, pas de détection de niveau production.",
  },
  
  de: {
    detector: "Detektor",
    videoCall: "Videoanruf",
    features: "Funktionen",
    
    heroTitle: "KI-basierter Fake News & Deepfake Detektor",
    heroSubtitle: "Angetrieben von Google Gemini-artigem ML, YouTube Safety-Konzepten und Echtzeit-Deepfake-Analyse. Überprüfen Sie Nachrichten, Bilder, Videos und Live-Anrufe in Sekunden.",
    badge1: "🔹 Google Gemini / ML",
    badge2: "🔹 YouTube-Sicherheit",
    badge3: "🔹 Echtzeit-Deepfake-Erkennung",
    startVerification: "Überprüfung Starten",
    tryVideoCall: "Live-Videoanruf-Detektor Testen",
    privacyNote: "Privatsphäre zuerst: Alle Analysen in dieser Demo laufen clientseitig mit simulierter KI – keine Daten verlassen Ihren Browser.",
    multiModalTitle: "Multi-Modaler KI-Detektor",
    feature1: "📰 Fake-News-Textanalyse mit Vertrauens-%",
    feature2: "🖼️ Bild-Deepfake-Erkennung + Hervorhebung gefälschter Bereiche",
    feature3: "🎬 Video-Deepfake-Überprüfung mit Risiko-Score",
    feature4: "📹 Live-Kamera- und Videoanruf-Überwachung",
    feature5: "🌍 12-Sprachen-UI-Unterstützung",
    
    detectorTitle: "Detektor-Konsole",
    detectorSubtitle: "Analysieren Sie Nachrichtenartikel, Bilder oder Videos auf Manipulation. Zeigen Sie Vertrauenswerte, hervorgehobene gefälschte Bereiche und kurze KI-Erklärungen an.",
    tabText: "📰 Text",
    tabImage: "🖼️ Bild",
    tabVideo: "🎬 Video",
    
    textLabel: "📰 Nachrichtenartikel, Tweet oder Aussage Einfügen",
    textPlaceholder: "Fügen Sie den vollständigen Artikeltext, Nachrichtentitel, Social-Media-Beitrag oder beliebigen geschriebenen Inhalt ein, den Sie auf Authentizität überprüfen möchten. Die KI analysiert Schreibmuster, Quellenglaubwürdigkeit, faktische Konsistenz und emotionale Manipulationsindikatoren...",
    textHints: "🔍 KI-Prüfungen: Quellenglaubwürdigkeit • Schreibstil • Faktenmuster • Emotionale Voreingenommenheit",
    
    imageLabel: "Bild hochladen (JPG/PNG)",
    videoLabel: "Video hochladen (MP4/WebM)",
    selectedFile: "Ausgewählt:",
    
    analyzeBtn: "Analysieren",
    viewDetailsBtn: "Details Anzeigen",
    
    verdict: "Urteil",
    confidence: "Vertrauen",
    real: "✓ Echt",
    suspicious: "⚠ Verdächtig",
    likelyFake: "✗ Wahrscheinlich Gefälscht",
    
    newsAnalysisTitle: "📊 Nachrichteninhaltsanalyse",
    writingStyle: "Schreibstil",
    sourceCredibility: "Quellenglaubwürdigkeit",
    factConsistency: "Faktenkonsistenz",
    emotionalBias: "Emotionale Voreingenommenheit",
    
    imageForensicsTitle: "🔍 Bildforensische Analyse",
    facesDetected: "👤 Erkannte Gesichter",
    lightingConsistency: "💡 Beleuchtungskonsistenz",
    artifactIntensity: "🔬 Artefakt-Intensität",
    
    verdictReal: "✓ Dieser Inhalt scheint authentisch. Das Schreiben folgt journalistischen Standards mit glaubwürdigen Quellen und faktischer Konsistenz.",
    verdictSuspicious: "⚠ Dieser Inhalt zeigt Warnzeichen. Überprüfen Sie Behauptungen unabhängig, bevor Sie diese Informationen teilen oder ihnen vertrauen.",
    verdictFake: "✗ Starke Indikatoren für Desinformation. Dieser Inhalt enthält wahrscheinlich falsche Informationen oder manipulative Propaganda.",
    
    uploadHistory: "Upload-Verlauf",
    noAnalyses: "Noch keine Analysen.",
    
    videoCallTitle: "Echtzeit-Videoanruf-Deepfake-Detektor",
    videoCallSubtitle: "Starten Sie eine sichere Videoanrufsitzung. Die KI überwacht kontinuierlich Lippensynchronisation, Gesichtsbewegung und emotionale Konsistenz. Sofortige Warnungen, wenn verdächtige Muster erkannt werden.",
    startCallBtn: "Anruf Starten & Scannen",
    endCallBtn: "Anruf Beenden",
    turnVideoOff: "Video Ausschalten",
    turnVideoOn: "Video Einschalten",
    mute: "Stummschalten",
    unmute: "Stummschaltung Aufheben",
    switchCamera: "🔄 Kamera Wechseln",
    liveScan: "LIVE-SCAN • Risiko",
    deepfakeRisk: "Deepfake-Risikomesser",
    riskLow: "Niedrig",
    riskModerate: "Moderat",
    riskHigh: "Hoch",
    riskCritical: "Kritisch",
    
    featuresTitle: "Fähigkeiten auf einen Blick",
    featureCard1Title: "Vertrauen und Genauigkeit",
    featureCard1Desc: "Jedes Ergebnis zeigt einen klaren Vertrauensprozentsatz und ist als Echt / Verdächtig / Wahrscheinlich Gefälscht gekennzeichnet.",
    featureCard2Title: "Hervorhebung Gefälschter Bereiche",
    featureCard2Desc: "Für Bilder und Live-Videos werden verdächtige Gesichtsbereiche mit einer roten Überlagerung hervorgehoben (Demo-Visualisierung).",
    featureCard3Title: "Vorher / Nachher Ansicht",
    featureCard3Desc: "Vergleichen Sie die ursprüngliche Eingabe mit der analysierten Ausgabe und Risikoindikatoren nebeneinander.",
    featureCard4Title: "Upload-Verlauf",
    featureCard4Desc: "Überprüfen Sie schnell Ihre letzten Analysen, einschließlich Typ, Zeitstempel und Ergebnis.",
    featureCard5Title: "KI-Erklärung",
    featureCard5Desc: "Kurze, lesbare Erklärungen, die beschreiben, warum Inhalte gefälscht oder manipuliert sein könnten.",
    featureCard6Title: "Herunterladbare Berichte",
    featureCard6Desc: "Exportieren Sie einen PDF-artigen Bericht für jede Analyse zum Teilen oder Archivieren.",
    
    footerDemo: "Nur Demo — simulierte KI, keine produktionsreife Erkennung.",
  },
  
  hi: {
    detector: "डिटेक्टर",
    videoCall: "वीडियो कॉल",
    features: "फीचर्स",
    
    heroTitle: "AI-आधारित फेक न्यूज़ और डीपफेक डिटेक्टर",
    heroSubtitle: "Google Gemini-स्टाइल ML, YouTube Safety अवधारणाओं और रियल-टाइम डीपफेक विश्लेषण द्वारा संचालित। समाचार, छवियों, वीडियो और लाइव कॉल को सेकंडों में सत्यापित करें।",
    badge1: "🔹 Google Gemini / ML",
    badge2: "🔹 YouTube सुरक्षा",
    badge3: "🔹 रियल-टाइम डीपफेक पहचान",
    startVerification: "सत्यापन शुरू करें",
    tryVideoCall: "लाइव वीडियो कॉल डिटेक्टर आज़माएं",
    privacyNote: "गोपनीयता पहले: इस डेमो में सभी विश्लेषण क्लाइंट-साइड पर मॉक AI के साथ चलता है – कोई डेटा आपके ब्राउज़र से बाहर नहीं जाता।",
    multiModalTitle: "मल्टी-मोडल AI डिटेक्टर",
    feature1: "📰 विश्वास % के साथ फेक न्यूज़ टेक्स्ट विश्लेषण",
    feature2: "🖼️ इमेज डीपफेक पहचान + फेक एरिया हाइलाइट",
    feature3: "🎬 जोखिम स्कोर के साथ वीडियो डीपफेक जांच",
    feature4: "📹 लाइव कैमरा और वीडियो कॉल निगरानी",
    feature5: "🌍 12-भाषा UI समर्थन",
    
    detectorTitle: "डिटेक्टर कंसोल",
    detectorSubtitle: "समाचार लेखों, छवियों या वीडियो का हेरफेर के लिए विश्लेषण करें। विश्वास स्कोर, हाइलाइट किए गए फेक क्षेत्र और संक्षिप्त AI स्पष्टीकरण देखें।",
    tabText: "📰 टेक्स्ट",
    tabImage: "🖼️ इमेज",
    tabVideo: "🎬 वीडियो",
    
    textLabel: "📰 समाचार लेख, ट्वीट या बयान पेस्ट करें",
    textPlaceholder: "पूरा लेख टेक्स्ट, समाचार शीर्षक, सोशल मीडिया पोस्ट, या कोई भी लिखित सामग्री पेस्ट करें जिसे आप प्रामाणिकता के लिए सत्यापित करना चाहते हैं। AI लेखन पैटर्न, स्रोत विश्वसनीयता, तथ्यात्मक स्थिरता और भावनात्मक हेरफेर संकेतकों का विश्लेषण करेगा...",
    textHints: "🔍 AI जांच: स्रोत विश्वसनीयता • लेखन शैली • तथ्य पैटर्न • भावनात्मक पूर्वाग्रह",
    
    imageLabel: "इमेज अपलोड करें (JPG/PNG)",
    videoLabel: "वीडियो अपलोड करें (MP4/WebM)",
    selectedFile: "चयनित:",
    
    analyzeBtn: "विश्लेषण करें",
    viewDetailsBtn: "विवरण देखें",
    
    verdict: "फैसला",
    confidence: "विश्वास",
    real: "✓ असली",
    suspicious: "⚠ संदिग्ध",
    likelyFake: "✗ संभवतः नकली",
    
    newsAnalysisTitle: "📊 समाचार सामग्री विश्लेषण",
    writingStyle: "लेखन शैली",
    sourceCredibility: "स्रोत विश्वसनीयता",
    factConsistency: "तथ्य स्थिरता",
    emotionalBias: "भावनात्मक पूर्वाग्रह",
    
    imageForensicsTitle: "🔍 इमेज फोरेंसिक विश्लेषण",
    facesDetected: "👤 चेहरे पहचाने गए",
    lightingConsistency: "💡 प्रकाश स्थिरता",
    artifactIntensity: "🔬 आर्टिफैक्ट तीव्रता",
    
    verdictReal: "✓ यह सामग्री प्रामाणिक प्रतीत होती है। लेखन विश्वसनीय स्रोतों और तथ्यात्मक स्थिरता के साथ पत्रकारिता मानकों का पालन करता है।",
    verdictSuspicious: "⚠ यह सामग्री चेतावनी संकेत दिखाती है। इस जानकारी को साझा करने या भरोसा करने से पहले दावों को स्वतंत्र रूप से सत्यापित करें।",
    verdictFake: "✗ गलत सूचना के मजबूत संकेतक। इस सामग्री में संभवतः झूठी जानकारी या हेरफेर करने वाला प्रचार है।",
    
    uploadHistory: "अपलोड इतिहास",
    noAnalyses: "अभी तक कोई विश्लेषण नहीं।",
    
    videoCallTitle: "रियल-टाइम वीडियो कॉल डीपफेक डिटेक्टर",
    videoCallSubtitle: "एक सुरक्षित वीडियो कॉल सत्र शुरू करें। AI लगातार लिप सिंक, चेहरे की गति और भावनात्मक स्थिरता की निगरानी करता है। संदिग्ध पैटर्न का पता चलने पर तुरंत अलर्ट।",
    startCallBtn: "कॉल शुरू करें और स्कैन करें",
    endCallBtn: "कॉल समाप्त करें",
    turnVideoOff: "वीडियो बंद करें",
    turnVideoOn: "वीडियो चालू करें",
    mute: "म्यूट करें",
    unmute: "अनम्यूट करें",
    switchCamera: "🔄 कैमरा स्विच करें",
    liveScan: "लाइव AI स्कैन • जोखिम",
    deepfakeRisk: "डीपफेक जोखिम मीटर",
    riskLow: "कम",
    riskModerate: "मध्यम",
    riskHigh: "उच्च",
    riskCritical: "गंभीर",
    
    featuresTitle: "एक नज़र में क्षमताएं",
    featureCard1Title: "विश्वास और सटीकता",
    featureCard1Desc: "प्रत्येक परिणाम एक स्पष्ट विश्वास प्रतिशत दिखाता है और असली / संदिग्ध / संभवतः नकली के रूप में लेबल किया जाता है।",
    featureCard2Title: "फेक एरिया हाइलाइट",
    featureCard2Desc: "छवियों और लाइव वीडियो के लिए, संदिग्ध चेहरे के क्षेत्रों को लाल ओवरले (डेमो विज़ुअलाइज़ेशन) के साथ हाइलाइट किया जाता है।",
    featureCard3Title: "पहले / बाद का दृश्य",
    featureCard3Desc: "मूल इनपुट की तुलना विश्लेषित आउटपुट और जोखिम संकेतकों के साथ करें।",
    featureCard4Title: "अपलोड इतिहास",
    featureCard4Desc: "अपने पिछले विश्लेषणों को शीघ्रता से फिर से देखें, जिसमें प्रकार, टाइमस्टैम्प और परिणाम शामिल हैं।",
    featureCard5Title: "AI स्पष्टीकरण",
    featureCard5Desc: "संक्षिप्त, पठनीय स्पष्टीकरण जो बताते हैं कि सामग्री नकली या हेरफेर क्यों हो सकती है।",
    featureCard6Title: "डाउनलोड करने योग्य रिपोर्ट",
    featureCard6Desc: "साझा करने या संग्रहीत करने के लिए प्रत्येक विश्लेषण के लिए PDF-शैली रिपोर्ट निर्यात करें।",
    
    footerDemo: "केवल डेमो — मॉक AI, उत्पादन-स्तर की पहचान नहीं।",
  },
};
