import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainTitle from "../components/mainTitle"
import Image from "../components/image"
import styled from "styled-components"
import Subscribe from "../components/subscribe"

const Container = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`
const ImageContainer = styled.div`
  margin: 0 0 1.5rem;
`
const imageStyle = {
  height: "100%",
}
const Training = () => (
  <Layout>
    <SEO title="Training" />
    <MainTitle>
      Godly Play Training in Kuala Lumpur:{" "}
      <span style={{ color: "var(--bright)" }}>Watch This Space!</span>
    </MainTitle>
    <ImageContainer>
      <Image
        originalName="2018-training.png"
        alt="Training participants taking a group photo with the facilitators."
        style={imageStyle}
      />
    </ImageContainer>
    <Container>
      <p>
        We conduct trainings annually for current and potential Godly Play
        practitioners. For the past 5 years, we have flown in trainers from
        Australia who comes with a wealth of experience as a trainer as well as
        as storyteller.
      </p>
      <p>
        As soon as training details are finalised, information will be updated
        on this page. To not miss the latest update on the next training
        programme, subscribe to receive updates.
      </p>
    </Container>
    <Subscribe />
  </Layout>
)

export default Training
