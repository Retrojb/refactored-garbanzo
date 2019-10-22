import React from 'react';
import { Link } from "gatsby"// import PropTypes from "prop-types"
const Footer = () => (
    
  <footer>
      <hr></hr>
      <h2>I AM THE START OF THE FOOTER</h2>
    <div>
        <ul>
            <Link to="/aboutme" className="buttons">About Me</Link> 
            <Link to="/development" className="buttons">Developer</Link> 
            <Link to="/design" className="buttons">Artist</Link> 
            <Link to="/cartographypage" className="buttons">Cartographer</Link>
            <Link to="/blogpage" className="buttons">Enthuisest</Link>
            <Link to="/blogpage" className="buttons">Blogger</Link> 
        </ul>
    </div>
    <span>
        <Link to="/https://twitter.com/JohnBaltes6" target="_blank"><img src="images/Twitter_bird_icon.png" className="zoom social-tags" /></Link> 
        <Link to="/https://Linkedin.com/in/john-baltes" target="_blank"><img src="images/Linkedin.png" className="zoom social-tags" /></Link> 
        <Link to="/https://www.instagram.com/baltez_me_gusta/" target="_blank"><img src="images/instagram_PNG3.png" className="zoom social-tags" /></Link> 
        <Link  to="/https://retrojb.tumblr.com/" target="_blank"><img src="images/Tumblr_icon.png" className="zoom social-tags" /></Link> 
        <Link  to="/https://github.com/Retrojb" target="_blank"><img src="images/github-sociocon.png" className="zoom social-tags" /></Link> 
        <Link  to="/https://codepen.io/Retrojb/" target="_blank"><img src="images/codepen.png" className="zoom social-tags" /></Link> 
    </span>
            <h4>Baltes Cartography</h4>
            <small>2018</small>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <hr></hr>
    </footer>        
) 

export default Footer