import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import css from "./footer.module.css"
import styled from "styled-components"

const MainContainer = styled.footer`
  background-color: var(--white);
  padding: 20px 15px;
  font-size: 0.85rem;
  border-top: 1px solid #c6c6c6;
`
const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
`
const BottomContainer = styled.div`
  font-size: 0.8rem;
  color: var(--black);
  max-width: 1024px;
  margin: 0 auto;
`
const linkStyle = {
  fontWeight: "700",
  color: "var(--black)",
  paddingRight: "20px",
  paddingBottom: "15px",
}

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <MainContainer>
      <TopContainer>
        <Link style={linkStyle} to="/">
          Home
        </Link>
        <Link style={linkStyle} to="/about">
          About
        </Link>
        <Link style={linkStyle} to="/what-is-godly-play">
          What is Godly Play
        </Link>
        <Link style={linkStyle} to="/training">
          Training
        </Link>
        <Link style={linkStyle} to="/blog">
          Blog
        </Link>
        <Link style={linkStyle} to="/gallery">
          Gallery
        </Link>
        <Link style={linkStyle} to="/contact">
          Contact
        </Link>
      </TopContainer>
      <BottomContainer className={css.BottomContainer}>
        © {new Date().getFullYear()}, {data.site.siteMetadata.title}. Built by
        {` `}
        _pitchun
      </BottomContainer>
    </MainContainer>
  )
}

export default Footer
