import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Props from './concepts/Props.jsx'
import UseStates from './concepts/UseStates.jsx'
import UseEffects from './concepts/UseEffects.jsx'
import About from './pages/About.jsx'
import Cheatsheet from './pages/Cheatsheet.jsx'
import ConditionalDemo from './concepts/ConditionalDemo.jsx'
import Forms from './concepts/Forms'


// Home page — sare concepts ek saath
function Home() {
  return (
    <div>
      <h1>React Playground 🚀</h1>
      <p style={{ marginBottom: '40px', color: '#777' }}>
        live demo of each concept ↓
      </p>
      <Props />
      <UseStates />
      <UseEffects />
      <ConditionalDemo />
      <Forms />

    </div>
  )
}

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<Props />} />
          <Route path="/usestates" element={<UseStates />} />
          <Route path="/useeffects" element={<UseEffects />} />
          <Route path="/conditional" element={<ConditionalDemo />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/about" element={<About />} />
          <Route path="/cheatsheet" element={<Cheatsheet />} />
        </Routes>
      </div>
    </div>
  )
}

export default App