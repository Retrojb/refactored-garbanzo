import React from 'react';
import container from "../style/container.module.css"

const CopyRight = () => (
    <span className={container.copy_right}>
        <h6>Baltes Cartography</h6>
        <small>
            <a href="https://www.gatsbyjs.org">Built with Gatsby</a>
            {` `}
            < a href="https.surge.sh">Served via Surge</a>
            © {new Date().getFullYear()}
        </small>
    </span>
)

export default CopyRight