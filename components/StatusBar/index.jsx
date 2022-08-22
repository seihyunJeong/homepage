import React from "react";
import styled from "styled-components";


function StatusBar(props) {
  const { notch, text1 } = props;

  return (
    <StatusBar1>
      <Notch src={notch} />
      <Text1>{text1}</Text1>
      <RightSide src="/img/right-side@2x.svg" />
    </StatusBar1>
  );
}

const StatusBar1 = styled.div`
  width: 375px;
  height: 44px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Notch = styled.img`
  width: 1px;
  height: 1px;
  margin-left: -1008px;
  align-self: flex-end;
  margin-bottom: -2994px;
`;

const Text1 = styled.div`
  width: 54px;
  min-height: 20px;
  margin-left: 1028px;
  margin-top: 2px;
  font-family: var(--font-family-sf_pro_text-semibold);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xxs);
  text-align: center;
  letter-spacing: -0.5px;
  line-height: 20px;
  white-space: nowrap;
`;

const RightSide = styled.img`
  width: 67px;
  height: 11px;
  margin-left: 217px;
  margin-top: 2px;
`;

export default StatusBar;
