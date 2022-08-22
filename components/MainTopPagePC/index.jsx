import React from "react";
import GNB22 from "../GNB22";
import styled from "styled-components";
import {
  SfprodisplayBoldRoyalBlue20px,
  SfprodisplayRegularNormalGunsmoke16,
  ApplesdgothicneoBoldBlack18px,
  SfprodisplayRegularNormalBlack16px,
  SfprodisplayBoldBlack18px,
  ApplesdgothicneoBoldBlack22px,
  ApplesdgothicneoMediumFuscousGray20,
  ApplesdgothicneoBoldBlack40px,
  SfprodisplayBoldBlack40px,
  ApplesdgothicneoBoldBlack48px,
  SfprodisplayBoldBlack48px,
  SfprodisplayBoldBlack22px,
  ApplesdgothicneoBoldBlack24px,
} from "../../styledMixins";
import "./MainTopPagePC.css";

function MainTopPagePC(props) {
  const {
    image1,
    sdGothicNeoBold481,
    sdGothicNeoBold482,
    sdGothicNeoBold483,
    image2,
    sdGothicNeoBold484,
    sdGothicNeoBold485,
    image3,
    sdGothicNeoBold486,
    sdGothicNeoBold487,
    image4,
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
    spanText7,
    spanText8,
    hj_Photo_Round,
    sh_Photo_Round,
    sdGothicNeoBold4814,
    sdGothicNeoBold4815,
    sdGothicNeoBold4816,
    sdGothicNeoBold4817,
    sdGothicNeoBold4818,
    sdGothicNeoBold4819,
    footer,
    gNB22Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main-top-page-pc-1 screen">
        <OverlapGroup>
          <Image src={image1} />
          <SDGothicNeoBold48>{sdGothicNeoBold481}</SDGothicNeoBold48>
          <GNB22 view1Props={gNB22Props.view1Props} view2Props={gNB22Props.view2Props} />
        </OverlapGroup>
        <FlexRow>
          <FlexCol>
            <SDGothicNeoBold481>{sdGothicNeoBold482}</SDGothicNeoBold481>
            <SDGothicNeoBold482>{sdGothicNeoBold483}</SDGothicNeoBold482>
            <Image1 src={image2} />
            <SDGothicNeoBold483>{sdGothicNeoBold484}</SDGothicNeoBold483>
            <SDGothicNeoBold484>{sdGothicNeoBold485}</SDGothicNeoBold484>
          </FlexCol>
          <FlexCol1>
            <Image2 src={image3} />
            <SDGothicNeoBold485>{sdGothicNeoBold486}</SDGothicNeoBold485>
            <SDGothicNeoBold484>{sdGothicNeoBold487}</SDGothicNeoBold484>
            <Image3 src={image4} />
          </FlexCol1>
        </FlexRow>
        <FlexCol2>
          <SDGothicNeoBold486>{sdGothicNeoBold488}</SDGothicNeoBold486>
          <SDGothicNeoBold487>
            <Span0>{spanText1}</Span0>
            <Span1>{spanText2}</Span1>
          </SDGothicNeoBold487>
          <FlexRow1>
            <MockUp src="/img/mock-up@1x.svg" />
            <FlexCol3>
              <SDGothicNeoBold488>{sdGothicNeoBold489}</SDGothicNeoBold488>
              <SDGothicNeoBold489>{sdGothicNeoBold4810}</SDGothicNeoBold489>
              <FlexRow2>
                <IconCheckMark src="/img/check-24@2x.svg" />
                <SDGothicNeoBold4810>
                  <Span01>{spanText3}</Span01>
                  <Span11>{spanText4}</Span11>
                </SDGothicNeoBold4810>
              </FlexRow2>
              <FlexRow3>
                <IconCheckMark src="/img/check-24@2x.svg" />
                <SDGothicNeoBold4811>{sdGothicNeoBold4811}</SDGothicNeoBold4811>
              </FlexRow3>
              <FlexRow3>
                <IconCheckMark src="/img/check-24@2x.svg" />
                <SDGothicNeoBold4811>{sdGothicNeoBold4812}</SDGothicNeoBold4811>
              </FlexRow3>
            </FlexCol3>
          </FlexRow1>
          <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <SDGothicNeoBold486>
              <span className="sfprodisplay-bold-black-48px">{spanText5}</span>
              <span className="applesdgothicneo-bold-black-48px">{spanText6}</span>
            </SDGothicNeoBold486>
          </OverlapGroup1>
          <SDGothicNeoBold4812>{sdGothicNeoBold4813}</SDGothicNeoBold4812>
          <SDGothicNeoBold4813>
            <Span03>{spanText7}</Span03>
            <Span13>{spanText8}</Span13>
          </SDGothicNeoBold4813>
          <PhotoRoundContainer>
            <HJPhotoRound src={hj_Photo_Round} />
            <SHPhotoRound src={sh_Photo_Round} />
          </PhotoRoundContainer>
          <SdGothicNeoboldContainer>
            <SDGothicNeoBold4814>{sdGothicNeoBold4814}</SDGothicNeoBold4814>
            <SDGothicNeoBold4815>{sdGothicNeoBold4815}</SDGothicNeoBold4815>
          </SdGothicNeoboldContainer>
          <SdGothicNeoboldContainer1>
            <SDGothicNeoBold4816>{sdGothicNeoBold4816}</SDGothicNeoBold4816>
            <SDGothicNeoBold4817>{sdGothicNeoBold4817}</SDGothicNeoBold4817>
          </SdGothicNeoboldContainer1>
          <SdGothicNeoboldContainer2>
            <SDGothicNeoBold4816>{sdGothicNeoBold4818}</SDGothicNeoBold4816>
            <SDGothicNeoBold4817>{sdGothicNeoBold4819}</SDGothicNeoBold4817>
          </SdGothicNeoboldContainer2>
          <Footer src={footer} />
        </FlexCol2>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 1920px;
  height: 600px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 1440px;
  height: 600px;
  top: 0;
  left: 240px;
`;

const SDGothicNeoBold48 = styled.h1`
  ${ApplesdgothicneoBoldBlack48px}
  position: absolute;
  width: 1200px;
  top: 206px;
  left: 360px;
  letter-spacing: -1px;
  line-height: 62px;
`;

const FlexRow = styled.div`
  height: 1440px;
  margin-top: 200px;
  display: flex;
  align-items: center;
  min-width: 1200px;
`;

const FlexCol = styled.div`
  width: 588px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1309px;
`;

const SDGothicNeoBold481 = styled.div`
  ${ApplesdgothicneoBoldBlack40px}
  width: 486px;
  min-height: 104px;
  letter-spacing: -1px;
  line-height: 52px;
`;

const SDGothicNeoBold482 = styled.div`
  ${ApplesdgothicneoMediumFuscousGray20}
  width: 486px;
  min-height: 60px;
  margin-top: 30px;
  letter-spacing: -1px;
  line-height: 30px;
`;

const Image1 = styled.img`
  width: 588px;
  height: 340px;
  margin-top: 274px;
`;

const SDGothicNeoBold483 = styled.div`
  ${ApplesdgothicneoBoldBlack40px}
  width: 486px;
  min-height: 104px;
  margin-top: 277px;
  letter-spacing: -1px;
  line-height: 52px;
`;

const SDGothicNeoBold484 = styled.div`
  ${ApplesdgothicneoMediumFuscousGray20}
  width: 486px;
  min-height: 90px;
  margin-top: 30px;
  letter-spacing: -1px;
  line-height: 30px;
`;

const FlexCol1 = styled.div`
  width: 588px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 1440px;
`;

const Image2 = styled.img`
  width: 588px;
  height: 340px;
`;

const SDGothicNeoBold485 = styled.div`
  ${ApplesdgothicneoBoldBlack40px}
  min-height: 104px;
  align-self: center;
  margin-top: 257px;
  margin-right: 18px;
  min-width: 366px;
  letter-spacing: -1px;
  line-height: 52px;
`;

const Image3 = styled.img`
  width: 588px;
  height: 340px;
  margin-top: 279px;
`;

const FlexCol2 = styled.div`
  width: 1440px;
  margin-top: 427px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 3410px;
`;

const SDGothicNeoBold486 = styled.div`
  ${SfprodisplayBoldBlack48px}
  width: 1200px;
  min-height: 62px;
  text-align: center;
  letter-spacing: -1px;
  line-height: 62px;
  white-space: nowrap;
`;

const SDGothicNeoBold487 = styled.div`
  ${SfprodisplayBoldBlack40px}
  width: 1200px;
  min-height: 52px;
  margin-top: 30px;
  text-align: center;
  line-height: 52px;
  white-space: nowrap;
`;

const Span0 = styled.span`
  ${SfprodisplayBoldBlack40px}
  letter-spacing: 0;
`;

const Span01 = styled.span`
  ${SfprodisplayBoldBlack18px}
  letter-spacing: 0;
`;

const Span03 = styled.span`
  ${SfprodisplayBoldBlack22px}
  letter-spacing: 0;
`;

const Span1 = styled.span`
  ${ApplesdgothicneoBoldBlack40px}
  letter-spacing: -1.00px;
`;

const Span13 = styled.span`
  ${ApplesdgothicneoBoldBlack22px}
  letter-spacing: -1.00px;
`;

const FlexRow1 = styled.div`
  margin-top: 371px;
  margin-left: 52px;
  display: flex;
  align-items: center;
  min-width: 1148px;
`;

const MockUp = styled.img`
  width: 475px;
  height: 900px;
`;

const FlexCol3 = styled.div`
  width: 588px;
  margin-left: 85px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 323px;
`;

const SDGothicNeoBold488 = styled.div`
  ${SfprodisplayBoldRoyalBlue20px}
  min-height: 30px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const SDGothicNeoBold489 = styled.div`
  ${ApplesdgothicneoBoldBlack40px}
  width: 588px;
  min-height: 104px;
  margin-top: 20px;
  letter-spacing: -1px;
  line-height: 52px;
`;

const FlexRow2 = styled.div`
  height: 27px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  min-width: 588px;
`;

const IconCheckMark = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 1px;
`;

const SDGothicNeoBold4810 = styled.div`
  ${SfprodisplayBoldBlack18px}
  width: 554px;
  min-height: 27px;
  margin-left: 10px;
  line-height: 27px;
  white-space: nowrap;
`;

const Span11 = styled.span`
  ${ApplesdgothicneoBoldBlack18px}
  letter-spacing: -0.60px;
`;

const FlexRow3 = styled.div`
  height: 27px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  min-width: 588px;
`;

const SDGothicNeoBold4811 = styled.div`
  ${ApplesdgothicneoBoldBlack18px}
  width: 554px;
  min-height: 27px;
  margin-left: 10px;
  letter-spacing: -0.6px;
  line-height: 27px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  height: 500px;
  margin-top: 258px;
  display: flex;
  padding: 218px 120px;
  align-items: flex-start;
  min-width: 1440px;
  background-size: 100% 100%;
`;

const SDGothicNeoBold4812 = styled.div`
  ${SfprodisplayBoldBlack48px}
  width: 1200px;
  min-height: 62px;
  margin-top: 199px;
  text-align: center;
  letter-spacing: -1px;
  line-height: 62px;
  white-space: nowrap;
`;

const SDGothicNeoBold4813 = styled.div`
  ${SfprodisplayBoldBlack22px}
  width: 1200px;
  min-height: 67px;
  margin-top: 40px;
  text-align: center;
  line-height: 33px;
`;

const PhotoRoundContainer = styled.div`
  margin-top: 101px;
  display: flex;
  align-items: flex-start;
  min-width: 640px;
`;

const HJPhotoRound = styled.img`
  width: 130px;
  height: 130px;
`;

const SHPhotoRound = styled.img`
  width: 130px;
  height: 130px;
  margin-left: 380px;
`;

const SdGothicNeoboldContainer = styled.div`
  ${ApplesdgothicneoBoldBlack24px}
  height: 36px;
  margin-top: 23px;
  display: flex;
  align-items: flex-start;
  min-width: 792px;
`;

const SDGothicNeoBold4814 = styled.div`
  width: 282px;
  min-height: 36px;
  text-align: center;
  letter-spacing: -1px;
  line-height: 36px;
  white-space: nowrap;
`;

const SDGothicNeoBold4815 = styled.div`
  width: 282px;
  min-height: 36px;
  margin-left: 228px;
  text-align: center;
  letter-spacing: -1px;
  line-height: 36px;
  white-space: nowrap;
`;

const SdGothicNeoboldContainer1 = styled.div`
  ${SfprodisplayRegularNormalBlack16px}
  height: 24px;
  margin-top: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 792px;
`;

const SdGothicNeoboldContainer2 = styled.div`
  ${SfprodisplayRegularNormalGunsmoke16}
  height: 24px;
  margin-top: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 792px;
`;

const SDGothicNeoBold4816 = styled.div`
  width: 282px;
  min-height: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const SDGothicNeoBold4817 = styled.div`
  width: 282px;
  min-height: 24px;
  margin-left: 228px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Footer = styled.img`
  width: 1440px;
  height: 302px;
  margin-top: 221px;
`;

export default MainTopPagePC;
