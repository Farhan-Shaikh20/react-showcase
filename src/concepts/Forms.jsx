import { useState } from 'react'
import '../style/Forms.css'

function Forms() {
  const [name, setName] = useState('')
  const [form, setForm] = useState({ email: '', password: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }

    setError('')
    setSubmitted(true)
  }

  return (
    <div id="forms" className="concept-section">
      <h2>📝 Forms & Events</h2>
      <p className="concept-desc">
        Capture user input with state and respond to form events.
      </p>

      <div className="demo-box">
        <p className="demo-title">Demo 1 — Controlled input</p>
        <input
          type="text"
          placeholder="Type your name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-input"
        />
        {name && (
          <div className="preview-box">
            👋 Hello, <strong>{name}</strong>!
          </div>
        )}
      </div>

      <div className="demo-box">
        <p className="demo-title">Demo 2 — Login form</p>
        {submitted ? (
          <div className="success-box">
            ✅ Login successful! <br />
            <span>{form.email}</span>
            <button
              type="button"
              className="reset-form-btn"
              onClick={() => {
                setSubmitted(false)
                setForm({ email: '', password: '' })
              }}
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
