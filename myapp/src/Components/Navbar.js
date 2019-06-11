import React from "react";
import Styled from "styled-components";

const ButtonCreate = Styled.button`
  background-color : #bbe0e2;
  border: none;
  color: #2f6c6f;
  padding : 1rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    background-color : #85C8CB;
  }
`;
const Logo = Styled.span`
color : #008C8C;
font-size: 50px;
`;
function Navbar() {
  return (
    <nav class="navbar navbar-light ">
      <Logo>8b</Logo>
      <ButtonCreate>CREATE FREE WEBSITE</ButtonCreate>
    </nav>
  );
}

export default Navbar;
