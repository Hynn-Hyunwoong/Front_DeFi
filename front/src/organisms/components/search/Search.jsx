import { useRecoilState } from 'recoil';
import { SearchInput } from './styled';
import { searchKeyword } from '../../store';

export const Search = ({ placeholder, ...rest }) => {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const inputChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <SearchInput
        placeholder={placeholder}
        value={keyword}
        onChange={inputChange}
        {...rest}
      />
    </>
  );
};
