import React, {Component} from "react";
import "./converge.css"
import ConvergeLine from './Converge-line/convergeLine'

class Converge extends Component {
  constructor() {
    super()
    this.addLine = this.addLine.bind(this)
    this.state = {
      linesCount: []
    }
  }
  addLine() {
    this.setState({ linesCount: [...this.state.linesCount, this.state.linesCount.length]})
    console.log(this.state.linesCount.length)
  }
  render() {
    return (
      <>
        <div className="titleContainner">
          <div className="titleLine"></div>
          <h1 className="titleText"> Converge </h1>
          <div className="titleLine"></div>
        </div>

        <div className="convergeLines">
          {this.state.linesCount.map((lineKey) => {
            return <ConvergeLine key={lineKey} keyId={lineKey} />
          })}
          
          <button className="newLine" type="button" onClick={this.addLine}>Nova Linha</button>
        </div>
      </>
    )
  }
}

export default Converge;