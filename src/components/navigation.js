import React from 'react';
import { Link } from "gatsby"
import container from "../style/container.module.css"
const Navigation = () => (
<div>
    <input className="nav_btn" type="checkbox" hidden />
        <ul className={container.nav_links}>
            <Link to="/" className={container.buttons}>Home</Link> 
            <Link to="/aboutme" className={container.buttons}>About Me</Link> 
            <Link to="/developer" className={container.buttons}>Developer</Link> 
            <Link to="/artist" className={container.buttons}>Artist</Link> 
            <Link to="/cartographer" className={container.buttons}>Cartographer</Link>
            <Link to="/blogpage" className={container.buttons}>Enthuisest</Link>
            <Link to="/blogpage" className={container.buttons}>Blogger</Link> 
        </ul>
</div>
)

export default Navigation