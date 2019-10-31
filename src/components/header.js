import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import container from "../style/container.module.css"
import Rick from "../images/logos/rick_sanchez_logo.png"

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

//Remove these and pass the title as a prop example below
Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Portfolio of the artist formly known as Baltes`,
  siteSubTitle: `Where science and art collide`,
}

export default Header

//Note
//sub-component ie header
// `export default props => <tag>{props.WHATEVER YOU WANT TO CALL THIS TAG ARGUEMENT}</tag>`
//  on page that use sub-component add the `<Subcomponent WHATEVER YOU WANT TO CALL THIS TAG ARGUEMENT="what ever prop you want to declare" />`