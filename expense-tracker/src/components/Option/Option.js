import React from 'react'
import './option.css'
import { Link } from 'react-router-dom'

function Option(props) {
  // console.log(props.Amount)
return (
    <div className='Option'>

      <div className='Subtitle'>
      {props.name}       
      </div>
    
    <div ><Link style={{color:props.color,textDecoration:"none",fontWeight:800,fontSize:"1.3rem"}} className='Amount' to={props.target}>{props.Amount}</Link></div>
    
    </div>
  )
}

export default Option