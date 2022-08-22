import React from "react";
import styled from "styled-components";
import { ApplesdgothicneoMediumBlack15px } from "../../styledMixins";


function View(props) {
  const { children } = props;

  return (
    <View1>
      <SDGothicNeoBold48>{children}</SDGothicNeoBold48>
    </View1>
  );
}

const View1 = styled.div`
  display: flex;
  width: min-content;
  height: min-content;
  align-items: flex-start;
  padding: 10px;
`;

const SDGothicNeoBold48 = styled.div`
  ${ApplesdgothicneoMediumBlack15px}
  min-width: 26px;
  margin-top: -1px;
  letter-spacing: -0.6px;
  line-height: 23px;
  white-space: nowrap;
`;

const View2 = styled.div`
  display: flex;
  width: min-content;
  height: min-content;
  align-items: flex-start;
  padding: 10px;
`;

const SDGothicNeoBold481 = styled.div`
  ${ApplesdgothicneoMediumBlack15px}
  min-width: 26px;
  margin-top: -1px;
  letter-spacing: -0.6px;
  line-height: 23px;
  white-space: nowrap;
`;

const View3 = styled.div`
  display: flex;
  width: min-content;
  height: min-content;
  align-items: flex-start;
  padding: 10px;
`;

const SDGothicNeoBold482 = styled.div`
  ${ApplesdgothicneoMediumBlack15px}
  min-width: 26px;
  margin-top: -1px;
  letter-spacing: -0.6px;
  line-height: 23px;
  white-space: nowrap;
`;

export default View;
