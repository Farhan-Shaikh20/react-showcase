import { useState } from 'react'
import '../style/ConditionalDemo.css'

function ConditionalDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [role, setRole] = useState('user')
  const [score, setScore] = useState(75)

  return (
    <div id="conditional" className="concept-section">
      <h2>🔀 Conditional Rendering</h2>
      <p className="concept-desc">
        Condition ke hisaab se alag UI dikha do
      </p>

      {/* Demo 1 — if/else style */}
      <div className="demo-box">
        <p className="demo-title">Demo 1 — Login Toggle</p>
        {isLoggedIn ? (
          <div className="welcome-box">👋 Welcome, Farhan!</div>
        ) : (
          <div className="login-box">🔒 Please Login</div>
        )}
        <button
          className="toggle-btn"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>

      {/* Demo 2 — Multiple conditions */}
      <div className="demo-box">
        <p className="demo-title">Demo 2 — Role Badge</p>
        <div className="role-btns">
          <button onClick={() => setRole('user')}>User</button>
          <button onClick={() => setRole('admin')}>Admin</button>
          <button onClick={() => setRole('guest')}>Guest</button>
        </div>
        <div className={`role-badge role-${role}`}>
          {role === 'admin' && '👑 Admin Panel Access'}
          {role === 'user' && '👤 User Dashboard'}
          {role === 'guest' && '👁️ Guest View Only'}
        </div>
      </div>

      {/* Demo 3 — Score based */}
      <div className="demo-box">
        <p className="demo-title">Demo 3 — Score Result</p>
        <div className="score-row">
          <button onClick={() => setScore(s => Math.max(0, s - 10))}>−10</button>
          <span className="score-num">{score}</span>
          <button onClick={() => setScore(s => Math.min(100, s + 10))}>+10</button>
        </div>
        <div className={`result-box ${score >= 80 ? 'pass-high' : score >= 50 ? 'pass' : 'fail'}`}>
          {score >= 80 ? '🏆 Excellent!' : score >= 50 ? '✅ Pass' : '❌ Fail'}
        </div>
      </div>

    </div>
  )
}

export default ConditionalDemo 