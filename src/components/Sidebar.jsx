import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>⚛️ React Concepts</h2>

      <p className="sidebar-section">Pages</p>
      <Link to="/">🏠 Home</Link>
      <Link to="/about">🗺️ React Router</Link>
      <Link to="/cheatsheet">⚡ Cheatsheet</Link>

      <p className="sidebar-section">Concepts</p>
      <Link to="/props">📦 Props</Link>
      <Link to="/usestates">🧠 useState</Link>
      <Link to="/useeffects">🔄 useEffect</Link>
      <Link to="/conditional">❓ Conditional Rendering</Link>
      <Link to="/forms">📝 Forms & Events</Link>
    </div>
  )
}

export default Sidebar



// import { Link } from 'react-router-dom'

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h2>⚛️ React Concepts</h2>

//       <p className="sidebar-section">Pages</p>
//       <Link to="/">🏠 Home</Link>
//       <Link to="/about">🗺️ React Router</Link>
//       <Link to="/cheatsheet">⚡ Cheatsheet</Link>

//       <p className="sidebar-section">Concepts</p>
//       <Link to="/#props">📦 Props</Link>
//       <Link to="/#usestate">🧠 useState</Link>
//       <Link to="/#useeffect">🔄 useEffect</Link>
//       <Link to="/#conditional">🔀 Conditional</Link>
//     </div>
//   )
// }

// export default Sidebar
