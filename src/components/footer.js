import React from 'react';
import container from "../style/container.module.css"
import Navigation from './navigation';
import SocialMedia from './social-media';
import CopyRight from './copy-right';
const Footer = () => (

    
    <footer className={container.footer_main_container}>
        <div style={{width:`auto`, padding:`1rem`}}>
            <div style={{textAlign:`center`, marginTop:`.6rem`}}>
                <Navigation></Navigation>
            </div>
            <div style={{ marginTop:`.6rem`}}>
                <SocialMedia></SocialMedia>
            </div>
            <div style={{margin:`2rem 0 2rem 0`}}>
                <CopyRight></CopyRight>
            </div>
        </div>
        
    </footer>        
) 

export default Footer

