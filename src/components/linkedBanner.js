import React from "react"
import Button from "./button"
import { Link } from "gatsby"
import Image from "./image"
import styled from "styled-components"
import css from "./linkedBanner.module.css"

// Styled Components
const Container = styled.article`
  height: 500px;
  position: relative;
  box-shadow: 0 1px 4px var(--black);
`
const Title = styled.h2`
  font-size: 2.4rem;
  color: white;
  text-shadow: 1px 1px 4px var(--black);
  max-width: 450px;
  padding: 20px 15px 10px 15px;
`
const Body = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 4px var(--black);
  max-width: 350px;
  padding: 0 45px 40px 15px;
`
const buttonStyle = {
  marginLeft: "15px",
  marginBottom: "20px",
}

const LinkedBanner = props => (
  <Container className={css.container}>
    <Image originalName={props.imageName} className={css.image} />
    <div className={css.textWrapper}>
      <Title>{props.title}</Title>
      <Body>{props.body}</Body>
      <Link to={props.linkTo}>
        <Button name={props.buttonName} style={buttonStyle}></Button>
      </Link>
    </div>
  </Container>
)

export default LinkedBanner
