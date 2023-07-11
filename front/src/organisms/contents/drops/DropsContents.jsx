import { useState } from 'react';
import {
  DropsTableHeader,
  BorderBottom,
  AirDropWrap,
  AirDropContent,
  AirDropHeader,
  AirDropTokenTitle,
  AirDropContentTop,
  AirDropContentBottom,
} from './styled';
import { ButtonStyle } from '../governance/styled';
import { SectionWrap } from '../exchangeSwap/styled';
import { DropBox, Search, Button, Box } from '../../components';

export const DropsContents = () => {
  const tx =
    '0x99c0fe94c0d868c01d3545b4f1f3e9bf63911c65272a0d7ada40f25516e85a14';
  const [dropbox, setDropbox] = useState(false);
  const list = null;
  const statusText = {
    exectued: '진행 예정',
    progress: '진행중',
    canceled: '종료',
  };
  return (
    <SectionWrap>
      <DropsTableHeader>
        <BorderBottom>
          <Search placeholder={'토큰명, 심볼 검색'} />
          <ButtonStyle
            onClick={() => {
              setDropbox(!dropbox);
            }}
          >
            {list ? statusText[list] : '전체'} {dropbox ? '▲' : '▼'}
          </ButtonStyle>
        </BorderBottom>
        {dropbox && <DropBox statusText={statusText} />}
      </DropsTableHeader>
      <AirDropWrap>
        <AirDropContent>
          <AirDropHeader backgroundIMG={'/images/airdrop/mangle.png'}>
            <AirDropTokenTitle>
              <img src='/images/airdrop/mangle.png' />
              <h1>HWT 에어드랍</h1>
            </AirDropTokenTitle>
            <Button colors='blue' width='30px' height='30px'>
              ▲
            </Button>
          </AirDropHeader>
          <AirDropContentTop>
            <p>내 에어드랍 수량</p>
            <p>100 HWT</p>
            <p>보상 수령 가능일 : 2023.03.16 09:00</p>
            <Button colors='greyBox' width='300px' height='55px' before='100%'>
              <h1>참여 방법</h1>
            </Button>
          </AirDropContentTop>
          <AirDropContentBottom>
            <div>
              <p>
                에어드랍 기간 : <strong>2023. 02. 14 ~ 2023. 02. 20</strong>
              </p>
              <p>
                총 에어드랍 수량 : <strong>100,000.00000000 oMEGA</strong>
              </p>
            </div>
            <div>
              <Button
                colors='blueBox'
                width='120px'
                height='30px'
                before='100%'
                to={`https://arbiscan.io/tx/${tx}`}
              >
                토큰 컨트랙트
              </Button>
            </div>
          </AirDropContentBottom>
          {/* <div>
            드랍스 페어 살펴보기
            <Box colors='blueBox'></Box>
            <Box colors='blueBox'></Box>
          </div> */}
        </AirDropContent>
      </AirDropWrap>
    </SectionWrap>
  );
};
