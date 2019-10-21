import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Subscribe from "../components/subscribe"
import styled from "styled-components"
import css from "./what.module.css"
import SEO from "../components/seo"

const Title = styled.h2`
  color: var(--black);
  margin: 20px 15px;
`
const Paragraph = styled.p`
  color: var(--black);
  margin: 0 15px 20px 15px;
`
const imageStyle = {
  width: "100%",
  marginBottom: "20px",
  boxShadow: "0 1px 4px var(--black)",
}

const WhatIsGodlyPlay = () => (
  <Layout>
    <SEO title="What is Godly Play" />
    <Title>What is Godly Play?</Title>
    <Paragraph>
      Godly Play has its roots in the Montessori philosophy of child
      development. In Montessori, “follow the child” is the principle which
      guides the teacher’s activity with the child. The reason for this is
      because Montessori believes that every child has the innate desire to
      learn and discover truths about his environment through experience. And
      all this happens at his own pace; we cannot force a child to learn.
    </Paragraph>
    <div className={css.wrapper}>
      <Image
        originalName="david.png"
        style={imageStyle}
        className={css.image1}
      />
      <Paragraph className={css.para2}>
        In Godly Play, the same principle applies. Godly Play believes that
        every child has thoughts and questions on things spiritual. A child
        desires to know and understand spirituality as a fact of the universe.
        Godly Play facilitates this by setting up an environment and process
        whereby children can play with stories in a meaningful way that leads to
        insight, thinking about the story and engaging with Scripture.
      </Paragraph>
    </div>
    <Paragraph>
      With a foundation in Montessori and a history of over 40 years of research
      and practice, Godly Play allows children to make relevant and personal
      theological meaning. It values process, openness, discovery, community and
      relationships, and nurtures participants into a deeper dimension of belief
      and faith through wondering and play.
    </Paragraph>
    <Image
      originalName="judyth.png"
      className={css.image2}
      style={imageStyle}
    />
    <Paragraph>
      Employing the Godly Play method will change the way you and your
      congregation interact with children. It is an amazing spiritual journey
      that is worth the time, energy, patience, and love.
    </Paragraph>
    <Subscribe />
  </Layout>
)

export default WhatIsGodlyPlay
