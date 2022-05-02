import React,{Component} from "react";
import './convergeLine.css'
import { FaRegEdit } from "react-icons/fa";


class ConvergeLine extends Component{
  constructor(props) {
    super(props)
    this.mouseIn = this.mouseIn.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  mouseIn() {
    const borderColor = document.querySelector(`.id${this.props.keyId}`)
    borderColor.style.borderColor = "darkred"
  }
  mouseOut() {
    const borderColor = document.querySelector(`.id${this.props.keyId}`)
    borderColor.style.borderColor = "rgba(99, 164, 100, .3)"
  }

  render() {
    return (
      <div className="holdBtn">
        <button className="btnDelete" onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut}>Deletar</button>
        <div className={`convergeLine id${this.props.keyId}`}>
          <div className="layoutChange">
            <p>Layout Customizado</p>
            <FaRegEdit />
          </div>
          <div className="columnsContainner">

          </div>
        </div>
      </div>
    )
  }
}

export default ConvergeLine;