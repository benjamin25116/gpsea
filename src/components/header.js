import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import css from "./header.module.css"
import Image from "./image"

// Styled Components
const Navigation = styled.nav`
  background: white;
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #c6c6c6;
`
const Dropdown = styled.ul`` // Styles are in header.module.css due to specificity issues for conditional rendering

const TopMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 15%;
`
const MenuItems = styled.li`
  text-align: center;
  padding-bottom: 15px;
  font-weight: 200;
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
    <Navigation className={css.navigation}>
      <TopMenuBar className={css.topMenuBar}>
        <Link to="/">
          <Image originalName="gpsea-logo-long.png" style={LogoStyle} />
        </Link>
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
        <MenuItems className={css.menuItems}>
          <Link to="/blog">Blog</Link>
        </MenuItems>
        <MenuItems className={css.menuItems}>
          <Link to="/gallery">Gallery</Link>
        </MenuItems>
        <MenuItems className={css.menuItems}>
          <Link to="/contact">Contact</Link>
        </MenuItems>
      </Dropdown>
    </Navigation>
  )
}

export default Header
