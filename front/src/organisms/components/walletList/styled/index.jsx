import styled from 'styled-components';

export const WalletList = styled.div`
  cursor: pointer;
  width: 80%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  margin: 10px auto;
  padding: 8px;

  & > img {
    width: 60px;
    margin-right: 20px;
  }
  & > p {
    margin-top: 13px;
    color: #767c83;
    font-size: 26px;
    font-weight: lighter;
  }

  &:hover {
    background: #f0f4f578;
  }

  border: none;
  background: transparent;
`;
