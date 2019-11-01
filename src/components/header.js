import PropTypes from "prop-types"
import React from "react"
import container from "../style/container.module.css"
import Navigation from "../components/navigation"
const Header = ({ siteTitle, siteSubTitle }) => (
  <header>
    <div className={container.header_main_container}>
       <div className={container.header_title_prop}>
          <h2>
              {siteTitle}
          </h2>
            <h4>
              {siteSubTitle}
            </h4>
        </div>
        <div className={container.header_nav_link_group}>
          <Navigation></Navigation>
        </div>
    </div>

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