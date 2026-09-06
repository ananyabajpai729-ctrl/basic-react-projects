import { useState } from 'react'
import './App.css'

function App() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");
  const randomUtility = (length)=>{
    return Math.floor(Math.random() * length);
  }
  const genHex = () =>{
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = "#"
    for(let i = 0; i < 6; i++){
      hexColor += hex[randomUtility(hex.length)];
    }
    setColor(hexColor);
  }

  const genRGB = () =>{
    let r = randomUtility(256);
    let g = randomUtility(256);
    let b = randomUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <>
      <div style = {
        {
          backgroundColor : color,
          width: "100vw",
          height: "100vh"
        }
      }>
        <button onClick = {() => {setType("hex")}} className = "hex-create">
          Create Random Hex Colour
        </button>
        <button onClick = {() => {setType("rgb")}} className = "rgb-create"> 
          Create Random RGB Colour
        </button>
        <button onClick = {type === "hex" ? genHex : genRGB} className="generate-color">
            Generate Colour
        </button>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}>
          <h3>{type === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  )
}

export default App
