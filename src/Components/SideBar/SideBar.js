import React, { Component } from 'react';
import './sideBar.css';
import SubMenu from '../sibeBar-subMenu/SubMenu';
import helplogo from '../../Assets/Svg/help-converge-logo-figma.svg';

class SideBar extends Component {
  constructor() {
    super()
    this.toggleState = this.toggleState.bind(this)
    this.state = {
      converge: false,
      XML: false,
      messages: false
    }
  }
  toggleState(evt) {
    let clickedElement = evt.target.id
    console.log(clickedElement);

    if(clickedElement === "Converge") {
      this.setState({converge: !this.state.converge, XML: false, messages: false})
    } 
    if(clickedElement === "XML") {
      this.setState({converge: false, XML: !this.state.XML, messages: false})
    } 
    if(clickedElement === "Mensagens"){
      this.setState({converge: false, XML: false, messages: !this.state.messages})
    }
  }

  render() {
    // Create the querry here and loop throgh the list of layouts and menus to create the menu.
    return (
      <aside className='SideBar-containner'>
        <div className='logoContainner' >
          <img src={helplogo} alt='logo' className='logo'/>
        </div>
        <div className='Menus' onClick={(evt) => {this.toggleState(evt)}}>
          <SubMenu title= "Converge" isActive={this.state.converge}/>
          <SubMenu title= "XML" isActive={this.state.XML}/>
          <SubMenu title= "Mensagens" isActive={this.state.messages}/>
        </div>
      </aside>
    )
  }
}

export default SideBar;