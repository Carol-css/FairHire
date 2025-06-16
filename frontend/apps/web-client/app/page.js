'use client';

import Link from 'next/link';
import '../styles/globals.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [role, setRole] = useState('Candidate');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === 'Employer') {
      router.push('/employerdashboard');
    } else {
      router.push('/candidatedashboard');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">FairHire</h1>
        <p className="glow-text">
          AI Interview Assistant for Bias-Free Hiring —<br />
          Ensuring every voice is heard, fairly.
        </p>
      </header>

      <div className="card">
        <div className="role-toggle">
          <button
            className={`toggle-btn ${role === 'Candidate' ? 'active' : ''}`}
            onClick={() => setRole('Candidate')}
            type="button"
          >
            Candidate
          </button>
          <button
            className={`toggle-btn ${role === 'Employer' ? 'active' : ''}`}
            onClick={() => setRole('Employer')}
            type="button"
          >
            Employer
          </button>
        </div>

        <h2 className="login-title">Login as {role}</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" required placeholder="you@example.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" required placeholder="••••••••" />
          </div>

          <button type="submit" className="login-btn">🔐 Log In</button>

          <div className="signin-link">
            <span>Don't have an account? </span>
            <Link href="/signin" className="link">Sign Up</Link>
          </div>
        </form>
      </div>

      {/* ✅ Dashboard Content Section */}
      <section className="dashboard-info">
        <h2>Welcome to FairHire</h2>
        <p>Your AI-Powered Interview Assistant for Bias-Free Hiring</p>

        <div className="info-grid">
          <div>
            <h3>🎯 Sentiment Analysis</h3>
            <p>Understand the tone, mood, and confidence levels of candidates.</p>
          </div>
          <div>
            <h3>👁️ Engagement Tracking</h3>
            <p>Track body language and responsiveness in real-time.</p>
          </div>
          <div>
            <h3>⚖️ Bias Detection</h3>
            <p>AI flags biased questions or answers during interviews.</p>
          </div>
          <div>
            <h3>✍️ Auto-Transcription</h3>
            <p>Converts conversations into structured transcripts automatically.</p>
          </div>
          <div>
            <h3>📌 Summarization</h3>
            <p>Highlights key points and flags during the session.</p>
          </div>
          <div>
            <h3>🤝 Follow-Up Suggestions</h3>
            <p>Smart questions based on candidate performance and discussion.</p>
          </div>
        </div>

        <p className="note">✅ Promote fair, inclusive, and efficient hiring with FairHire.</p>
      </section>
    </div>
  );
}
