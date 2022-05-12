import React from 'react';
import './modal.css'

function Modal({closeDelete, confirmDelete}) {

  return (
    <div className='background-bluur'>
      <div className='window-popup'>
        <h2 className='title-text'>Voce tem certeza que deseja deletar esta linha?</h2>
        <button className='btnCofirm' onClick={confirmDelete}>Sim</button>
        <button className='btnCancel' onClick={() => {closeDelete(false)}}>Nao</button>
      </div>
    </div>
  )
}

export default Modal;