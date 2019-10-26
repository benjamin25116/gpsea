import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "./image"
import Logo from "../images/svg-logo.svg"

// Styled Components
const Wrapper = styled.div`
  background: white;
  border-bottom: 1px solid #c6c6c6;
`
const Navigation = styled.nav`
  display: flex;
  padding: 15px;
  margin: 0 auto;
  background: white;

  @media screen and (min-width: 768px) {
    max-width: 1024px;
    padding-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
const MenuButton = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const Dropdown = styled.ul`
  display: flex;
  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
    flex-basis: 85%;
    flex-direction: row;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    display: none;
  }
`
const TopMenuBar = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-basis: 15%;
  }
`
const MenuItems = styled.li`
  text-align: center;
  padding-bottom: 15px;
  list-style: none;
  font-size: 1rem;
  line-height: 1rem;

  @media screen and (max-width: 767px) {
    padding-top: 10px;
  }
  > a {
    font-weight: 400;
    color: var(--black);
  }
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
      <Navigation>
        <TopMenuBar>
          <Link to="/">
            <img
              src={Logo}
              alt="Godly Play South East Asia"
              style={LogoStyle}
            />
          </Link>
          <h1 style={{ position: "absolute", visibility: "hidden" }}>
            Godly Play South East Asia
          </h1>
          <MenuButton onClick={clickHandler} id="menu-button">
            <Image originalName="menu-icon.png" style={HamburgerStyle} />
          </MenuButton>
        </TopMenuBar>
        <Dropdown id="menu-dropdown">
          <MenuItems>
            <Link to="/about">About</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/what-is-godly-play">What is Godly Play</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/training">Training</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/blog">Blog</Link>
          </MenuItems>
          {/* <MenuItems>
            <Link to="/gallery">Gallery</Link>
          </MenuItems> */}
          <MenuItems>
            <Link to="/contact">Contact</Link>
          </MenuItems>
        </Dropdown>
      </Navigation>
    </Wrapper>
  )
}

export default Header
