import React from "react";
import StatusBar from "../StatusBar";
import GNB from "../GNB";
import Footer from "../Footer";
import styled from "styled-components";
import {
  SfprodisplayRegularNormalBlack13px,
  SfprodisplayRegularNormalGunsmoke13,
  SfprodisplayBoldBlack16px,
  ApplesdgothicneoBoldBlack16px,
  ApplesdgothicneoBoldBlack24px,
  SfprodisplayBoldBlack24px,
  ApplesdgothicneoMediumFuscousGray15,
  SfprodisplayBoldBlack30px,
} from "../../styledMixins";
import "./MainTopPageMobile.css";

function MainTopPageMobile(props) {
  const {
    overlapGroup,
    sdGothicNeoBold481,
    image2,
    sdGothicNeoBold482,
    sdGothicNeoBold483,
    image3,
    sdGothicNeoBold484,
    sdGothicNeoBold485,
    image4,
    sdGothicNeoBold486,
    sdGothicNeoBold487,
    sdGothicNeoBold488,
    spanText1,
    spanText2,
    sdGothicNeoBold489,
    sdGothicNeoBold4810,
    spanText3,
    spanText4,
    sdGothicNeoBold4811,
    sdGothicNeoBold4812,
    overlapGroup1,
    spanText5,
    spanText6,
    sdGothicNeoBold4813,
    sdGothicNeoBold4814,
    hj_Photo_Round,
    sh_Photo_Round,
    sdGothicNeoBold4815,
    sdGothicNeoBold4816,
    sdGothicNeoBold4817,
    sdGothicNeoBold4818,
    sdGothicNeoBold4819,
    sdGothicNeoBold4820,
    statusBarProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main-top-page-mobile screen">
        <FlexCol>
          <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
            <StatusBar notch={statusBarProps.notch} text1={statusBarProps.text1} />
            <GNB />
            <SDGothicNeoBold48>{sdGothicNeoBold481}</SDGothicNeoBold48>
          </OverlapGroup>
          <Image2 src={image2} />
          <SDGothicNeoBold481>{sdGothicNeoBold482}</SDGothicNeoBold481>
          <SDGothicNeoBold482>{sdGothicNeoBold483}</SDGothicNeoBold482>
          <Image3 src={image3} />
          <SDGothicNeoBold481>{sdGothicNeoBold484}</SDGothicNeoBold481>
          <SDGothicNeoBold482>{sdGothicNeoBold485}</SDGothicNeoBold482>
          <Image3 src={image4} />
          <SDGothicNeoBold481>{sdGothicNeoBold486}</SDGothicNeoBold481>
          <SDGothicNeoBold482>{sdGothicNeoBold487}</SDGothicNeoBold482>
          <SDGothicNeoBold483>{sdGothicNeoBold488}</SDGothicNeoBold483>
          <SDGothicNeoBold484>
            <Span04>{spanText1}</Span04>
            <Span14>{spanText2}</Span14>
          </SDGothicNeoBold484>
          <MockUp src="/img/mock-up-2@1x.svg" />
          <SDGothicNeoBold485>{sdGothicNeoBold489}</SDGothicNeoBold485>
          <SDGothicNeoBold486>{sdGothicNeoBold4810}</SDGothicNeoBold486>
          <FlexRow>
            <IconCheckMark src="/img/check-24@2x.svg" />
            <SDGothicNeoBold487>
              <Span05>{spanText3}</Span05>
              <Span15>{spanText4}</Span15>
            </SDGothicNeoBold487>
          </FlexRow>
          <FlexRow1>
            <IconCheckMark src="/img/check-24@2x.svg" />
            <SDGothicNeoBold488>{sdGothicNeoBold4811}</SDGothicNeoBold488>
          </FlexRow1>
          <FlexRow1>
            <IconCheckMark src="/img/check-24@2x.svg" />
            <SDGothicNeoBold488>{sdGothicNeoBold4812}</SDGothicNeoBold488>
          </FlexRow1>
          <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <SDGothicNeoBold489>
              <Span04>{spanText5}</Span04>
              <Span14>{spanText6}</Span14>
            </SDGothicNeoBold489>
          </OverlapGroup1>
          <SDGothicNeoBold4810>{sdGothicNeoBold4813}</SDGothicNeoBold4810>
          <SDGothicNeoBold4811>{sdGothicNeoBold4814}</SDGothicNeoBold4811>
        </FlexCol>
        <FlexRow2>
          <PhotoRoundContainer>
            <HJPhotoRound src={hj_Photo_Round} />
            <SHPhotoRound src={sh_Photo_Round} />
          </PhotoRoundContainer>
          <SdGothicNeoboldContainer>
            <SDGothicNeoBold4812>{sdGothicNeoBold4815}</SDGothicNeoBold4812>
            <SDGothicNeoBold4813>{sdGothicNeoBold4816}</SDGothicNeoBold4813>
            <SDGothicNeoBold4814>{sdGothicNeoBold4817}</SDGothicNeoBold4814>
            <SDGothicNeoBold4815>{sdGothicNeoBold4818}</SDGothicNeoBold4815>
            <SDGothicNeoBold4813>{sdGothicNeoBold4819}</SDGothicNeoBold4813>
            <SDGothicNeoBold4814>{sdGothicNeoBold4820}</SDGothicNeoBold4814>
          </SdGothicNeoboldContainer>
        </FlexRow2>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 4295px;
`;

const OverlapGroup = styled.div`
  width: 375px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SDGothicNeoBold48 = styled.div`
  width: 335px;
  min-height: 117px;
  margin-top: 108px;
  font-family: var(--font-family-apple_sd_gothic_neo-bold);
  font-weight: 700;
  color: var(--black);
  font-size: 30px;
  letter-spacing: -1px;
  line-height: 39px;
`;

const Image2 = styled.img`
  width: 375px;
  height: 300px;
  object-fit: cover;
`;

const SDGothicNeoBold481 = styled.div`
  ${ApplesdgothicneoBoldBlack24px}
  width: 335px;
  min-height: 72px;
  margin-top: 39px;
  letter-spacing: -1px;
  line-height: 36px;
`;

const SDGothicNeoBold482 = styled.p`
  ${ApplesdgothicneoMediumFuscousGray15}
  width: 335px;
  min-height: 69px;
  margin-top: 12px;
  letter-spacing: -0.6px;
  line-height: 23px;
`;

const Image3 = styled.img`
  width: 375px;
  height: 300px;
  margin-top: 101px;
  object-fit: cover;
`;

const SDGothicNeoBold483 = styled.div`
  ${SfprodisplayBoldBlack30px}
  width: 335px;
  min-height: 39px;
  margin-top: 234px;
  text-align: center;
  letter-spacing: 0;
  line-height: 39px;
  white-space: nowrap;
`;

const SDGothicNeoBold484 = styled.div`
  ${SfprodisplayBoldBlack24px}
  width: 335px;
  min-height: 73px;
  margin-top: 20px;
  text-align: center;
  line-height: 36px;
`;

const Span04 = styled.span`
  ${SfprodisplayBoldBlack24px}
  letter-spacing: 0;
`;

const Span05 = styled.span`
  ${SfprodisplayBoldBlack16px}
  letter-spacing: 0;
`;

const Span14 = styled.span`
  ${ApplesdgothicneoBoldBlack24px}
  letter-spacing: -1.00px;
`;

const MockUp = styled.img`
  width: 375px;
  height: 708px;
  margin-top: 128px;
`;

const SDGothicNeoBold485 = styled.div`
  width: 335px;
  min-height: 24px;
  margin-top: 28px;
  font-family: var(--font-family-sf_pro_display-bold);
  font-weight: 700;
  color: var(--royal-blue);
  font-size: var(--font-size-xs);
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const SDGothicNeoBold486 = styled.div`
  ${ApplesdgothicneoBoldBlack24px}
  width: 335px;
  min-height: 72px;
  margin-top: 10px;
  letter-spacing: -1px;
  line-height: 36px;
`;

const FlexRow = styled.div`
  height: 25px;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 335px;
`;

const IconCheckMark = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
`;

const SDGothicNeoBold487 = styled.p`
  ${SfprodisplayBoldBlack16px}
  min-height: 24px;
  margin-left: 6px;
  line-height: 24px;
  white-space: nowrap;
`;

const Span15 = styled.span`
  ${ApplesdgothicneoBoldBlack16px}
  letter-spacing: -0.60px;
`;

const FlexRow1 = styled.div`
  height: 25px;
  margin-top: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 335px;
`;

const SDGothicNeoBold488 = styled.p`
  ${ApplesdgothicneoBoldBlack16px}
  min-height: 24px;
  margin-left: 6px;
  letter-spacing: -0.6px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  height: 300px;
  margin-top: 100px;
  display: flex;
  padding: 112px 20px;
  align-items: flex-start;
  min-width: 375px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SDGothicNeoBold489 = styled.div`
  ${SfprodisplayBoldBlack24px}
  width: 335px;
  min-height: 73px;
  text-align: center;
  line-height: 36px;
`;

const SDGothicNeoBold4810 = styled.div`
  ${SfprodisplayBoldBlack30px}
  width: 335px;
  min-height: 39px;
  margin-top: 99px;
  letter-spacing: 0;
  line-height: 39px;
  white-space: nowrap;
`;

const SDGothicNeoBold4811 = styled.p`
  width: 335px;
  min-height: 80px;
  margin-top: 20px;
  font-family: var(--font-family-sf_pro_display-bold);
  font-weight: 700;
  color: var(--black);
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
`;

const FlexRow2 = styled.div`
  height: 190px;
  margin-top: 31px;
  display: flex;
  align-items: center;
  min-width: 335px;
`;

const PhotoRoundContainer = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 190px;
`;

const HJPhotoRound = styled.img`
  width: 80px;
  height: 80px;
`;

const SHPhotoRound = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 30px;
`;

const SdGothicNeoboldContainer = styled.div`
  width: 231px;
  margin-left: 24px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 178px;
`;

const SDGothicNeoBold4812 = styled.div`
  ${ApplesdgothicneoBoldBlack16px}
  min-height: 24px;
  letter-spacing: -0.6px;
  line-height: 24px;
  white-space: nowrap;
`;

const SDGothicNeoBold4813 = styled.div`
  ${SfprodisplayRegularNormalBlack13px}
  min-height: 20px;
  margin-top: 2px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const SDGothicNeoBold4814 = styled.div`
  ${SfprodisplayRegularNormalGunsmoke13}
  min-height: 20px;
  margin-top: 2px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const SDGothicNeoBold4815 = styled.div`
  ${ApplesdgothicneoBoldBlack16px}
  min-height: 24px;
  margin-top: 42px;
  letter-spacing: -0.6px;
  line-height: 24px;
  white-space: nowrap;
`;

export default MainTopPageMobile;
