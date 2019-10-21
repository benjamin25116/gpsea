import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import css from "./header.module.css"
import Image from "./image"

// Styled Components
const Wrapper = styled.div`
  background: white;
  border-bottom: 1px solid #c6c6c6;
`
const Navigation = styled.nav`
  display: flex;
  padding: 15px;
  max-width: 1024px;
  margin: 0 auto;
`
const Dropdown = styled.ul`` // Styles are in header.module.css due to specificity issues for conditional rendering

const TopMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
`
const MenuItems = styled.li`
  text-align: center;
  padding-bottom: 15px;
`
// Inline styles for images
const LogoStyle = {
  width: "200px",
}
const HamburgerStyle = {
  width: "20px",
}

// Button function
function clickHandler() {
  if (document.getElementById("menu-dropdown").style.display === "") {
    document.getElementById("menu-dropdown").style.display = "block"
  } else {
    document.getElementById("menu-dropdown").style.display = ""
  }
}

const Header = () => {
  return (
    <Wrapper>
      <Navigation className={css.navigation}>
        <TopMenuBar className={css.topMenuBar}>
          <Link to="/">
            <Image originalName="gpsea-logo-long.png" style={LogoStyle} />
          </Link>
          <h1 style={{ position: "absolute", visibility: "hidden" }}>
            Godly Play South East Asia
          </h1>
          <button
            onClick={clickHandler}
            id="menu-button"
            className={css.menuButton}
          >
            <Image originalName="menu-icon.png" style={HamburgerStyle} />
          </button>
        </TopMenuBar>
        <Dropdown id="menu-dropdown" className={css.dropdown}>
          <MenuItems className={css.menuItems}>
            <Link to="/about">About</Link>
          </MenuItems>
          <MenuItems className={css.menuItems}>
            <Link to="/what-is-godly-play">What is Godly Play</Link>
          </MenuItems>
          <MenuItems className={css.menuItems}>
            <Link to="/training">Training</Link>
          </MenuItems>
          {/* <MenuItems className={css.menuItems}>
            <Link to="/blog">Blog</Link>
          </MenuItems>
          <MenuItems className={css.menuItems}>
            <Link to="/gallery">Gallery</Link>
          </MenuItems> */}
          <MenuItems className={css.menuItems}>
            <Link to="/contact">Contact</Link>
          </MenuItems>
        </Dropdown>
      </Navigation>
    </Wrapper>
  )
}

export default Header
