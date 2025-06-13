'use client';

import Link from 'next/link';
import '../styles/globals.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Import router

export default function HomePage() {
  const [role, setRole] = useState('Candidate');
  const router = useRouter(); // ✅ Initialize router

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === 'Employer') {
      router.push('/employerdashboard'); // ✅ Navigate to Employer Dashboard
    } else {
      router.push('/candidatedashboard'); // Optional: Candidate dashboard
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">FairHire</h1>
        <p className="glow-text">
          AI Interview Assistant for Bias-Free Hiring —<br />
          Ensuring every voice heard, fairly.
        </p>
      </div>

      <div className="card">
        <div className="role-toggle">
          <button
            className={role === 'Candidate' ? 'active' : ''}
            onClick={() => setRole('Candidate')}
          >
            Candidate
          </button>
          <button
            className={role === 'Employer' ? 'active' : ''}
            onClick={() => setRole('Employer')}
          >
            Employer
          </button>
        </div>

        <h2>Login as {role}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" required placeholder="you@example.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" required placeholder="••••••••" />
          </div>

          <button className="Login" href= "/employer-dashboard" type="submit">LogIn</button>

          <Link href="/signin">SignIn</Link>
        </form>
      </div>
    </div>
  );
}
