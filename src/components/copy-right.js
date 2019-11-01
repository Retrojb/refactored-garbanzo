import React from 'react';
import container from "../style/container.module.css"

const CopyRight = () => (
    <span  className={container.copy_right}>
        <h6 style={{fontSize:`18px`}}>Baltes Cartography <small>© {new Date().getFullYear()}</small></h6>
        <small>
            
            <div>
            <a href="https://www.gatsbyjs.org">Built with Gatsby</a>
            {` `}{` & `}{` `}
            < a href="https.surge.sh">Hosted by Surge</a>
            </div>
        </small>
    </span>
)

export default CopyRight