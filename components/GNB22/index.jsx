import React from "react";
import LogoPostlab from "../LogoPostlab";
import View from "../View";
import styled from "styled-components";


function GNB22(props) {
  const { className, view1Props, view2Props } = props;

  return (
    <GNB className={`gnb ${className || ""}`}>
      <LogoPostlab />
      <Frame1 className="frame-1">
        <View>{view1Props.children}</View>
        <View>{view2Props.children}</View>
      </Frame1>
    </GNB>
  );
}

const GNB = styled.div`
  position: absolute;
  width: 1920px;
  height: 60px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 360px;
  align-items: center;

  &.gnb.gnb-1 {
    position: relative;
    top: unset;
    left: unset;
  }

  &.gnb.gnb-2 {
    position: relative;
    top: unset;
    left: unset;
  }
`;

const Frame1 = styled.div`
  display: flex;
  position: relative;
  margin-left: 946px;
  width: min-content;
  height: min-content;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 16px;
  padding: 9px 0px 8px;
`;

export default GNB22;
