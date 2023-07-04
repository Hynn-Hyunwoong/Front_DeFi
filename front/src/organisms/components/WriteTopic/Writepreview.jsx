import styled from 'styled-components';

const res = {
  mobile: '@media (max-width: 768px)',
};

export const WritePreviewWrap = styled.div`
  display: center;
  width: 900px;
  margin: 100px auto;
  padding: 10px auto;

  ${res.mobile} {
    width: 100%;
    margin: 50px auto;
    padding: 10px;
  }
`;

export const BackspaceWrap = styled.div`
  width: 100%;
  border: 1px solid #9da7b0;
  display: flex;
  justify-content: start;
`;

export const TokenStateWrap = styled.div`
  width: 100%;
  height: 87px;
  border: 1px solid #caccd2;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #f0f9d8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${res.mobile} {
    flex-direction: column;
    height: auto;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
`;

export const TokenLeftWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 20px;
  font-size: 12px;
  weight: 400;
  line-height: 1.738;
  letter-spacing: -0.6px;
  color: #767c83;

  ${res.mobile} {
    width: 50%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TokenRightWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  weight: 400;
  line-height: 1.738;
  letter-spacing: -0.6px;
  color: #767c83;

  ${res.mobile} {
    width: 50%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TokenStateAlignLeft = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.738;
  letter-spacing: -0.6px;
`;
export const TokenCurrentValue = styled.div`
  right: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 2.027;
  letter-spacing: -0.6px;
  color: #76953e;
`;

export const TopicH1 = styled.h1`
  font-size: 23.3px;
  font-weight: 700;
  line-height: 3.33;
  letter-spacing: -0.6px;
  color: #000000;
`;

export const Topicspan = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.738;
  letter-spacing: -0.6px;
  margin: 0 20px 0 0;
  color: #767c83;
`;

export const TokenLine = styled.div`
  border-left: 2px solid #caccd2;
  height: 50px;
  margin: 25px;
  width: 0;

  ${res.mobile} {
    display: none;
  }
`;

export const WriteFormWrap = styled.div`
  width: 100%;
  height: 264px;
  border: 1px solid #9da7b0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${res.mobile} {
    width: 100%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const WriteInputTitle = styled.input`
  border: none;
  width: 95%;
  height: 25%;
  border-bottom: 1px solid #9da7b0;
  background-color: #f7f8fa;
  font-size: 14px;

  ${res.mobile} {
    width: 95%;
    margin: 10px auto;
  }
`;

export const WriteInputBody = styled.input`
  border: none;
  width: 95%;
  height: 70%;
  background-color: #f7f8fa;
  font-size: 12px;

  ${res.mobile} {
    width: 95%;
    margin: 10px auto;
  }
`;
