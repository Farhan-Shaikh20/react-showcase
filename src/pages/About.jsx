import '../style/page.css'

function About() {
  return (
    <div className="page">
      <h1>React Router</h1>

      <div className="info-card">
        <h3>What it solves</h3>
        <p>
          A React app can render multiple views without refreshing the page. React Router
          maps a URL to the component that should be displayed.
        </p>
      </div>

      <div className="info-card">
        <h3>Core idea</h3>
        <p>
          The browser URL is used as the source of truth. Based on the route, React
          renders the matching component and updates the interface in place.
        </p>
      </div>

      <div className="info-card">
        <h3>Main building blocks</h3>
        <ul>
          <li><strong>BrowserRouter</strong> — enables routing in the app</li>
          <li><strong>Routes</strong> — holds all route definitions</li>
          <li><strong>Route</strong> — matches a URL pattern to a component</li>
          <li><strong>Link</strong> — allows in-app navigation without a page reload</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>Example</h3>
        <code>{'<Route path="/about" element={<About />} />'}</code>
      </div>
    </div>
  )
}

export default About
