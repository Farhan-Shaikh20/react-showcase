import Props from '../concepts/Props'
import UseStates from '../concepts/UseStates'
import UseEffect from '../concepts/UseEffects'
import ConditionalDemo from '../concepts/ConditionalDemo';
function Home(){
    return(
        <div>
            <h1>React playground</h1>
            <p style={{marginBottom:'40px',color:'#b9abf3'}}>Har concept ka live demo neeche hai ↓</p>
            <Props />
            <UseStates />
            <UseEffect />
            <ConditionalDemo />
        </div>
    )
}
export default Home