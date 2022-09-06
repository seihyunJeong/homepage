
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MainTopPagePC from "./components/MainTopPagePC";
import MainTopPageMobile from "./components/MainTopPageMobile";
import MainTopPagePC2 from "./components/MainTopPagePC2";
import MainTopPagePC4 from "./components/MainTopPagePC4";

function App() {

  console.log(window.innerWidth)
  var windowWidth = window.innerWidth
  return (
    <Router>
      <Switch>
        <Route path="/main-top-page-pc-1">
          <MainTopPagePC {...mainTopPagePCData} />
        </Route>
        <Route path="/main-top-page-mobile">
          <MainTopPageMobile {...mainTopPageMobileData} />
        </Route>
        <Route path="/main-top-pagepc">
          <MainTopPagePC2 {...mainTopPagePC2Data} />
        </Route>
        <Route path="/:path(|full-project)">
          {windowWidth >= 1920?
            <MainTopPagePC2 {...mainTopPagePC2Data} />
          : ( windowWidth >= 1440?
              <MainTopPagePC {...mainTopPagePCData} />
              :<MainTopPageMobile {...mainTopPageMobileData} />
          )
          }
          {/*<MainTopPagePC4 {...mainTopPagePC4Data} />*/}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const view1Data = {
    children: "채용",
};

const view2Data = {
    children: "문의",
};

const gNB221Data = {
    view1Props: view1Data,
    view2Props: view2Data,
};

const mainTopPagePCData = {
    image1: "/img/-image@1x.png",
    sdGothicNeoBold481: <React.Fragment>더 이상 내게 맞는<br />할인 혜택을 찾기 위해<br />고민하지 말아요</React.Fragment>,
    sdGothicNeoBold482: <React.Fragment>왜 내가 사고 싶은 제품은<br />항상 할인하고 나서 알게 될까?</React.Fragment>,
    sdGothicNeoBold483: <React.Fragment>에어팟도 사고 싶고, 예쁜 옷도 사고 싶고, 맛있는 것도 먹고 싶은데<br />내가 사고 싶은 것들은 맨날 할인이 끝나고 나서야 알게 되던데...</React.Fragment>,
    image2: "/img/-image-2@1x.png",
    sdGothicNeoBold484: <React.Fragment>다들 할인을 한다는데<br />여기가 제일 싼 게 맞을까?</React.Fragment>,
    sdGothicNeoBold485: <React.Fragment>찾다 보니 검색창은 여러 개 띄워져 있고 계산은 복잡하기만 한데.<br />여기서 사는 게 제일 싼 건지, 저기서 사는 게 제일 싼 건지, 발품 좀 그만 팔고 싶은데...</React.Fragment>,
    image3: "/img/-image-1@1x.png",
    sdGothicNeoBold486: <React.Fragment>왜 할인 혜택이 있다면서<br />나는 적용받지 못할까?</React.Fragment>,
    sdGothicNeoBold487: "내 지갑 속에 숨어있는 많은 카드들, 그리고 내가 가입한 멤버십, 매일매일 푸시로 뜨는 쿠폰들, 하지만 내가 사고 싶은 물건은 언제나 안되던데...",
    image4: "/img/-image-3@1x.png",
    sdGothicNeoBold488: "Project Probe",
    spanText1: "Probe",
    spanText2: "는 한 번에 찾아주고 계산해 주고 알려줄 수 있어요",
    sdGothicNeoBold489: "Project Probe",
    sdGothicNeoBold4810: <React.Fragment>플랫폼에 숨어있는 할인 혜택을 찾고<br />개개인에 맞춰서 보여드릴게요.</React.Fragment>,
    spanText3: "100",
    spanText4: "만 개 상품의 할인 혜택을 찾아드려요",
    sdGothicNeoBold4811: "실시간 상품 혜택을 추적해서 보여드려요",
    sdGothicNeoBold4812: "내 지갑 사정에 맞춘 혜택가 검색 결과를 알려드려요",
    overlapGroup1: "/img/-image-4@1x.png",
    spanText5: "POSTLAB",
    spanText6: "이 당신의 합리적인 소비를 도울게요",
    sdGothicNeoBold4813: "About us",
    spanText7: "POSTLAB",
    spanText8: <React.Fragment>은 커머스를 시작으로 디지털 시대에 다양한 분야에서 발생하는 불필요한 단순노동과<br />시간 소모를 없애고 혁신적인 서비스와 기술을 통해 여러분이 당연히 누려야 할 가치를 전달하고자 합니다.</React.Fragment>,
    hj_Photo_Round: "/img/hj-photo-round@1x.png",
    sh_Photo_Round: "/img/sh-photo-round-1@1x.png",
    sdGothicNeoBold4814: "권형준",
    sdGothicNeoBold4815: "정세현",
    sdGothicNeoBold4816: "CEO / Business Development",
    sdGothicNeoBold4817: "CTO / Software Engineer",
    sdGothicNeoBold4818: "Life is Cozy!",
    sdGothicNeoBold4819: "Life is Cool!",
    footer: "/img/-footer@1x.png",
    gNB22Props: gNB221Data,
};

const statusBarData = {
    notch: "/img/notch@2x.png",
    text1: "9:41",
};

const footerData = {
    sdGothicNeoBold161: "포스트랩",
    spanText1: "서울시 강남구 테헤란로 ",
    spanText2: "8",
    spanText3: "길 ",
    spanText4: "21",
    spanText5: " 화인강남빌딩 ",
    spanText6: "10",
    spanText7: "층 ",
    spanText8: "B04",
    spanText9: "호",
    sdGothicNeoBold162: "contact@postlabs.io",
    sdGothicNeoBold163: "© 2022. All rights reserved by POSTLAB.",
};

const mainTopPageMobileData = {
    overlapGroup: "/img/image-1-1@1x.png",
    sdGothicNeoBold481: <React.Fragment>더 이상 내게 맞는<br />할인 혜택을 찾기 위해<br />고민하지 말아요</React.Fragment>,
    image2: "/img/image-2-1@2x.png",
    sdGothicNeoBold482: <React.Fragment>왜 내가 사고 싶은 제품은<br />항상 할인하고 나서 알게 될까?</React.Fragment>,
    sdGothicNeoBold483: "에어팟도 사고 싶고, 예쁜 옷도 사고 싶고, 맛있는 것도 먹고 싶은데 내가 사고 싶은 것들은 맨날 할인이 끝나고 나서야 알게 되던데...",
    image3: "/img/image-3-1@2x.png",
    sdGothicNeoBold484: <React.Fragment>왜 할인 혜택이 있다면서<br />나는 적용받지 못할까?</React.Fragment>,
    sdGothicNeoBold485: "내 지갑 속에 숨어있는 많은 카드들, 그리고 내가 가입한 멤버십, 매일매일 푸시로 뜨는 쿠폰들, 하지만 내가 사고 싶은 물건은 언제나 안되던데...",
    image4: "/img/image-4-1@2x.png",
    sdGothicNeoBold486: <React.Fragment>다들 할인을 한다는데<br />여기가 제일 싼 게 맞을까?</React.Fragment>,
    sdGothicNeoBold487: "찾다 보니 검색창은 여러 개 띄워져 있고 계산은 복잡하기만 한데. 여기서 사는 게 제일 싼 건지, 저기서 사는 게 제일 싼 건지, 발품 좀 그만 팔고 싶은데...",
    sdGothicNeoBold488: "Project Probe",
    spanText1: "Probe",
    spanText2: <React.Fragment>는 한 번에 찾아주고<br />계산해 주고 알려줄 수 있어요</React.Fragment>,
    sdGothicNeoBold489: "Project Probe",
    sdGothicNeoBold4810: "플랫폼에 숨어있는 할인 혜택을 찾고 개개인에 맞춰서 보여드릴게요.",
    spanText3: "100",
    spanText4: "만 개 상품의 할인 혜택을 찾아드려요",
    sdGothicNeoBold4811: "실시간 상품 혜택을 추적해서 보여드려요",
    sdGothicNeoBold4812: "내 지갑 사정에 맞춘 혜택가 검색 결과를 알려드려요",
    overlapGroup1: "/img/image-5-1@2x.png",
    spanText5: "POSTLAB",
    spanText6: <React.Fragment>이 당신의 합리적인<br />소비를 도울게요</React.Fragment>,
    sdGothicNeoBold4813: "About us",
    sdGothicNeoBold4814: "POSTLAB은 커머스를 시작으로 디지털 시대에 다양한 분야에서 발생하는 불필요한 단순노동과 시간 소모를 없애고 혁신적인 서비스와 기술을 통해 여러분이 당연히 누려야 할 가치를 전달하고자 합니다.",
    hj_Photo_Round: "/img/hj-photo-round@1x.png",
    sh_Photo_Round: "/img/sh-photo-round-1@1x.png",
    sdGothicNeoBold4815: "권형준",
    sdGothicNeoBold4816: "CEO / Business Development",
    sdGothicNeoBold4817: "Life is Cozy!",
    sdGothicNeoBold4818: "정세현",
    sdGothicNeoBold4819: "CTO / Software Engineer",
    sdGothicNeoBold4820: "Life is Cool!",
    statusBarProps: statusBarData,
    footerProps: footerData,
};

const view3Data = {
    children: "채용",
};

const view4Data = {
    children: "문의",
};

const gNB222Data = {
    className: "gnb-1",
    view1Props: view3Data,
    view2Props: view4Data,
};

const mainTopPagePC2Data = {
    overlapGroup: "/img/image-1@1x.png",
    sdGothicNeoBold481: <React.Fragment>더 이상 내게 맞는<br />할인 혜택을 찾기 위해<br />고민하지 말아요</React.Fragment>,
    sdGothicNeoBold482: <React.Fragment>왜 내가 사고 싶은 제품은<br />항상 할인하고 나서 알게 될까?</React.Fragment>,
    sdGothicNeoBold483: <React.Fragment>에어팟도 사고 싶고, 예쁜 옷도 사고 싶고, 맛있는 것도 먹고 싶은데<br />내가 사고 싶은 것들은 맨날 할인이 끝나고 나서야 알게 되던데...</React.Fragment>,
    image3: "/img/image-3@1x.png",
    sdGothicNeoBold484: <React.Fragment>다들 할인을 한다는데<br />여기가 제일 싼 게 맞을까?</React.Fragment>,
    sdGothicNeoBold485: <React.Fragment>찾다 보니 검색창은 여러 개 띄워져 있고 계산은 복잡하기만 한데.<br />여기서 사는 게 제일 싼 건지, 저기서 사는 게 제일 싼 건지, 발품 좀 그만 팔고 싶은데...</React.Fragment>,
    image2: "/img/image-2@1x.png",
    sdGothicNeoBold486: <React.Fragment>왜 할인 혜택이 있다면서<br />나는 적용받지 못할까?</React.Fragment>,
    sdGothicNeoBold487: "내 지갑 속에 숨어있는 많은 카드들, 그리고 내가 가입한 멤버십, 매일매일 푸시로 뜨는 쿠폰들, 하지만 내가 사고 싶은 물건은 언제나 안되던데...",
    image4: "/img/image-4@1x.png",
    sdGothicNeoBold488: "Project Probe",
    spanText1: "Probe",
    spanText2: "는 한 번에 찾아주고 계산해 주고 알려줄 수 있어요",
    sdGothicNeoBold489: "Project Probe",
    sdGothicNeoBold4810: <React.Fragment>플랫폼에 숨어있는 할인 혜택을 찾고<br />개개인에 맞춰서 보여드릴게요.</React.Fragment>,
    spanText3: "100",
    spanText4: "만 개 상품의 할인 혜택을 찾아드려요",
    sdGothicNeoBold4811: "실시간 상품 혜택을 추적해서 보여드려요",
    sdGothicNeoBold4812: "내 지갑 사정에 맞춘 혜택가 검색 결과를 알려드려요",
    overlapGroup1: "/img/image-5@1x.png",
    spanText5: "POSTLAB",
    spanText6: "이 당신의 합리적인 소비를 도울게요",
    sdGothicNeoBold4813: "About us",
    spanText7: "POSTLAB",
    spanText8: <React.Fragment>은 커머스를 시작으로 디지털 시대에 다양한 분야에서 발생하는 불필요한 단순노동과<br />시간 소모를 없애고 혁신적인 서비스와 기술을 통해 여러분이 당연히 누려야 할 가치를 전달하고자 합니다.</React.Fragment>,
    hj_Photo_Round: "/img/hj-photo-round@1x.png",
    sh_Photo_Round: "/img/sh-photo-round-1@1x.png",
    sdGothicNeoBold4814: "권형준",
    sdGothicNeoBold4815: "정세현",
    sdGothicNeoBold4816: "CEO / Business Development",
    sdGothicNeoBold4817: "CTO / Software Engineer",
    sdGothicNeoBold4818: "Life is Cozy!",
    sdGothicNeoBold4819: "Life is Cool!",
    footer: "/img/-footer@1x.png",
    footerBig: footerData,
    gNB22Props: gNB222Data,
};

const view5Data = {
    children: "채용",
};

const view6Data = {
    children: "문의",
};

const gNB223Data = {
    className: "gnb-2",
    view1Props: view5Data,
    view2Props: view6Data,
};

const mainTopPagePC4Data = {
    sdGothicNeoBold481: <React.Fragment>더 이상 내게 맞는<br />할인 혜택을 찾기 위해<br />고민하지 말아요</React.Fragment>,
    sdGothicNeoBold482: <React.Fragment>왜 내가 사고 싶은 제품은<br />항상 할인하고 나서 알게 될까?</React.Fragment>,
    sdGothicNeoBold483: <React.Fragment>에어팟도 사고 싶고, 예쁜 옷도 사고 싶고, 맛있는 것도 먹고 싶은데<br />내가 사고 싶은 것들은 맨날 할인이 끝나고 나서야 알게 되던데...</React.Fragment>,
    sdGothicNeoBold484: <React.Fragment>다들 할인을 한다는데<br />여기가 제일 싼 게 맞을까?</React.Fragment>,
    sdGothicNeoBold485: <React.Fragment>찾다 보니 검색창은 여러 개 띄워져 있고 계산은 복잡하기만 한데.<br />여기서 사는 게 제일 싼 건지, 저기서 사는 게 제일 싼 건지, 발품 좀 그만 팔고 싶은데...</React.Fragment>,
    sdGothicNeoBold486: <React.Fragment>왜 할인 혜택이 있다면서<br />나는 적용받지 못할까?</React.Fragment>,
    sdGothicNeoBold487: "내 지갑 속에 숨어있는 많은 카드들, 그리고 내가 가입한 멤버십, 매일매일 푸시로 뜨는 쿠폰들, 하지만 내가 사고 싶은 물건은 언제나 안되던데...",
    sdGothicNeoBold488: "Project Probe",
    spanText1: "Probe",
    spanText2: "는 한 번에 찾아주고 계산해 주고 알려줄 수 있어요",
    sdGothicNeoBold489: "Project Probe",
    sdGothicNeoBold4810: <React.Fragment>플랫폼에 숨어있는 할인 혜택을 찾고<br />개개인에 맞춰서 보여드릴게요.</React.Fragment>,
    spanText3: "100",
    spanText4: "만 개 상품의 할인 혜택을 찾아드려요",
    sdGothicNeoBold4811: "실시간 상품 혜택을 추적해서 보여드려요",
    sdGothicNeoBold4812: "내 지갑 사정에 맞춘 혜택가 검색 결과를 알려드려요",
    spanText5: "POSTLAB",
    spanText6: "이 당신의 합리적인 소비를 도울게요",
    sdGothicNeoBold4813: "About us",
    spanText7: "POSTLAB",
    spanText8: <React.Fragment>은 커머스를 시작으로 디지털 시대에 다양한 분야에서 발생하는 불필요한 단순노동과<br />시간 소모를 없애고 혁신적인 서비스와 기술을 통해 여러분이 당연히 누려야 할 가치를 전달하고자 합니다.</React.Fragment>,
    hj_Photo_Round: "/img/hj-photo-round-1@1x.png",
    sh_Photo_Round: "/img/sh-photo-round-1@1x.png",
    sdGothicNeoBold4814: "권형준",
    sdGothicNeoBold4815: "정세현",
    sdGothicNeoBold4816: "CEO / Business Development",
    sdGothicNeoBold4817: "CTO / Software Engineer",
    sdGothicNeoBold4818: "Life is Cozy!",
    sdGothicNeoBold4819: "Life is Cool!",
    footer: "/img/-footer@1x.png",
    gNB2Props: gNB223Data,
};

