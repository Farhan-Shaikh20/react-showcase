import '../style/page.css'

function Cheatsheet() {
  return (
    <div className="page">
      <h1>React Cheatsheet</h1>

      <div className="info-card">
        <h3>📦 Props</h3>
        <p>Send data from a parent component to a child component.</p>
        <code>{'<Card name="React" color="#7c6af7" />'}</code>
        <code>{'function Card(props) { return <h1>{props.name}</h1> }'}</code>
      </div>

      <div className="info-card">
        <h3>🧠 useState</h3>
        <p>Store values in local component state so the UI updates when they change.</p>
        <code>{'const [count, setCount] = useState(0)'}</code>
        <code>{'setCount(count + 1)'}</code>
      </div>

      <div className="info-card">
        <h3>🔄 useEffect</h3>
        <p>Run code after the component renders or whenever a value changes.</p>
        <code>{'useEffect(() => { }, [])'}</code>
        <code>{'useEffect(() => { }, [count])'}</code>
      </div>

      <div className="info-card">
        <h3>🗺️ React Router</h3>
        <p>Render different UI based on the current URL.</p>
        <code>{'<Route path="/about" element={<About />} />'}</code>
        <code>{'<Link to="/about">About</Link>'}</code>
      </div>

      <div className="info-card">
        <h3>🔀 Conditional Rendering</h3>
        <p>Show or hide UI based on a condition.</p>
        <code>{'isLoggedIn ? <Dashboard /> : <Login />'}</code>
        <code>{'isAdmin && <AdminPanel />'}</code>
      </div>

      <div className="info-card">
        <h3>📝 Forms & Events</h3>
        <p>Track input values with state and handle submission events.</p>
        <code>{'onChange={e => setName(e.target.value)}'}</code>
        <code>{'onSubmit={e => { e.preventDefault(); }}'}</code>
      </div>
    </div>
  )
}

export default Cheatsheet
