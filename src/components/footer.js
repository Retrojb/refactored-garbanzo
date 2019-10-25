import React from 'react';
import { Link } from "gatsby"// import PropTypes from "prop-types"
import container from "../style/container.module.css"
import Navigation from './navigation';
import SocialMedia from './social-media';
const Footer = () => (

    
  <footer className={container.header_main_container}>
      <hr></hr>
      <h2>I AM THE START OF THE FOOTER</h2>
  {/* <Navigation></Navigation> */}
  <ul className={container.holder}>
      <li>Thing</li>
      <li>Thing</li>
      <li>Thing</li>
      <li>Thing</li>
  </ul>
    {/* <SocialMedia></SocialMedia> */}
            <h4>Baltes Cartography</h4>
            <small>2018</small>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <hr></hr>
    </footer>        
) 

export default Footer