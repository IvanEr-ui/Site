import React from 'react'
import module from './InfoUser.module.css'

const InfoUser =(props)=>{
    return(
        <div className={module.separation}>
          <div className={module.photo}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vR6BJh8C2vIXHYM9rviQzBiIZh1L6aZbAGPnDAWPP_OapDn1" /> </div>
          <div className={module.description}> description </div>
        </div>
    )
}

export default InfoUser;