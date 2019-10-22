import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
<header>
  <div className="title">
      {siteTitle}
      <h3>Where science and art collide</h3>
      <Navigation></Navigation>
  </div>
  <hr></hr>
  </header> 
 

)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Portfolio of the artist formly known as Baltes`,
}

export default Header
