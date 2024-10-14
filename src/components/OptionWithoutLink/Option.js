import React from 'react'
import './option.css'




function Option(props) {
return (
    <div className='option'>
      <div className='Subtitle'>
      {props.name}       
      </div>
    
    <div style={{color:props.color}} className='Amount'>{props.Amount}</div>
    </div>
  )
}

export default Option