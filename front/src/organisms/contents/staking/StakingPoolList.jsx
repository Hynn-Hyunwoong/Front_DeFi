import { useRecoilState } from 'recoil';
import { Search, Button, StakingVotePoolList } from '../../components';
import { SectionStyled } from '../governance/styled';
import { MyVoteSection, FlexDiv, PoolListHeaderDiv } from './styled';
import { searchKeyword } from '../../store';
import { useNavigate } from 'react-router-dom';

export const StakingPoolList = ({ tokenData }) => {
  const [keyword] = useRecoilState(searchKeyword);
  const navigate = useNavigate();
  const filteredData = tokenData.filter(
    (item) =>
      item.token1.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
      item.token2.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
      item.token1.name.includes(keyword) ||
      item.token2.name.includes(keyword),
  );

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate('/governance');
  };

  return (
    <SectionStyled>
      <MyVoteSection
        height="100%"
        colors="white"
        style={{ marginBottom: '70px' }}
      >
        <PoolListHeaderDiv>
          <FlexDiv>
            <h3>풀 투표 목록</h3>
            <Button
              colors="blueBox"
              width="110px"
              height="30px"
              onClick={handleRedirect}
            >
              <strong>실시간 투표 현황</strong>
            </Button>
          </FlexDiv>
          <Search placeholder="토큰명, 심볼 검색" />
        </PoolListHeaderDiv>
        <div>
          <StakingVotePoolList tokenData={keyword ? filteredData : tokenData} />
        </div>
      </MyVoteSection>
    </SectionStyled>
  );
};
