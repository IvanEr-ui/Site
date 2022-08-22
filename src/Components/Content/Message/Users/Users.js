import React from 'react'
import { NavLink } from 'react-router-dom'
import module from './Users.module.css'

const Users=(props)=>{
    return(
        <div className={module.user}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Users;