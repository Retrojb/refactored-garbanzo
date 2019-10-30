import React from 'react';
import { Link } from "gatsby"// import PropTypes from "prop-types"
import container from "../style/container.module.css"
import Navigation from './navigation';
import SocialMedia from './social-media';
import CopyRight from './copy-right';
const Footer = () => (

    
    <footer className={container.footer_main_container}>
        <span className={container.footer_group}>
            <h4>Lorem ipsum givem some tasteums</h4>
            <p>All of these links and navs works</p>
            <Navigation></Navigation>

            <SocialMedia></SocialMedia>
        </span>
        
            <CopyRight></CopyRight>
    </footer>        
) 

export default Footer

