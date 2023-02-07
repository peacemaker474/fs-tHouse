import styled from '@emotion/styled';
import Image from 'next/image';
import Search from '../../../public/icons/searchIcon.svg';

function SearchIcon() {
  return (
    <Span>
      <CustomImage alt="검색창" src={Search} />
    </Span>
  );
}

export default SearchIcon;

const Span = styled.span`
  width: 10%;
  height: 100%;
`;

const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
