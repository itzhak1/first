import React from 'react'
import { useState } from 'react'

export default function DivBG() {

  // const [bgcolor, setBGColor] =useState('silver');

const setBGColor = (event) =>{
console.log(event.target.value)
  document.body.style.backgroundColor =event.target.value
}

  return (
    <div>
        
        <input type="button" value="red" onClick={(event)=>setBGColor(event)} />
        <input type="button" value="green" onClick={(event)=>setBGColor(event)} /> 
        <input type="button" value="yellow" onClick={(event)=>setBGColor(event)} /> 
        <input type="button" value="blue" onClick={(event)=>setBGColor(event)} /> 
        <input type="button" value="pink" onClick={(event)=>setBGColor(event)} /> 
        <input type="button" value="black" onClick={(event)=>setBGColor(event)} /> 
        <input type="button" value="orenge" onClick={(event)=>setBGColor(event)} /> 
        <input type="button" value="purple" onClick={(event)=>setBGColor(event)} /> 
    </div>
  )
}
