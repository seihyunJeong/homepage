import React from "react";
import LogoPostlab from "../LogoPostlab";
import styled from "styled-components";


function GNB() {
  return (
    <GNB1>
      <LogoPostlab />
      <Menu24 src="/img/menu-24@2x.svg" />
    </GNB1>
  );
}

const GNB1 = styled.div`
  width: 375px;
  height: 60px;
  position: relative;
  display: flex;
  padding: 0 20px;
  align-items: center;
`;

const Menu24 = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 165px;
`;

export default GNB;
