import React from 'react'
import InfoUser from './InfoUser/InfoUser';
import MyPosts from './MyPosts/MyPosts';
import module from './Profile.module.css'

const Profile =(props)=>{
    debugger
    return(
        <div>
           <InfoUser />
           <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;