import React from "react"
import Image from "../components/image"
import styled from "styled-components"

const HeroImage = styled.section`
  width: 100vw;
  max-height: 400px;
`

const GalleryTemplate = () => {
  return (
    <HeroImage>
      <Image originalName="holy-family-3.png" />
    </HeroImage>
  )
}

export default GalleryTemplate
