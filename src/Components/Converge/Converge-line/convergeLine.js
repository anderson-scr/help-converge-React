import React,{Component} from "react";
import './convergeLine.css'
import { FaRegEdit } from "react-icons/fa";

class ConvergeLine extends Component{
  constructor(props) {
    super(props)
    this.mouseIn = this.mouseIn.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
    this.testeee = this.testeee.bind(this)
  }

  mouseIn() {
    const borderColor = document.querySelector(`.changeColor${this.props.keyID}`)
    borderColor.style.borderColor = "darkred"
  }
  mouseOut() {
    const borderColor = document.querySelector(`.changeColor${this.props.keyID}`)
    borderColor.style.borderColor = "#d0e4d0"
  }
  testeee() {
    let test = document.querySelector(`.teste${this.props.keyID}`)
    test.textContent = document.querySelector(`.digita${this.props.keyID}`).value
  }
  render() {
    return (
      <div className={`lineContainner ${this.props.keyID}`}>
        <button className='btnDelete' onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut} onClick={(evt) => {this.props.deleteFunc(evt)}}>Deletar</button>
        <div className={`convergeLine changeColor${this.props.keyID}`}>
          <div className="layoutChange">
            <p>Layout Customizado</p>
            <FaRegEdit />
          </div>
          <div className={`teste${this.props.keyID}`}></div>
          <button onClick={this.testeee}>click</button>
          <input className={`digita${this.props.keyID}`}></input>
          <div className="columnsContainner">
          </div>
        </div>
      </div>
    )
  }
}

export default ConvergeLine;