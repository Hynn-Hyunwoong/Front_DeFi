import { useState } from 'react';
import { DropsTableHeader, BorderBottom, AirDropWrap } from './styled';
import { ButtonStyle } from '../governance/styled';
import { SectionWrap } from '../exchangeSwap/styled';
import { DropBox, Search } from '../../components';
import { AirDropList } from '../../components/List/AirdropList';

export const DropsContents = () => {
  const [dropbox, setDropbox] = useState(false);

  const list = null;
  const statusText = {
    exectued: '진행 예정',
    progress: '진행중',
    canceled: '종료',
  };

  const airdropData = [
    {
      symbol: 'ASD_Team4',
      tx: '0x99c0fe94c0d868c01d3545b4f1f3e9bf63911c65272a0d7ada40f25516e85a14',
      mintAmount: '100,000.00000000',
      dropAmount: '100',
      startDate: '2023. 07. 16',
      endDate: '2024. 07. 26',
      rewardAcccess: '2023. 12. 25',
      img: 'mangle',
    },
  ];

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
        <AirDropList airdropData={airdropData} />
      </AirDropWrap>
    </SectionWrap>
  );
};
