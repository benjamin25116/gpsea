import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "../components/image"

const Container = styled.article`
  position: relative;
  max-height: 300px;
  min-width: 320px;
  margin: 0 1.5rem 1.5rem;
  flex-grow: 1;
`
const Title = styled.h3`
  width: 100%;
  margin: 0;
  background: var(--bright);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 2rem;
  text-shadow: 1px 1px 2px var(--black);
  text-align: center;
`
const imageStyle = {
  maxHeight: "300px",
  borderRadius: "5px",
}

const GalleryCard = ({ title, imageName, linkTo }) => {
  return (
    <Container>
      <Link to={linkTo}>
        <Image originalName={imageName} style={imageStyle} />
        <Title>{title}</Title>
      </Link>
    </Container>
  )
}

export default GalleryCard
