import { useState } from 'react'
import '../style/Forms.css'

function Forms() {

  // Demo 1 — Controlled Input
  const [name, setName] = useState('')

  // Demo 2 — Full Form
  const [form, setForm] = useState({ email: '', password: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Sare fields bharo!')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div id="forms" className="concept-section">
      <h2>📝 Forms & Events</h2>
      <p className="concept-desc">
        User input ko state mein pakdo — events handle karo
      </p>

      {/* Demo 1 — Controlled Input */}
      <div className="demo-box">
        <p className="demo-title">Demo 1 — Controlled Input</p>
        <input
          type="text"
          placeholder="Apna naam likho..."
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-input"
        />
        {name && (
          <div className="preview-box">
            👋 Hello, <strong>{name}</strong>!
          </div>
        )}
      </div>

      {/* Demo 2 — Login Form */}
      <div className="demo-box">
        <p className="demo-title">Demo 2 — Login Form</p>
        {submitted ? (
          <div className="success-box">
            ✅ Login successful! <br />
            <span>{form.email}</span>
            <button
              className="reset-form-btn"
              onClick={() => { setSubmitted(false); setForm({ email: '', password: '' }) }}
            >
              Reset
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              name="email"
              placeholder="Email..."
              value={form.email}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password..."
              value={form.password}
              onChange={handleChange}
              className="form-input"
            />
            {error && <p className="error-msg">⚠️ {error}</p>}
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        )}
      </div>

    </div>
  )
}

export default Forms