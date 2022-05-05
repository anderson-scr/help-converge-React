import React, { useState } from "react";
import "./converge.css"
import ConvergeLine from './Converge-line/convergeLine'

function Converge() {
  const [lineCount, setLineCount] = useState([])

  const deleteLine = (evt) => {
    let parent = evt.target.parentNode
    console.log(parent);
    parent.remove()
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

  // constructor() {
  //   super()
  //   this.addLine = this.addLine.bind(this)
  //   this.deleteLine = this.deleteLine.bind(this)
  //   this.state = {
  //     linesCount: [],
  //     forID: []
  //   }
  // }
  // addLine() {
  //   this.state.forID.push(this.state.forID.length)
  //   this.setState({ linesCount: [...this.state.linesCount, `id${this.state.linesCount.length}`]})
  //   console.log(this.state.forID[this.state.forID.length -1])
  // }
  // deleteLine(evt) {
  //   let getClass = evt.target.parentNode
  //   // let identifier = getClass.split(" ")
  //   console.log(getClass)
  //   getClass.remove()
  //   // let lines = [...this.state.linesCount]
  //   // lines.splice(this.state.linesCount.indexOf(identifier[1]), 1)
  //   // this.setState({ linesCount: [...lines]})
  //   // console.log(lines);
  // }
  // render() {
  //   return (
  //     <>
  //       <div className="convergeLines">
  //         {this.state.linesCount.map((lineKey) => {
  //           return <ConvergeLine key={lineKey} keyID= {lineKey} deleteFunc={this.deleteLine}/>
  //         })}
          
  //         <button className="newLine" type="button" onClick={this.addLine}>Nova Linha</button>
  //       </div>
  //     </>
  //   )
  // }