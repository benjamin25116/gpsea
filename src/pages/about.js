import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import MainTitle from "../components/mainTitle"
import SecondaryTitle from "../components/secondaryTitle"
import Subscribe from "../components/subscribe"
import styled from "styled-components"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`
const ImageContainer = styled.div`
  height: calc(100vw / 2.5);
  max-height: 350px;
`
const imageStyle = {
  height: "100%",
}
const About = () => (
  <Layout>
    <SEO title="About" />
    <ImageContainer>
      <Image
        originalName="about-training.png"
        alt="Story tellers gathering around a trainer"
        style={imageStyle}
      />
    </ImageContainer>
    <MainTitle>Who Is Godly Play South East Asia?</MainTitle>
    <p>
      Godly Play South East Asia is a gathering of Godly Play practitioners in
      South East Asia. The Godly Play South East Asia website is maintained by
      the New Covenant Community Church in Sentul, Kuala Lumpur.
    </p>

    <SecondaryTitle>New Covenant Community and Godly Play</SecondaryTitle>
    <Container>
      <p>
        <a
          href="https://www.nccsentul.com/new-to-church/"
          target="_blank"
          rel="noopener noreferrer"
        >
          New Covenant Community
        </a>{" "}
        has been practicing the Godly Play method in their children’s church
        since 2006. Today, all of their children experiences children’s church
        through Godly Play.
      </p>
      <p>
        They also organise week-long training sessions on Godly Play, conducted
        by trainers from{" "}
        <a
          href="http://godlyplay.org.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Godly Play Australia
        </a>{" "}
        in Kuala Lumpur as well as make their Godly Play materials in-house.
      </p>
    </Container>
    <Subscribe />
  </Layout>
)

export default About
