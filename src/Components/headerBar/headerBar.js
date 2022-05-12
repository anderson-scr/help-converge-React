import React from 'react';
import './headerBar.css';
import {ReactComponent as HelpConverge} from '../../Assets/Svg/help-converge-logo-figma.svg'
import { NavLink } from 'react-router-dom';


function headerBar() {
  // Create the querry here and loop throgh the list of layouts and menus to create the menu.
  return (
    <>
      <div className="titleContainner">
        <div className="titleLine"></div>
        <NavLink to="/">
          <HelpConverge className='logo'/>
        </NavLink>
        <div className="titleLine"></div>
      </div>
      <div className='headerMenu'>
        <NavLink to="/Converge" className='links'>Converge</NavLink>
        <NavLink to="/XML" className='links'>XML</NavLink>
        <NavLink to="/Mensagens" className='links'>Mensagens</NavLink>
      </div>
    </>
  )
}

export default headerBar;