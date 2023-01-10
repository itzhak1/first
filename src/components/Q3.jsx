import React from 'react'
import { useState } from 'react'

export default function Q3()
 {
    const [showFirstName,setFirstName]= useState(false)
    const [showLastName,setLastName]= useState(false)
    const [showSATGrade,setSATGrade]= useState(false)

  return (
    <div>
        <from className="grid">
            <div className='grid from-input'>
                
                <input type="text" placeholder='First Name' 
                 onFocus={()=>setFirstName(true)}
                 onBlur={()=>setFirstName(true)}

                
                />
                {showFirstName && <p>Please enter first name</p>}
            </div>
            <div className='grid from-input'>
            
                <input type="text" placeholder='Last Name' 
                onFocus={()=>setLastName(true)}
                onBlur={()=>setLastName(true)}
                />
                {showLastName && <p>Please enter Last Name</p>}
            </div>
            <div className='grid from-input'>
            
                <input type="number" placeholder='SAT Grade' 
                 onFocus={()=>setSATGrade(true)}
                 onBlur={()=>setSATGrade(true)}
                />
                {showSATGrade && <p>Please enter SAT Grade</p>}
            </div>
        </from>

    </div>
  )
}
