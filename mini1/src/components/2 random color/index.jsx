import { useState } from "react";

function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function randomColorUtility(length){
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#"
    for(let i=0; i<6; i++){
      const rColor = randomColorUtility(hex.length)
      hexColor += hex[rColor]; 
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor( `rgb(${r},${g},${b})`);
  }

  console.log(color);

  return (
    <div
      className="container"
      style={{
        background: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Create Random Color
      </button>
      <div
      style={{
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "50px",
      }}>
        <h3>{typeOfColor === "hex"? "HexColor" :  "RgbColor"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
