import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import container from "../style/container.module.css"
import Rick from "../images/rick_sanchez_logo.png"

const Header = ({ siteTitle, siteSubTitle }) => (
  <header>
    <div className={container.header_main_container}>
      <span className={container.sub_container}>
        <img className={container.header_logo} src={Rick} />
        <h2 className={container.header_title_prop}>
             {siteTitle}
        <br/>{siteSubTitle}</h2>
        <button>Menu</button>
      </span>
    </div>
        {/* <div className={container.nav}>
        <Navigation></Navigation>
        </div> */}

  
    <hr></hr>
  </header> 
 

)


Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Portfolio of the artist formly known as Baltes`,
  siteSubTitle: `Where science and art collide`,
}

export default Header
