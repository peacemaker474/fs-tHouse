import styled from '@emotion/styled';

function SearchInput() {
  return <Input type="text" placeholder="통합검색" />;
}

export default SearchInput;

const Input = styled.input`
  all: unset;
  width: 70%;
  height: 90%;
  color: #2f3438;
  align-self: flex-end;
  font-size: 16px;

  &::placeholder {
    color: rgba(127, 127, 127, 0.6);
  }
`;
