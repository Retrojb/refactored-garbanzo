import React from 'react'
import { Link } from "gatsby"
import container from "../style/container.module.css"
import linkedIn from "../images/social-media/linkedin.png"
import codePen from "../images/social-media/codepen.png"
import twitter from "../images/social-media/Twitter_bird_icon.png"
import tumblr from "../images/social-media/Tumblr_icon.png"
import github from "../images/social-media/github-sociocon.png"


export const SocialMedia = () => {

    return (
    <div >
        <span className={container.social_container}>
            <Link to="/https://twitter.com/JohnBaltes6" target="_blank"><img src={twitter} className={container.social_logo} /></Link> 
                
            <Link to="/https://Linkedin.com/in/john-baltes" target="_blank">
                <img src={linkedIn} className={container.social_logo} /></Link> 
            
            <Link  to="/https://retrojb.tumblr.com/" target="_blank">
                <img src={tumblr} className={container.social_logo} /></Link> 
            
            <Link  to="/https://github.com/Retrojb" target="_blank">
                <img src={github} className={container.social_logo} /></Link> 
            
            <Link  to="/https://codepen.io/Retrojb/" target="_blank">
                <img src={codePen} className={container.social_logo} /></Link> 
        </span>
    </div>
)
    }

export default SocialMedia


  
