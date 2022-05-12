import React, { useState } from "react";
import "./converge.css";
import ConvergeLine from './Converge-line/convergeLine';

function Converge() {
  const [lineCount, setLineCount] = useState([])

  const deleteLine = (elementForDelete) => {
    console.log(elementForDelete)
    elementForDelete.current.remove()
  }

  const addLine = () => {
    setLineCount([...lineCount, lineCount.length])
  }

  return (
    <div className="convergeLines">
      {lineCount.map((lineKey) => {
        return <ConvergeLine key={lineKey} keyID= {lineKey} deleteFunc={deleteLine}/>
      })}

      <button className="newLine" type="button" onClick={addLine}>Nova Linha</button>
    </div>
  )
}

export default Converge;