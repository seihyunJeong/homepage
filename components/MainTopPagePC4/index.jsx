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
import "./MainTopPagePC4.css";

function MainTopPagePC4(props) {
  const {
    sdGothicNeoBold481,
    sdGothicNeoBold482,
    sdGothicNeoBold483,
    sdGothicNeoBold484,
    sdGothicNeoBold485,
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
    gNB2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="full-project screen">
        <OverlapGroup1>
          <GNB22 className={gNB2Props.className} view1Props={gNB2Props.view1Props} view2Props={gNB2Props.view2Props} />
          <SDGothicNeoBold48>{sdGothicNeoBold481}</SDGothicNeoBold48>
        </OverlapGroup1>
        <FlexRow>
          <FlexCol>
            <SDGothicNeoBold481>{sdGothicNeoBold482}</SDGothicNeoBold481>
            <SDGothicNeoBold482>{sdGothicNeoBold483}</SDGothicNeoBold482>
            <Image src="/img/-image-7@1x.svg" />
            <SDGothicNeoBold483>{sdGothicNeoBold484}</SDGothicNeoBold483>
            <SDGothicNeoBold484>{sdGothicNeoBold485}</SDGothicNeoBold484>
          </FlexCol>
          <FlexCol1>
            <Image1 src="/img/-image-6@1x.svg" />
            <SDGothicNeoBold485>{sdGothicNeoBold486}</SDGothicNeoBold485>
            <SDGothicNeoBold484>{sdGothicNeoBold487}</SDGothicNeoBold484>
            <Image2 src="/img/-image-8@1x.svg" />
          </FlexCol1>
        </FlexRow>
        <FlexCol2>
          <SDGothicNeoBold486>{sdGothicNeoBold488}</SDGothicNeoBold486>
          <SDGothicNeoBold487>
            <Span012>{spanText1}</Span012>
            <Span112>{spanText2}</Span112>
          </SDGothicNeoBold487>
          <FlexRow1>
            <MockUp src="/img/mock-up-1@1x.svg" />
            <FlexCol3>
              <SDGothicNeoBold488>{sdGothicNeoBold489}</SDGothicNeoBold488>
              <SDGothicNeoBold489>{sdGothicNeoBold4810}</SDGothicNeoBold489>
              <FlexRow2>
                <IconCheckMark src="/img/check-24@2x.svg" />
                <SDGothicNeoBold4810>
                  <Span013>{spanText3}</Span013>
                  <Span113>{spanText4}</Span113>
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
          <OverlapGroup>
            <SDGothicNeoBold486>
              <span className="sfprodisplay-bold-black-48px">{spanText5}</span>
              <span className="applesdgothicneo-bold-black-48px">{spanText6}</span>
            </SDGothicNeoBold486>
          </OverlapGroup>
          <SDGothicNeoBold4812>{sdGothicNeoBold4813}</SDGothicNeoBold4812>
          <SDGothicNeoBold4813>
            <Span015>{spanText7}</Span015>
            <Span115>{spanText8}</Span115>
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

const OverlapGroup1 = styled.div`
  width: 1920px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  background-image: url(/img/image-1@1x.png);
  background-size: 100% 100%;
`;

const SDGothicNeoBold48 = styled.div`
  ${ApplesdgothicneoBoldBlack48px}
  width: 1200px;
  min-height: 186px;
  margin-top: 146px;
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

const Image = styled.img`
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

const Image1 = styled.img`
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

const Image2 = styled.img`
  width: 588px;
  height: 340px;
  margin-top: 279px;
`;

const FlexCol2 = styled.div`
  width: 1920px;
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

const Span012 = styled.span`
  ${SfprodisplayBoldBlack40px}
  letter-spacing: 0;
`;

const Span013 = styled.span`
  ${SfprodisplayBoldBlack18px}
  letter-spacing: 0;
`;

const Span015 = styled.span`
  ${SfprodisplayBoldBlack22px}
  letter-spacing: 0;
`;

const Span112 = styled.span`
  ${ApplesdgothicneoBoldBlack40px}
  letter-spacing: -1.00px;
`;

const Span115 = styled.span`
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

const Span113 = styled.span`
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

const OverlapGroup = styled.div`
  height: 500px;
  margin-top: 258px;
  display: flex;
  padding: 218px 360px;
  align-items: flex-start;
  min-width: 1920px;
  background-image: url(/img/image-5@1x.png);
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
  width: 1920px;
  height: 302px;
  margin-top: 221px;
`;

export default MainTopPagePC4;
