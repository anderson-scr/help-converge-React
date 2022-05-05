import React from 'react';
import './headerBar.css';
import {ReactComponent as HelpConverge} from '../../Assets/Svg/help-converge-logo-figma.svg'
import { Link } from 'react-router-dom';


function headerBar() {
  // Create the querry here and loop throgh the list of layouts and menus to create the menu.
  return (
    <>
      <div className="titleContainner">
        <div className="titleLine"></div>
        <Link to="/">
          <HelpConverge className='logo'/>
        </Link>
        <div className="titleLine"></div>
      </div>
      <div className='headerMenu'>
        <Link to="/Converge" className='links'>Converge</Link>
        <Link to="/XML" className='links'>XML</Link>
        <Link to="/Mensagens" className='links'>Mensagens</Link>
      </div>
    </>
  )
}

export default headerBar;