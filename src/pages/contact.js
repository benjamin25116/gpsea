import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Subscribe from "../components/subscribe"
import Image from "../components/image"

const Title = styled.h2`
  margin: 25px 15px;
  font-size: 1.7rem;
`
const Body = styled.p`
  margin: 25px 15px;
`
const Social = styled.div`
  display: flex;
  margin: 15px;
  width: 100px;
  justify-content: space-between;
`
const OuterWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
const InnerWrapper = styled.div``
const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Title>Contact Godly Play SEA</Title>
    <Body>
      Godly Play SEA is a representation of Godly Play practitioners in South
      East Asia. Thus we are spread across many locations.
    </Body>
    <Body>
      As one of the largest practitioner of Godly Play in South East Asia, New
      Covenant Community Church is managing this site and also organising
      trainings and workshops for people interested in the Godly Play method.
    </Body>
    <Body>
      Trainings are typically held in our Godly Play room where weekly
      children’s church session take place through the Godly Play method.
    </Body>
    <Body>We can be reached as follows:</Body>

    <OuterWrapper>
      <iframe
        title="location map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6531992585456!2d101.68978771456065!3d3.1855748538164796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc480ed1bf511f%3A0x6b0c2eb036cbfae0!2sNew%20Covenant%20Community%20Church!5e0!3m2!1sen!2smy!4v1571626983202!5m2!1sen!2smy"
        frameborder="0"
        style={{
          border: "0",
          margin: "0 15px 15px",
          width: "calc(100% - 30px)",
          minHeight: "300px",
        }}
        allowfullscreen=""
      ></iframe>
      <InnerWrapper>
        <Title>
          <a
            href="http://www.nccsentul.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            New Covenant Community Church
          </a>
        </Title>
        <Body>
          2-2, Jalan 14/48a, <br />
          Sentul Boulevard, <br />
          51000 Kuala Lumpur
        </Body>
        <Body>
          We are located on the 2nd floor above CIMB Bank in Sentul Boulevard.
          Sentul Boulevard is a business area located between SMK Convent, SK
          Convent and The Fennel in Sentul East.
        </Body>
        <Title>Reach Out to Us</Title>
        <Body>
          We would love to hear from you. Drop us a note on Facebook or
          Instagram to be in touch.
        </Body>
        <Social>
          <a
            href="https://www.facebook.com/nccmalaysia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image originalName="fb-black.png" style={{ width: "40px" }} />
          </a>
          <a
            href="https://www.instagram.com/newcovenantcommunity/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image originalName="insta-black.png" style={{ width: "40px" }} />
          </a>
        </Social>
      </InnerWrapper>
    </OuterWrapper>
    <Subscribe />
  </Layout>
)

export default Contact
