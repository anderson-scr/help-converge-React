import React,{Component} from "react";
import './convergeLine.css'
import { FaRegEdit } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import ColumnCard from "../ColumnCard/ColumnCard"
class ConvergeLine extends Component{
  constructor(props) {
    super(props)
    this.mouseIn = this.mouseIn.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
    this.addColumn = this.addColumn.bind(this)
    this.horizontalScroll = this.horizontalScroll.bind(this)
    this.state = {
      columnCount: [0]
    }
  }

  mouseIn() {
    const borderColor = document.querySelector(`.changeColor${this.props.keyID}`)
    borderColor.style.borderColor = "darkred"
  }
  mouseOut() {
    const borderColor = document.querySelector(`.changeColor${this.props.keyID}`)
    borderColor.style.borderColor = "#d0e4d0"
  }

  addColumn() {
    this.setState({ columnCount: [...this.state.columnCount, this.state.columnCount.length]})
    console.log(this.state.columnCount)
  }

  horizontalScroll(evt) {
    console.log(evt.target
      )
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
          <div className="columnsContainner" onWheel={(evt) => { this.horizontalScroll(evt) }}>
            {this.state.columnCount.map((column) => {
              return <ColumnCard key={column} identifier={column}/>
            })}
            <div className="plusContainner" onClick={this.addColumn}>
              <BsPlus className="plusIcon"/>
              <div className="plusText">Adicionar</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConvergeLine;