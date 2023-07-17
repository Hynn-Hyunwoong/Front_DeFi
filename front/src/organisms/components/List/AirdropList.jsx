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
import { ethers } from 'ethers';
import AirDropABI from '../../../ABI/contracts/airdrop.sol/Airdrop.json';

export const AirDropList = ({ airdropData }) => {
  const [popupStates, setPopupStates] = useState(
    Array(airdropData.length).fill(false),
  );

  const togglePopup = (index) => {
    setPopupStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  const airdropLaunch = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const acc = await signer.getAddress();
    const AirdropAddress = process.env.REACT_APP_AIRDROP_ADDRESS;
    const AirdropContract = new ethers.Contract(
      AirdropAddress,
      AirDropABI.abi,
      signer,
    );

    let recipients = [acc];
    let amounts = [ethers.utils.parseUnits('100.0', 18)];

    try {
      const tx = await AirdropContract.airdrop(recipients, amounts, {
        gasLimit: 800000,
      });
      const receipt = await tx.wait();
      alert(
        `에어드랍이 완료되었습니다. 세부사항은 아래의 트랜잭션을 확인해주세요.${receipt}`,
      );
      console.log(receipt);
    } catch (e) {
      if (e.code === 'CALL_EXCEPTION') {
        alert('이미 수령한 지갑입니다.');
      } else {
        alert(
          '알 수 없는 오류가 발생했습니다. 시간을 두고 다시 시도해주세요 문제가 지속되면 관리자에게 문의하세요',
        );
        console.log(e);
      }
    }
  };

  const airdropList = airdropData.map((v, index) => (
    <AirDropContent key={v.symbol}>
      <AirDropHeader backgroundIMG={`/images/airdrop/${v.img}.png`}>
        <AirDropTokenTitle>
          <img src={`/images/airdrop/${v.img}.png`} />
          <h1>{v.symbol} 에어드랍</h1>
        </AirDropTokenTitle>
        <Button
          colors="blue"
          width="30px"
          height="30px"
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
              {v.dropAmount} <span>ASD</span>
            </BalanceText>
            <RewardDate>
              보상 수령 가능일 : <strong>{v.rewardAcccess}</strong>
            </RewardDate>
            <Button
              colors="green"
              width="250px"
              height="55px"
              before="100%"
              onClick={airdropLaunch}
            >
              <h1>보상 수령</h1>
            </Button>
          </AirDropContentTop>
          <AirDropContentBottom>
            <div className="airDrop">
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
                colors="blueBox"
                width="150px"
                height="30px"
                before="100%"
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
