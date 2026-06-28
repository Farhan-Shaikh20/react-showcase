import '../style/page.css'

function About() {
  return (
    <div className="page">
      <h1>🗺️ React Router kya hai?</h1>

      <div className="info-card">
        <h3>Problem</h3>
        <p>
          React mein sirf ek page hota hai — index.html.
          Alag URLs pe alag content dikhana mushkil tha.
        </p>
      </div>

      <div className="info-card">
        <h3>Solution</h3>
        <p>
          React Router URL dekhta hai aur sahi component
          dikha deta hai — bina page reload ke!
        </p>
      </div>

      <div className="info-card">
        <h3>4 Main Cheezein</h3>
        <ul>
          <li><strong>BrowserRouter</strong> — Router on karo</li>
          <li><strong>Routes</strong> — Sare routes ka container</li>
          <li><strong>Route</strong> — URL se component match karo</li>
          <li><strong>Link</strong> — Page reload ke bina navigate karo</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>Example</h3>
        <code>{'<Route path="/about" element={<About />} />'}</code>
      </div>
    </div>
  )
}

export default About;

// import '../style/page.css'

// function About(){
//     return(
//         <div className="page">
//             <h1>About router</h1>

//             <div className="info">
//                 <p>
//                     React has only one page, but router allows us to create multiple
//                     views within a single page.
//                 </p>
//             </div>

//             <div className="info">
//                 <p>
//                     React Router is a library that helps you handle routing in a React
//                     application, allowing you to create single-page applications with
//                     navigation without refreshing the page.
//                 </p>
//             </div>

//             <div className="info">
//                 <h3>4 Main components</h3>
//                 <ul>
//                     <li>
//                         <strong>BrowserRouter</strong>
//                     </li>
//                     <li>
//                         <strong>Route</strong>
//                     </li>
//                     <li>
//                         <strong>Switch</strong>
//                     </li>
//                     <li>
//                         <strong>Link</strong>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
// export default About;