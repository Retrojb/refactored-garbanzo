import React from 'react';
import { Link } from "gatsby"
import container from "../style/container.module.css"
const Navigation = () => (
    <div>
        <ul style={{padding:`2rem 0 1rem 0`}}>
            <Link to="/" className={container.nav_links}>Home</Link> 
            <Link to="/aboutme" className={container.nav_links}>About Me</Link> 
            <Link to="/developer" className={container.nav_links}>Developer</Link> 
            <Link to="/artist" className={container.nav_links}>Artist</Link> 
            <Link to="/cartographer" className={container.nav_links}>Cartographer</Link>
        </ul>
    </div>
)

export default Navigation

// @TODO Add theses links in after to generate pages
{/* <Link to="/blogpage" className={container.nav_links}>Enthuisest</Link>
<Link to="/blogpage" className={container.nav_links}>Blogger</Link>  */}