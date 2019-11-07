import React from 'react';
import { Link } from "gatsby"
import container from "../style/container.module.css"
const Navigation = () => (
    <div>
        <nav>
            <Link to="/" className={container.nav_links}>Home</Link> 
            <Link to="/aboutme" className={container.nav_links}>About Me</Link> 
            <Link to="/developer" className={container.nav_links}>Developer</Link> 
            <Link to="/artist" className={container.nav_links}>Artist</Link> 
            <Link to="/cartographer" className={container.nav_links}>Cartographer</Link>
            <Link to="/blog-list" className={container.nav_links}>Blog</Link> 
        </nav>
    </div>
)

export default Navigation
