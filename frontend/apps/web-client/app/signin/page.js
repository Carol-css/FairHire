'use client';

import React, { useState } from 'react';
import './page.css';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>

        <form className="signin-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="input" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className="input password-input"
                placeholder="Enter your password"
                required
              />
              <span className="toggle-icon" onClick={togglePassword}>
                {showPassword ? '👁️' : '🙈'}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label>Age</label>
            <input type="number" className="input" placeholder="Enter your age" required />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select className="input" required>
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>

          <div className="form-group">
            <label>Country</label>
            <select className="input" required>
              <option value="">Select country</option>
              <option value="india">India</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>State</label>
            <input type="text" className="input" placeholder="Enter your state" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" className="input" placeholder="Enter your phone number" required />
          </div>

          <div className="form-group">
            <label>Personal Info</label>
            <textarea className="input" placeholder="Tell us something about yourself" rows="3" required />
          </div>

            <button type="submit" className="signin-btn">
  🔐 Sign In
</button>
        </form>
      </div>
    </div>
  );
}
