import styled from '@emotion/styled';
import SearchIcon from '../atoms/SearchIcon';
import SearchInput from '../atoms/SearchInput';

function SearchForm() {
  return (
    <Form>
      <SearchIcon />
      <SearchInput />
    </Form>
  );
}

export default SearchForm;

const Form = styled.div`
  width: 285px;
  height: 40px;
  display: inline-flex;
  border: 1px solid #dadde0;
  border-radius: 5px;
  padding: 0 14px;
  gap: 5px;
`;
