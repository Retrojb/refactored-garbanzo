import React from 'react'
import { Link } from "gatsby"
import container from "../style/container.module.css"
import linkedIn from "../images/social-media/linkedin.png"
import codePen from "../images/social-media/codepen.png"
import twitter from "../images/social-media/Twitter_bird_icon.png"
import tumblr from "../images/social-media/Tumblr_icon.png"
import github from "../images/social-media/github-sociocon.png"
import { redirectTo } from '@reach/router'


export const SocialMedia = () => {

    return (
        <span className={container.social_container}>
            <a href="https://twitter.com/JohnBaltes6" target="_blank">
                <img src={twitter}  className={container.social_logo} />
            </a>     
            <a href="https://Linkedin.com/in/john-baltes" target="_blank">
                <img src={linkedIn} className={container.social_logo} />
            </a> 
            <a href="https://retrojb.tumblr.com/" target="_blank">
                <img src={tumblr} className={container.social_logo} />
            </a> 
            <a href="https://github.com/Retrojb" target="_blank">
                <img src={github} className={container.social_logo} />
            </a> 
            <a href="https://codepen.io/Retrojb/" target="_blank">
                <img src={codePen} className={container.social_logo} />
            </a> 
        </span>
    )
}

export default SocialMedia


