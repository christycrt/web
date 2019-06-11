import React from 'react';
import Styled from 'styled-components';

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
`
const Logo = Styled.span`
color : #008C8C;
font-size: 50px;
`
const Content = Styled.p`
text-align: center;
font-size: 100px;
margin-bottom: 0;
`


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light ">
        <Logo>8b</Logo>
        <ButtonCreate>CREATE FREE WEBSITE</ButtonCreate>
      </nav>
      <div style={{ marginTop: '10px' }}>
        <Content>Simplest Website</Content>
        <Content>Builder</Content>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ marginRight: '15px' }}>Create site for</span>
        <div class="dropdown" style={{ display: 'inline-block' }}>
          <a class="btn btn-light" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            SELECT HERE</a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Agency</a>
            <a class="dropdown-item" href="#">Company</a>
            <a class="dropdown-item" href="#">Consulting</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
