import React from 'react'
import container from "../style/container.module.css"
import style from "../style/style.module.css"
import linkedIn from "../images/social-media/linkedin.png"
import codePen from "../images/social-media/codepen.png"
import twitter from "../images/social-media/Twitter_bird_icon.png"
import tumblr from "../images/social-media/Tumblr_icon.png"
import github from "../images/social-media/github-sociocon.png"


export const SocialMedia = () => {

    return (
        <span className={container.social_container}>
            <a href="https://twitter.com/JohnBaltes6" target="_blank"  rel="noopener noreferrer">
                <img src={twitter}  className={style.social_logo}  alt="John Baltes Twitter link" />
            </a>     
            <a href="https://Linkedin.com/in/john-baltes" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} className={style.social_logo} alt="John Baltes LinkedIn" />
            </a> 
            <a href="https://retrojb.tumblr.com/" target="_blank" rel="noopener noreferrer">
                <img src={tumblr} className={style.social_logo} alt="John Baltes tumbler link"/>
            </a>
            <a href="https://github.com/Retrojb" target="_blank" rel="noopener noreferrer">
                <img src={github} className={style.social_logo} alt="John Baltes github link" />
            </a> 
            <a href="https://codepen.io/Retrojb/" target="_blank" rel="noopener noreferrer">
                <img src={codePen} className={style.social_logo} alt="John Baltes code pen link" />
            </a> 
        </span>
    )
}

export default SocialMedia


