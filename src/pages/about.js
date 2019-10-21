import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Subscribe from "../components/subscribe"
import styled from "styled-components"
import css from "./about.module.css"
import SEO from "../components/seo"

const TopTitle = styled.h1`
  color: var(--black);
  margin: 20px 15px;
  font-size: 1.8rem;
  max-width: 654px;
`
const BottomTitle = styled.h2`
  color: var(--black);
  margin: 20px 15px;
  font-size: 1.5rem;
  max-width: 654px;
`
const Body = styled.p`
  color: var(--black);
  margin: 0px 15px 20px 15px;
  font-size: 1.15rem;
  line-height: 1.7rem;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const imageStyle = {
  width: "100vw",
  marginBottom: "20px",
}

const About = () => (
  <Layout>
    <SEO title="About" />
    <TopTitle>Who Is Godly Play South East Asia?</TopTitle>
    <Container>
      <Body className={css.text}>
        Godly Play South East Asia is a gathering of Godly Play practitioners in
        South East Asia. The Godly Play South East Asia website is maintained by
        the New Covenant Community Church in Sentul, Kuala Lumpur.
      </Body>

      <Image
        originalName="about-training.png"
        style={imageStyle}
        className={css.image1}
      />
    </Container>

    <BottomTitle>New Covenant Community and Godly Play</BottomTitle>
    <Container>
      <Image
        originalName="about-ncc.png"
        style={imageStyle}
        className={css.image2}
      />
      <div className={css.textWrapper}>
        <Body className={css.text}>
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
        </Body>
        <Body className={css.text}>
          They also organise week-long training sessions on Godly Play,
          conducted by trainers from{" "}
          <a
            href="http://godlyplay.org.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Godly Play Australia
          </a>
          , in Kuala Lumpur as well as make their Godly Play materials in-house.
        </Body>
      </div>
    </Container>
    <Subscribe />
  </Layout>
)

export default About
