import React, { Component } from 'react';
import { FaAngleDown } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './subMenu.css'

class SubMenu extends Component {

  render() {
    return (
      <>
        <Link to={`/${this.props.title}`}>
          <div className= 'subMenuTitle' id={this.props.title}>
            <h3 className= {this.props.isActive? 'title bColor' : 'title' } id={this.props.title}>
              {this.props.title}
            </h3>
            <FaAngleDown className={this.props.isActive? 'menuArrow' : 'dNone' }/>
          </div>
        </Link>
      </>
    )
  }
}

export default SubMenu;