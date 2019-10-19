import React from "react"
import styled from "styled-components"
import css from "./subscribe.module.css"
import Button from "./button"

const Container = styled.form`
  padding: 20px 15px 40px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #c6c6c6;
`
const Title = styled.label`
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--black);
  text-align: center;
  width: 250px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Subscribe = () => (
  <Container action="" className={css.container}>
    <Title htmlFor="email" className={css.title}>
      Subscribe for updates on training dates and news on Godly Play in South
      East Asia.
    </Title>
    <InputWrapper className={css.inputWrapper}>
      <EmailField type="email" placeholder="your email" id="email" />
      <button type="submit">
        <Button name="Subscribe Now" style={{ width: "250px" }} />
      </button>
    </InputWrapper>
  </Container>
)

export default Subscribe
