import { SectionWrap, ExpectedArticle, TXTableHeader } from './styled';
import { Expected, TxHistoryLi } from '../../components';

export const ExchangeBottom = ({ provider, contract }) => {
  return (
    <SectionWrap>
      <ExpectedArticle className='expected' style={{ width: '85%' }}>
        <h3>예상 내역</h3>
        <Expected />
      </ExpectedArticle>
      <ExpectedArticle className='txHistory'>
        <h3>트랜잭션 내역</h3>
        <TXTableHeader>
          <p className='action'>유형</p>
          <p className='hash'>해시</p>
          <p className='status'>상태</p>
          <p className='date'>일자</p>
        </TXTableHeader>
        <div>
          <ul>
            <TxHistoryLi />
          </ul>
        </div>
      </ExpectedArticle>
    </SectionWrap>
  );
};
