import { useState } from 'react'
import '../style/UseStates.css'

function UseStates() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('#7c6af7')
  const [name, setName] = useState('World')
  const colors = ['#7c6af7', '#3c9e6e', '#c25b30', '#e91e8c', '#0288d1']

  return (
    <div id="usestate" className="concept-section">
      <h2>⚡ useState</h2>
      <p className="concept-desc">
        Update state and let React re-render the UI automatically.
      </p>

      <div className="demo-box">
        <p className="demo-title">Demo 1 — Counter</p>
        <div className="counter-row">
          <button onClick={() => setCount(count - 1)}>−</button>
          <span className="count-display">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button className="reset-btn" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <div className="demo-box">
        <p className="demo-title">Demo 2 — Color Changer</p>
        <div className="color-box" style={{ backgroundColor: color }}>
          {color}
        </div>
        <div className="color-btns">
          {colors.map((currentColor) => (
            <button
              key={currentColor}
              onClick={() => setColor(currentColor)}
              style={{ backgroundColor: currentColor }}
              className="color-dot"
            />
          ))}
        </div>
      </div>

      <div className="demo-box">
        <p className="demo-title">Demo 3 — Input updates state</p>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(event) => setName(event.target.value)}
          className="name-input"
        />
        <p className="greeting">Hello, {name}! 👋</p>
      </div>
    </div>
  )
}

export default UseStates
