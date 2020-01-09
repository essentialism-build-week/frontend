import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin: 7% 0;
`;

const HeaderImg = styled.img`
  margin: 0 auto;
  width: 80vw;
`;

export default function HeaderComponent() {
  return (
    <Header className="centered">
      <HeaderImg src={logo} alt="Todai header" />
    </Header>
  );
}
