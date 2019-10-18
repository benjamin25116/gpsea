import React from "react"
import styled from "styled-components"

const StyledButton = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background-color: var(--bright);
  box-shadow: 0 2px 4px var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.p`
  font-weight: bold;
  color: var(--white);
`

const Button = props => (
  <StyledButton style={props.style}>
    <Text>{props.name}</Text>
  </StyledButton>
)

export default Button
