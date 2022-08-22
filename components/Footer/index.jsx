import React from "react";
import styled from "styled-components";
import { SfprodisplayRegularNormalWhite13px, ApplesdgothicneoRegularNormalWhite1 } from "../../styledMixins";


function Footer(props) {
  const {
    sdGothicNeoBold161,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    sdGothicNeoBold162,
    sdGothicNeoBold163,
  } = props;

  return (
    <Footer1>
      <View>
        <SDGothicNeoBold16>{sdGothicNeoBold161}</SDGothicNeoBold16>
      </View>
      <View1>
        <SDGothicNeoBold161>
          <Span07>{spanText1}</Span07>
          <Span17>{spanText2}</Span17>
          <Span07>{spanText3}</Span07>
          <Span17>{spanText4}</Span17>
          <Span07>{spanText5}</Span07>
          <Span17>{spanText6}</Span17>
          <Span07>{spanText7}</Span07>
          <Span17>{spanText8}</Span17>
          <Span07>{spanText9}</Span07>
        </SDGothicNeoBold161>
      </View1>
      <View2>
        <SDGothicNeoBold162>{sdGothicNeoBold162}</SDGothicNeoBold162>
      </View2>
      <View3>
        <SDGothicNeoBold163>{sdGothicNeoBold163}</SDGothicNeoBold163>
      </View3>
    </Footer1>
  );
}

const Footer1 = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  width: min-content;
  height: min-content;
  align-items: flex-start;
  padding: 80px 20px 100px;
  background-color: var(--black);
`;

const View = styled.div`
  display: flex;
  width: 335px;
  height: min-content;
  align-items: flex-start;
`;

const SDGothicNeoBold16 = styled.div`
  margin-top: -1px;
  font-family: var(--font-family-apple_sd_gothic_neo-bold);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xs);
  letter-spacing: -0.6px;
  line-height: 24px;
  white-space: nowrap;
`;

const View1 = styled.div`
  display: flex;
  width: 335px;
  height: min-content;
  align-items: flex-start;
  padding: 12px 0px 0px;
`;

const SDGothicNeoBold161 = styled.p`
  ${ApplesdgothicneoRegularNormalWhite1}
  margin-top: -1px;
  line-height: 20px;
  white-space: nowrap;
`;

const Span07 = styled.span`
  ${ApplesdgothicneoRegularNormalWhite1}
  letter-spacing: -0.20px;
`;

const Span17 = styled.span`
  ${SfprodisplayRegularNormalWhite13px}
  letter-spacing: 0;
`;

const View2 = styled.div`
  display: flex;
  width: 335px;
  height: min-content;
  align-items: flex-start;
  padding: 2px 0px 0px;
`;

const SDGothicNeoBold162 = styled.div`
  ${SfprodisplayRegularNormalWhite13px}
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const View3 = styled.div`
  display: flex;
  width: 335px;
  height: min-content;
  align-items: flex-start;
  padding: 24px 0px 0px;
`;

const SDGothicNeoBold163 = styled.p`
  margin-top: -1px;
  font-family: var(--font-family-sf_pro_display-regular);
  font-weight: 400;
  color: #999999;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default Footer;
