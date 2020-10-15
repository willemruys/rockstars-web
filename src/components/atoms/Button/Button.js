import React from "react"

import styled from "styled-components"

const StyledButton = styled.button`
  background: ${props => props.color};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

const Button = ({ label, type }) => {
  let color = ""

  if (type === "primary") {
    color = "#FFE000"
  }

  if (type === "secondary") {
    color = "#00000"
  }

  return <StyledButton color={color}>{label}</StyledButton>
}

export default Button
