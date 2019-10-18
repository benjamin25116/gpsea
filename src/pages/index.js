import React from "react"
import Subscribe from "../components/subscribe"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkedBanner from "../components/linkedBanner"
import styled from "styled-components"

const TextContainer = styled.article`
  padding: 40px;
`
const TextBody = styled.p`
  text-align: center;
  font-weight: bold;
  color: var(--bright);
`
const SectionTitle = styled.h2`
  color: var(--black);
  font-size: 1.8rem;
  padding: 40px;
  text-align: center;
  margin: 0;
`
const VideoTitle = styled.h3`
  color: var(--bright);
  font-size: 1.4rem;
  text-align: center;
  margin: 0;
`
const Video = styled.iframe`
  width: 100vw;
  height: calc(100vw / 16 * 9);
  border: none;
  box-shadow: 0 1px 4px var(--black);
  margin-bottom: 20px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LinkedBanner
      imageName="holy-family-1.png"
      title="A Montessori Approach to Spiritual Education"
      body="Godly Play encourages children to listen for God and be authentic as well as creative in their response to God's call on their lives."
      buttonName="Learn More"
      linkTo="/what-is-godly-play"
    />
    <TextContainer>
      <TextBody>
        Godly Play is a creative and imaginative approach to Christian education
        and spiritual guidance.
      </TextBody>
    </TextContainer>
    <LinkedBanner
      imageName="holy-family-2.png"
      title="Godly Play Models Adult Worship Life"
      body="Children experience gathering together, praying, listening to stories and understanding symbols as well as participating in traditions of Christian congregations."
      buttonName="Read More"
      linkTo="/what-is-godly-play"
    />
    <SectionTitle>Watch a story being told</SectionTitle>
    <VideoTitle>The Advent</VideoTitle>
    <Video
      src="https://www.youtube.com/embed/zgbJIEkZYvQ"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></Video>
    <VideoTitle>The Great Pearl</VideoTitle>
    <Video
      src="https://www.youtube.com/embed/h-b3T7HfXYY"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></Video>
    <VideoTitle>The Ten Best Ways</VideoTitle>
    <Video
      src="https://www.youtube.com/embed/hkjXX2xjTkg"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></Video>
    <Subscribe />
  </Layout>
)

export default IndexPage
