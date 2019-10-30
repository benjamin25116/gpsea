import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import GalleryCard from "../components/galleryCard"
import styled from "styled-components"

const Hero = styled.section`
  max-height: 350px;
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
`
const MainTitle = styled.h2`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  margin: 0;
  text-align: center;
  color: var(--white);
  font-size: 5rem;
  text-shadow: 1px 1px 2px var(--black);
  z-index: 1;
`
const imageStyle = {
  maxHeight: "350px",
}
const OverlapContainer = styled.div`
  width: 100%;
  // display: flex;
  // flex-direction: row;
  border: 1px solid green;
  margin: -3rem auto;
`

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <Hero>
      <MainTitle>Gallery</MainTitle>
      <Image originalName="holy-family-3.png" style={imageStyle} />
    </Hero>
    <OverlapContainer>
      <GalleryCard title="a title" imageName="david.png" linkTo="/" />
      <GalleryCard title="a title" imageName="david.png" linkTo="/" />
      <GalleryCard title="a title" imageName="david.png" linkTo="/" />
    </OverlapContainer>
  </Layout>
)

export default Gallery
