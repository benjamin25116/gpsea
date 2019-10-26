import React from "react"
import styled from "styled-components"

const StyledButton = styled.div`
  height: 50px;
  width: 200px;
  padding-top: 15px;
  border-radius: 5px;
  background-color: var(--bright);
  box-shadow: 0 2px 4px var(--black);
  text-align: center;
  color: white;

  :hover {
    background-color: var(--light);
    color: white;
  }
`
const Button = ({ style, name }) => (
  <StyledButton style={style}>{name}</StyledButton>
)

export default Button
