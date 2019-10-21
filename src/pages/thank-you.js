import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Title = styled.h1`
  margin: 25px 15px;
  font-size: 1.7rem;
`
const Body = styled.p`
  margin: 25px 15px;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Thank You" />
    <Image originalName="holy-family-3.png" />
    <Title>Thank You for Subscribing to Us</Title>
    <Body>
      We value your privacy and will never share your information with a third
      party.
    </Body>
  </Layout>
)

export default SecondPage
