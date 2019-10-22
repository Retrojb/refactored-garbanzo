import React from 'react';
import { Link } from "gatsby"

const Navigation = () => (
<div>
    <input id="burger" type="checkbox" hidden />
    <label htmlFor="burger">
        <span></span>
        <span></span>
        <span></span>
    </label>
    <nav>
        <ul className="nav-links">
            <Link to="/aboutme" className="buttons">About Me</Link> 
            <Link to="/developer" className="buttons">Developer</Link> 
            <Link to="/artist" className="buttons">Artist</Link> 
            <Link to="/cartographypage" className="buttons">Cartographer</Link>
            <Link to="/blogpage" className="buttons">Enthuisest</Link>
            <Link to="/blogpage" className="buttons">Blogger</Link> 
        </ul>
    </nav>
</div>
)

export default Navigation