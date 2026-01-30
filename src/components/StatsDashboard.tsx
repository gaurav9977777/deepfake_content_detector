import React, { useState, useEffect } from "react";

interface TrendingItem {
  id: string;
  topic: string;
  count: number;
  risk: "High Risk" | "Medium Risk" | "Low Risk";
}

const TRENDING_TOPICS = [
  { topic: "Political Deepfakes", baseCount: 2341, risk: "High Risk" as const },
  { topic: "Health Misinformation", baseCount: 1823, risk: "Medium Risk" as const },
  { topic: "Celebrity Rumors", baseCount: 945, risk: "Low Risk" as const },
  { topic: "AI-Generated Images", baseCount: 1567, risk: "High Risk" as const },
  { topic: "Financial Scams", baseCount: 2103, risk: "High Risk" as const },
  { topic: "Climate Change Myths", baseCount: 1234, risk: "Medium Risk" as const },
];

const StatsDashboard: React.FC = () => {
  const [contentAnalyzed, setContentAnalyzed] = useState(1200000);
  const [fakeDetected, setFakeDetected] = useState(340000);
  const [accuracy, setAccuracy] = useState(89);
  const [countries, setCountries] = useState(150);
  const [trending, setTrending] = useState<TrendingItem[]>([]);

  // Animate numbers on mount
  useEffect(() => {
    const animateValue = (
      start: number,
      end: number,
      duration: number,
      setter: (value: number) => void
    ) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        setter(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    animateValue(0, 1200000, 2000, setContentAnalyzed);
    animateValue(0, 340000, 2000, setFakeDetected);
    animateValue(0, 89, 2000, setAccuracy);
    animateValue(0, 150, 2000, setCountries);

    // Initialize trending with 3 random topics
    const shuffled = [...TRENDING_TOPICS].sort(() => 0.5 - Math.random());
    setTrending(
      shuffled.slice(0, 3).map((item, index) => ({
        id: `${index}`,
        topic: item.topic,
        count: item.baseCount,
        risk: item.risk,
      }))
    );
  }, []);

  // Update trending topics every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...TRENDING_TOPICS].sort(() => 0.5 - Math.random());
      setTrending((prev) =>
        shuffled.slice(0, 3).map((item, index) => {
          const oldItem = prev.find((p) => p.topic === item.topic);
          return {
            id: `${Date.now()}-${index}`,
            topic: item.topic,
            count: oldItem
              ? oldItem.count + Math.floor(Math.random() * 50 + 10)
              : item.baseCount,
            risk: item.risk,
          };
        })
      );

      // Increment main stats slightly
      setContentAnalyzed((prev) => prev + Math.floor(Math.random() * 100 + 50));
      setFakeDetected((prev) => prev + Math.floor(Math.random() * 30 + 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M+`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K+`;
    }
    return num.toString();
  };

  const getRiskClass = (risk: string): string => {
    if (risk === "High Risk") return "danger";
    if (risk === "Medium Risk") return "warning";
    return "success";
  };

  return (
    <section className="section stats-dashboard">
      <h2>🎯 Global Impact Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🔍</div>
          <div className="stat-value">{formatNumber(contentAnalyzed)}</div>
          <div className="stat-label">Content Analyzed</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div className="stat-value">{formatNumber(fakeDetected)}</div>
          <div className="stat-label">Fake News Detected</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-value">{accuracy}%</div>
          <div className="stat-label">Accuracy Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🌍</div>
          <div className="stat-value">{countries}+</div>
          <div className="stat-label">Countries Served</div>
        </div>
      </div>
      <div className="trending-section">
        <h3>📈 Trending Misinformation Topics (Last 24h)</h3>
        <div className="trending-list">
          {trending.map((item) => (
            <div key={item.id} className="trending-item trending-fade-in">
              <span className={`trending-badge ${getRiskClass(item.risk)}`}>
                {item.risk}
              </span>
              <span className="trending-topic">{item.topic}</span>
              <span className="trending-count">+{item.count.toLocaleString()} cases</span>
            </div>
          ))}
        </div>
        <div className="live-indicator">
          <span className="live-dot"></span>
          <span className="live-text">Live updates every 5 seconds</span>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
