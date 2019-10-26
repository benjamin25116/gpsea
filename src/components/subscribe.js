import React from "react"
import styled from "styled-components"

// Styled-Components
const Container = styled.form`
  display: flex;
  border-top: 1px solid #c6c6c6;
  padding: 1.5rem;

  @media screen and (max-width: 529px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 530px) {
    flex-direction: row;
  }
`
const Title = styled.label`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (min-width: 530px) {
    text-align: left;
    margin-right: 1.5rem;
  }
`
const EmailField = styled.input`
  border-radius: 5px;
  border: 1px solid grey;
  height: 35px;
  width: 250px;
  font-style: italic;
  padding-left: 15px;
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 10px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

// End of Styled-components

const buttonStyle = {
  padding: "10px 25px",
  fontSize: "1rem",
  fontWeight: "bold",
  backgroundColor: "var(--bright)",
  borderRadius: "5px",
  boxShadow: "0 2px 4px var(--black)",
  textAlign: "center",
  color: "white",
}
function handleEvent() {
  if (
    document.getElementById("subscribe-button").style.backgroundColor ===
    "var(--bright)"
  ) {
    document.getElementById("subscribe-button").style.backgroundColor =
      "var(--light)"
  } else {
    document.getElementById("subscribe-button").style.backgroundColor =
      "var(--bright)"
  }
}
const Subscribe = () => (
  <Container
    name="subscribe"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/thank-you"
  >
    <input type="hidden" name="form-name" value="subscribe" />
    <Title htmlFor="email">
      Subscribe for updates on training dates and news on Godly Play in South
      East Asia.
    </Title>
    <InputWrapper>
      <EmailField
        type="email"
        name="email"
        placeholder="your email"
        id="email"
        required
      />
      <p hidden>
        <label htmlFor="">
          Don't fill this out please.
          <input name="bot-field" />
        </label>
      </p>

      <button
        type="submit"
        id="subscribe-button"
        style={buttonStyle}
        onMouseEnter={handleEvent}
        onMouseLeave={handleEvent}
      >
        Subscribe Now
      </button>
    </InputWrapper>
  </Container>
)

export default Subscribe
