import { useEffect, useState } from 'react'
import '../style/UseEffects.css'

function UseEffects() {
  const [seconds, setSeconds] = useState(0)
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUser({ name: 'Farhan', age: 20 })
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div id="useeffect" className="concept-section">
      <h2>🔄 useEffect</h2>
      <p className="concept-desc">
        Run logic after render and react to state changes.
      </p>

      <div className="demo-box">
        <p className="demo-title">Demo 1 — Timer</p>
        <div className="effect-timer">
          <span className="timer-num">{seconds}</span>
          <span className="timer-label">seconds since mount</span>
        </div>
        <p className="demo-note">useEffect(() =&gt; setInterval(...), [])</p>
      </div>

      <div className="demo-box">
        <p className="demo-title">Demo 2 — Browser tab title</p>
        <div className="counter-row">
          <button onClick={() => setCount(count - 1)}>−</button>
          <span className="count-num">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <p className="demo-note">The document title updates whenever the counter changes.</p>
      </div>

      <div className="demo-box">
        <p className="demo-title">Demo 3 — Mock API loading</p>
        {loading ? (
          <div className="loading-box">⏳ Loading data...</div>
        ) : (
          <div className="user-card">
            <p className="user-name">{user.name}</p>
            <p className="user-role">Age: {user.age}</p>
          </div>
        )}
        <p className="demo-note">useEffect(() =&gt; setTimeout(...), [])</p>
      </div>
    </div>
  )
}

export default UseEffects
