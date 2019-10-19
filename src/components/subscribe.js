import React from "react"
import styled from "styled-components"

const Container = styled.form`
  padding: 20px 15px 40px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Button = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 0.3rem;
  border: none;
  background-color: #ff7000;
  -webkit-box-shadow: 0 1px 4px #323232;
  box-shadow: 0 1px 4px #323232;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
`

const Subscribe = () => (
  <Container action="">
    <Title htmlFor="email">
      Subscribe for updates on training dates and news on Godly Play in South
      East Asia.
    </Title>
    <EmailField type="email" placeholder="your email" id="email" />
    <Button type="submit" value="Subscribe Now" />
  </Container>
)

export default Subscribe
