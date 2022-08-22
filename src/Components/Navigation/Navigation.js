import React from 'react'
import module from './Navigation.module.css'
import ImagesProfile from './Images/profile.png'
import ImagesMessage from './Images/message.png'
import ImagesMusic from './Images/music.png'
import ImagesNews from './Images/news.png'
import ImagesVideos from './Images/videos.png'
import { NavLink } from 'react-router-dom'

const Navigation=(props)=>{
    return(
        <div className={module.navigation}>
            <div className={module.items}>
                <img src={ImagesProfile} alt=""/>
                <font><NavLink to="/Profile">Profile</NavLink></font>
            </div>
            <div className={module.items}>
                <img src={ImagesMessage} alt=""/>
                <font><NavLink to="/Message">Message</NavLink></font>
            </div>
            <div className={module.items}>
                <img src={ImagesMusic} alt=""/>
                <font><NavLink to="/Music">Music</NavLink></font>
            </div>
            <div className={module.items}>
                <img src={ImagesNews} alt=""/>
                <font><NavLink to="/News">News</NavLink></font>
            </div>
            <div className={module.items}>
                <img src={ImagesVideos} alt=""/>
                <font><NavLink to="/Videos">Videos</NavLink></font>
            </div>
        </div>
    )
}

export default Navigation;