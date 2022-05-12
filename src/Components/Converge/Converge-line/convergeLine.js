import React, { useState, useRef } from "react";
import ColumnCard from "../ColumnCard/ColumnCard";
import './convergeLine.css';
import { BsPlus } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { useHorizontalScroll } from '../horizontalScrol';
import Modal from '../../Modal/Modal';


function ConvergeLine(props) {
  const [columnCount, setColumnCount] = useState([0])
  const scrollRef = useHorizontalScroll()
  const [openDelete, setOpenDelete] = useState(false)
  const containnerForDelete = useRef()

  const mouseIn = () => {
    const borderColor = document.querySelector(`.changeColor${props.keyID}`)
    borderColor.style.borderColor = "darkred"
  }

  const mouseOut = () => {
    const borderColor = document.querySelector(`.changeColor${props.keyID}`)
    borderColor.style.borderColor = "#d0e4d0"
  }

  const addColumn = () => {
    setColumnCount([...columnCount, columnCount.length])
  }
  

  return (
    <div className={`lineContainner ${props.keyID}`} ref={containnerForDelete}>
      <button className={`btnDelete ${openDelete && 'changeZ'}`} onMouseEnter={mouseIn} onMouseLeave={mouseOut} onClick={(evt) => {setOpenDelete(true)}}>Deletar</button>
      <div className={`convergeLine changeColor${props.keyID}`}>
        {openDelete && <Modal closeDelete={setOpenDelete} confirmDelete={(evt) => {props.deleteFunc(containnerForDelete)}}/>}
        <div className="layoutChange">
          <p>Layouts</p>
          <HiOutlineClipboardList />
        </div>  
        <div className={`columnsContainner ref${props.keyID}`} ref={scrollRef}>
          {columnCount.map((column) => {
            return <ColumnCard key={column} identifier={column}/>
          })}
          <div className="plusContainner" onClick={addColumn}>
            <BsPlus className="plusIcon"/>
            <div className="plusText">Adicionar</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConvergeLine;