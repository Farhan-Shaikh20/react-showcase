import "../style/props.css"

function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <h3>{props.name}</h3>
      <p>{props.level}</p>
    </div>
  )
}

function Props() {
  return (
    <div id="props" className="concept-section">
      <h2>📦 Props</h2>
      <p className="concept-desc">
        Parent component data bhejta hai → Child receive karta hai
      </p>
      <div className="cards-row">
         <Card name="React" level="Frontend"  color="#6a629c"  />
        <Card name="Node.js" level="Backend" color="#325f49" />
        <Card name="MongoDB" level="Database" color="#805f51" />
      </div>
    </div>
  )
}

export default Props

// import "../style/props.css"

// function Card(props) {
//     return (
//         <div className="card">
//             <h3>{props.name}</h3>
//             <p>{props.level}</p>
//         </div>
//     )
// }

// function Props(){
//     return(
//         <div id="props" className="concept-section">
//              <h2>📦 Props</h2>
//              <p className="concept-desc">Parent components data send karta hai and child receive karta hai</p>
//              <div className="cards-row">
//                  <Card name="React" level="Frontend" />
//                  <Card name="Node.js" level="Backend" />
//                  <Card name="MongoDB" level="Database" />
//              </div>
//         </div>
//     )
// }

// export default Props