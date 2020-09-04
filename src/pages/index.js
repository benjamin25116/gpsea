import React from "react"
import Subscribe from "../components/subscribe"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkedBanner from "../components/linked-banner/linkedBanner"
import styled from "styled-components"
import VideoCard from "../components/videoCard"


const TextContainer = styled.section`
  position: relative;
  top: 0;
  width: calc(100vw - 1.5rem);
  max-width: 1024px;
  margin: 0 auto;
  min-height: 500px;
`
const TextBody = styled.p`
  text-align: center;
  font-weight: bold;
  color: var(--bright);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  line-height: 2.8rem;
`
const SectionTitle = styled.h2`
  margin-top: 2.5rem;
  text-align: center;
`
const VideoSection = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  max-width: 1024px;
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
    <SectionTitle>Watch a Story</SectionTitle>
    <VideoSection>
      <VideoCard
        title="The Advent"
        src="https://www.youtube.com/embed/zgbJIEkZYvQ"
      />
      <VideoCard
        title="The Great Pearl"
        src="https://www.youtube.com/embed/h-b3T7HfXYY"
      />
      <VideoCard
        title="The Ten Best Ways"
        src="https://www.youtube.com/embed/hkjXX2xjTkg"
      />
    </VideoSection>
    <Subscribe />
  </Layout>
)

export default IndexPage
