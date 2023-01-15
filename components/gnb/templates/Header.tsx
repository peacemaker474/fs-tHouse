import styled from '@emotion/styled';
import GNB from '../organisms/GNB';
import MainSNB from '../organisms/MainSNB';

function Header() {
  return (
    <HeaderWrapper>
      <GNB />
      <MainSNB />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 132px;
  display: flex;
  flex-direction: column;
`;
