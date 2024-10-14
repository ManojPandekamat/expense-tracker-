import React from 'react'
import "./Transaction.css"
import '@fontsource/roboto';

function Transaction({color, fetchdata}) {
  return (
    <div className='content'>
         <div id='A' >{fetchdata.Description}</div>
        <div style={{color:
          color}} id="B">{fetchdata.Amount}</div>
        <div id="C" >{fetchdata.Date.hours+":"+fetchdata.Date.minutes+":"+fetchdata.Date.seconds+" "}
         {fetchdata.Date.day+"/"+fetchdata.Date.month+"/"+fetchdata.Date.year}</div>

    </div>
  )
}

export default Transaction