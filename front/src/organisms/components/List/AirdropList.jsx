import { useState } from 'react';
import {
  AirDropContent,
  AirDropHeader,
  AirDropTokenTitle,
  AirDropContentTop,
  AirDropContentBottom,
  RewardDate,
  BalanceText,
} from './styled';
import { Button } from '../button/Button';

export const AirDropList = ({ airdropData }) => {
  const [popupStates, setPopupStates] = useState(
    Array(airdropData.length).fill(false)
  );

  const togglePopup = (index) => {
    setPopupStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  const airdropList = airdropData.map((v, index) => (
    <AirDropContent key={v.symbol}>
      <AirDropHeader backgroundIMG={`/images/airdrop/${v.img}.png`}>
        <AirDropTokenTitle>
          <img src={`/images/airdrop/${v.img}.png`} />
          <h1>{v.symbol} 에어드랍</h1>
        </AirDropTokenTitle>
        <Button
          colors='blue'
          width='30px'
          height='30px'
          onClick={() => {
            togglePopup(index);
          }}
        >
          {popupStates[index] ? '▲' : '▼'}
        </Button>
      </AirDropHeader>
      {popupStates[index] && (
        <div>
          <AirDropContentTop>
            <h1>내 에어드랍 수량</h1>
            <BalanceText>
              {v.dropAmount} <span>{v.symbol}</span>
            </BalanceText>
            <RewardDate>
              보상 수령 가능일 : <strong>{v.rewardAcccess}</strong>
            </RewardDate>
            <Button colors='greyBox' width='300px' height='55px' before='100%'>
              <h1>참여 방법</h1>
            </Button>
          </AirDropContentTop>
          <AirDropContentBottom>
            <div className='airDrop'>
              <div>
                <p>에어드랍 기간</p>
                <strong>
                  {v.startDate} ~ {v.endDate}
                </strong>
              </div>
              <div>
                <p>총 에어드랍 수량</p>
                <strong>
                  {v.mintAmount} {v.symbol}
                </strong>
              </div>
            </div>
            <div>
              <Button
                colors='blueBox'
                width='150px'
                height='30px'
                before='100%'
                to={`https://arbiscan.io/tx/${v.tx}`}
              >
                토큰 컨트랙트
              </Button>
            </div>
          </AirDropContentBottom>
        </div>
      )}
    </AirDropContent>
  ));
  return airdropList;
};
