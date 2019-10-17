import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Navigation = styled.nav`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 15px;
`

const Header = ({ siteTitle }) => (
  <Navigation>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </Navigation>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
