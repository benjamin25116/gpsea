import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import styled from "styled-components"
import Subscribe from "../components/subscribe"

const Title = styled.h2`
  margin: 25px 15px;
`
const Body = styled.p`
  margin: 25px 15px;
`

const Training = () => (
  <Layout>
    <SEO title="Training" />
    <Image originalName="2018-training.png" style={{ maxHeight: "400px" }} />
    <Title>
      Godly Play Training in Kuala Lumpur:{" "}
      <span style={{ color: "var(--bright)" }}>Watch This Space!</span>
    </Title>
    <Body>
      We conduct trainings annually for current and potential Godly Play
      practitioners. For the past 5 years, we have flown in trainers from
      Australia who comes with a wealth of experience as a trainer as well as as
      storyteller.
    </Body>
    <Body>
      As soon as training details are finalised, information will be updated on
      this page. To not miss the latest update on the next training programme,
      subscribe to receive updates.
    </Body>
    <Subscribe />
  </Layout>
)

export default Training
