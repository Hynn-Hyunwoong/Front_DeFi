import { useEffect, useState } from 'react';
import { Xbutton } from '../../components';
import {
  ListTop,
  InputBox,
  SearchWrap,
  ListWrap,
  ListHeader,
  List,
} from './styled';
import { useRecoilValue } from 'recoil';
import { tokenPricesState } from '../../store';
import { BigNumber, ethers } from 'ethers';
import TokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';

let tokenABI = TokenABI.abi;
const ASDTokenAddress = process.env.REACT_APP_ASD_TOKEN_ADDRESS;
const ARBTokenAddress = process.env.REACT_APP_ARB_TOKEN_ADDRESS;
const USDTTokenAddress = process.env.REACT_APP_USDT_TOKEN_ADDRESS;
const ETHTokenAddress = process.env.REACT_APP_ETH_TOKEN_ADDRESS;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const ASDcontract = new ethers.Contract(ASDTokenAddress, tokenABI, signer);
const ARBcontract = new ethers.Contract(ARBTokenAddress, tokenABI, signer);
const USDTcontract = new ethers.Contract(USDTTokenAddress, tokenABI, signer);
const ETHcontract = new ethers.Contract(ETHTokenAddress, tokenABI, signer);
// const test1 = await ASDcontract.balanceOf(signer.getAddress());
// const ASD = ethers.utils.formatEther(test1);
// const test3 = await ARBcontract.balanceOf(signer.getAddress());
// const ARB = ethers.utils.formatEther(test3);
// const test5 = await USDTcontract.balanceOf(signer.getAddress());
// const USDT = ethers.utils.formatEther(test5);
// const test7 = await ETHcontract.balanceOf(signer.getAddress());
// const ETH = ethers.utils.formatEther(test7);

export const PopupTokenList = ({ setToken, setTokenList }) => {
  const prices = useRecoilValue(tokenPricesState);
  const [ASD, setASD] = useState('0');
  const [ARB, setARB] = useState('0');
  const [USDT, setUSDT] = useState('0');
  const [ETH, setETH] = useState('0');

  useEffect(() => {
    const fetchData = async () => {
      const test1 = await ASDcontract.balanceOf(signer.getAddress());
      const ASD = ethers.utils.formatEther(test1);
      setASD(ASD);
      const test3 = await ARBcontract.balanceOf(signer.getAddress());
      const ARB = ethers.utils.formatEther(test3);
      setARB(ARB);
      const test5 = await USDTcontract.balanceOf(signer.getAddress());
      const USDT = ethers.utils.formatEther(test5);
      setUSDT(USDT);
      const test7 = await ETHcontract.balanceOf(signer.getAddress());
      const ETH = ethers.utils.formatEther(test7);
      setETH(ETH);
    };

    fetchData();
  }, []);

  const tokenData = [
    {
      logo: 'solar',
      name: '솔라스왑',
      symbol: 'ASD',
      price: prices.ASD,
      balance: ASD,
      evaluation: (ASD * prices.ASD).toFixed(2),
    },
    {
      logo: 'ethereum',
      name: '이더리움',
      symbol: 'ETH',
      price: prices.ETH,
      balance: ETH,
      evaluation: (ETH * prices.ETH).toFixed(2),
    },
    {
      logo: 'tether',
      name: '테더',
      symbol: 'USDT',
      price: prices.USDT,
      balance: USDT,
      evaluation: (USDT * prices.USDT).toFixed(2),
    },
    {
      logo: 'arbitrum',
      name: '아비트럼',
      symbol: 'ARB',
      price: prices.ARB,
      balance: ARB,
      evaluation: (ARB * prices.ARB).toFixed(2),
    },
  ];

  const closePopup = () => {
    setTokenList(false);
  };
  // useEffect(async () => {
  //   (() => {})();
  // }, []);

  const tokenListMap = tokenData.map((v) => {
    return (
      <List
        key={v.symbol}
        onClick={() => {
          setToken(v.symbol);
          setTokenList(false);
        }}
      >
        <div className='token'>
          <img src={`/images/logo-${v.logo}.png`} alt='tokenLogo' />
          <div>
            <p>{`${v.name}`}</p>
            <p>{`${v.symbol}`}</p>
          </div>
        </div>
        <div className='price'>$ {v.price}</div>
        <div className='balance'>
          <div>
            <p>{Number(v.balance).toFixed(4)}</p>
            <p>$ {v.evaluation}</p>
          </div>
        </div>
      </List>
    );
  });

  return (
    <div>
      <ListTop>
        <h3>토큰을 선택해주세요</h3>
        <Xbutton onClick={closePopup} />
      </ListTop>
      <SearchWrap>
        <InputBox type='text' placeholder='코인명, 심볼, 토큰주소 검색' />
      </SearchWrap>
      <ListWrap>
        <ListHeader>
          <p className='token'>토큰</p>
          <p className='price'>가격</p>
          <p className='balance'>보유/평가금액</p>
        </ListHeader>
        <ul>{tokenListMap}</ul>
      </ListWrap>
    </div>
  );
};
