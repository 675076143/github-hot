import  './header.css'
import React,{Component} from "react";
import {NavLink} from "react-router-dom";

export  default class Header extends Component{
  state = {
    linkStyle:{
      color:'black',
      textDecoration:"none",
      margin:"5px"
    }
  };

  render() {
    const {linkStyle} = this.state
    return(
      <header>
        <NavLink className='nav-link' to='/'  exact style={linkStyle} activeClassName='active'>Popular</NavLink>
        <NavLink className='nav-link'  to='/Battle' style={linkStyle} activeClassName='active'>Battle</NavLink>
      </header>
    )
  }
}