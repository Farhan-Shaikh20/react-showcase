import '../style/page.css'

function Cheatsheet() {
  return (
    <div className="page">
      <h1>React Cheatsheet ⚡</h1>

      <div className="info-card">
        <h3>📦 Props</h3>
        <p>Parent se child ko data bhejo — read only hota hai</p>
        <code>{'<Card name="React" color="#7c6af7" />'}</code>
        <code>{'function Card(props) { return <h1>{props.name}</h1> }'}</code>
      </div>

      <div className="info-card">
        <h3>🧠 useState</h3>
        <p>Value yaad rakho — badle to UI khud update ho</p>
        <code>{'const [count, setCount] = useState(0)'}</code>
        <code>{'setCount(count + 1)  // UI update hoga'}</code>
      </div>

      <div className="info-card">
        <h3>🔄 useEffect</h3>
        <p>Render ke baad side effect karo</p>
        <code>{'useEffect(() => { }, [])      // sirf ek baar'}</code>
        <code>{'useEffect(() => { }, [count]) // count badle tab'}</code>
      </div>

      <div className="info-card">
        <h3>🗺️ React Router</h3>
        <p>URL se alag component dikha do — bina page reload</p>
        <code>{'<Route path="/about" element={<About />} />'}</code>
        <code>{'<Link to="/about">About</Link>'}</code>
      </div>

      <div className="info-card">
        <h3>🔀 Conditional Rendering</h3>
        <p>Condition ke hisaab se alag UI dikha do</p>
        <code>{'isLoggedIn ? <Dashboard /> : <Login />'}</code>
        <code>{'isAdmin && <AdminPanel />'}</code>
      </div>

      <div className="info-card">
        <h3>📝 Forms & Events</h3>
        <p>User input ko state mein pakdo</p>
        <code>{'onChange={e => setName(e.target.value)}'}</code>
        <code>{'onSubmit={e => { e.preventDefault(); }}'}</code>
      </div>

    </div>
  )
}

export default Cheatsheet