'use client';
import { useState } from 'react';
import './page.css'; // ⬅️ import the CSS file

import StatsCard from '../../components/ui/StatsCard';
import RecentActivity from '../../components/ui/RecentActivity';
import NewInterviewForm from '../../components/ui/NewInterviewForm';
import AIResultCard from '../../components/ui/AIResultCard';
import ReportTable from '../../components/ui/ReportTable';
import SettingsPanel from '../../components/ui/SettingsPanel';

export default function EmployerDashboard() {
  const [aiResult, setAiResult] = useState(null);
  const [reports, setReports] = useState([]);
  const [recentActivities, setRecentActivities] = useState([
    'Interview with John Doe',
    'Bias flagged in Q3',
    'Report exported',
  ]);

  const handleAI = (data) => {
    const result = {
      sentiment: 'Positive',
      engagement: 'High',
      bias: true,
      suggestion: 'Can you elaborate on your team experience?',
      score: 87,
      ...data,
      date: new Date().toLocaleDateString(),
    };
    setAiResult(result);
    setReports((prev) => [...prev, result]);
    setRecentActivities((prev) => [`Interview with ${data.name}`, ...prev]);
  };

  const averageScore = reports.length
    ? (reports.reduce((acc, r) => acc + (parseFloat(r.score) || 0), 0) / reports.length).toFixed(1) + '%'
    : '0%';

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome to FairHire</h1>
        <p className="dashboard-subtitle">Your AI-Powered Interview Assistant for Bias-Free Hiring</p>
      </div>

      <section className="dashboard-section">
        <h2 className="section-title">🚀 Core Capabilities</h2>
        <div className="card-grid">
          {[
            { title: 'Sentiment Analysis', desc: 'Understand tone, mood, confidence.', icon: '🎯' },
            { title: 'Engagement Tracking', desc: 'Track body language & responsiveness.', icon: '👁️' },
            { title: 'Bias Detection', desc: 'Flag biased questions & answers.', icon: '⚖️' },
            { title: 'Auto-Transcription', desc: 'Convert conversations to transcripts.', icon: '📝' },
            { title: 'Summarization', desc: 'Highlight key points & red flags.', icon: '📌' },
            { title: 'Follow-Up Suggestions', desc: 'Suggest follow-ups intelligently.', icon: '🤝' },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="feature-card">
              <h3 className="feature-title">{icon} <span>{title}</span></h3>
              <p className="feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2 className="section-title">📊 Performance Overview</h2>
        <div className="stat-grid">
          <StatsCard title="Interviews This Week" value={reports.length} />
          <StatsCard title="Avg. Fairness Score" value={averageScore} />
          <RecentActivity activities={recentActivities.slice(0, 3)} />
        </div>
      </section>

      <section className="dashboard-section">
        <h2 className="section-title">📝 Conduct New Interview</h2>
        <div className="form-box">
          <NewInterviewForm onSubmit={handleAI} />
        </div>
      </section>

      {aiResult && (
        <section className="dashboard-section">
          <h2 className="section-title">🤖 AI Analysis Summary</h2>
          <AIResultCard result={aiResult} />
        </section>
      )}

      <section className="dashboard-section">
        <h2 className="section-title">📄 Interview Reports</h2>
        <div className="form-box">
          <ReportTable reports={reports} onView={(r) => alert(`Viewing report for ${r.name}`)} />
        </div>
      </section>

      <section className="dashboard-section">
        <h2 className="section-title">⚙️ Settings & Export</h2>
        <div className="settings-grid">
          <SettingsPanel />
          <div className="form-box">
            <h3 className="text-xl font-semibold mb-4">📥 Export Options</h3>
            <button className="export-btn">Download PDF</button>
            <button className="export-btn">Export CSV</button>
          </div>
        </div>
      </section>
    </div>
  );
}
