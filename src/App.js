import { useState } from 'react';
import './App.css';

function App() {
  const [number, setClick] = useState("")
let freeze = false


  return (
    <div className="App">
      <header className="App-header">

        <h1>Not the keypad to a safe with $77,000,000</h1>
        <h2>{number}</h2>
        <p>
          <button onClick={(()=>setClick(number + "1"))} >1</button>
          <button onClick={()=>setClick(number + "2")} >2</button>
          <button onClick={()=>setClick(number + "3")} >3</button>
        </p>
        <p>
        <button onClick={()=>setClick(number + "4")} >4</button>
        <button onClick={()=>setClick(number + "5")} >5</button>
        <button onClick={()=>setClick(number + "6")} >6</button>
        </p>
        <p>
        <button onClick={()=>setClick(number + "7")} >7</button>
        <button onClick={()=>setClick(number + "8")} >8</button>
        <button onClick={()=>setClick(number + "9")} >9</button>
        </p>
        <p>
        <button onClick={()=>setClick("")} >⬅️</button>
        <button onClick={()=>setClick("0")} >0</button>
        <button onClick={()=>setClick(number === "2856" ? "Come on in!" : "Nah" )} >✅</button>
        </p>
        </header>
      <body>
      </body>
    </div>
  );
}

export default App;
