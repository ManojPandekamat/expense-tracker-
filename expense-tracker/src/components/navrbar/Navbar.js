import React from 'react'
import Titlebar from '../Titlebar/Titlebar';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import '@fontsource/roboto';

// import { Link } from 'react-router-dom';
const mystyle={fontSize:"0.9rem",fontWeight:"500",color:"white",textDecoration:"none"}
function Navbar(props) {
  return (
    <nav>
      <Titlebar name={props.title}/>

      <Link to={`/${props.target}`} style={mystyle}>{props.name}</Link>

    </nav>
  )
}

export default Navbar;