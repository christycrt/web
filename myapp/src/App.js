import React from "react";
import Styled from "styled-components";
import Navbar from "./Components/Navbar";

const Content = Styled.p`
text-align: center;
font-size: 100px;
margin-bottom: 0;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: "10px" }}>
        <Content>Simplest Website</Content>
        <Content>Builder</Content>
      </div>
      <div style={{ textAlign: "center" }}>
        <span style={{ marginRight: "15px" }}>Create site for</span>
        <div class="dropdown" style={{ display: "inline-block" }}>
          <a
            class="btn btn-light"
            href="#"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            SELECT HERE
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">
              Agency
            </a>
            <a class="dropdown-item" href="#">
              Company
            </a>
            <a class="dropdown-item" href="#">
              Consulting
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
