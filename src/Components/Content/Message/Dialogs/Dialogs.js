import React from 'react'
import module from './Dialogs.module.css'

const Dialogs=(props)=>{
    return(
        <div className={module.dialogs}>
            {props.message}
        </div>
    )
}


export default Dialogs;