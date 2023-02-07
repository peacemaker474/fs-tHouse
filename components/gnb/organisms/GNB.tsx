import styled from '@emotion/styled';
import Cart from '../../common/Cart';
import MainLogo from '../atoms/MainLogo';
import MainMenu from '../molecules/MainMenu';
import SearchForm from '../molecules/SearchForm';
import SignLists from '../molecules/SignLists';

function GNB() {
  return (
    <GNBWrapper>
      <MainLogo />
      <MainMenu />
      <SearchForm />
      <Cart />
      <SignLists />
    </GNBWrapper>
  );
}

export default GNB;

const GNBWrapper = styled.header`
  max-width: 1265px;
  width: 100%;
  height: 81px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
