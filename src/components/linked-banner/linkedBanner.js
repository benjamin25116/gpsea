import React from "react"
import Button from "./linkedBanner-button"
import { Link } from "gatsby"
import Image from "../image"
import styled from "styled-components"

// Styled-Components
const Container = styled.section`
  height: 500px;
  position: relative;
  box-shadow: 0 1px 4px var(--black);
`
const Title = styled.h2`
  color: white;
  text-shadow: 1px 1px 4px var(--black);
  max-width: 450px;
`
const Body = styled.p`
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 4px var(--black);
  max-width: 350px;
`
const TextWrapper = styled.div`
  position: absolute;
  top: calc(100% / 2);
  transform: translateY(-50%);

  @media screen and (min-width: 415px) {
    margin-left: 2.5rem;
  }
`
// End of Styled-Components

// In-line styles
const buttonStyle = {
  marginLeft: "1.5rem",
}

const LinkedBanner = ({ imageName, title, body, linkTo, buttonName }) => (
  <Container>
    <Image originalName={imageName} />
    <TextWrapper>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <Link to={linkTo}>
        <Button name={buttonName} style={buttonStyle}></Button>
      </Link>
    </TextWrapper>
  </Container>
)

export default LinkedBanner
