import styled from '@emotion/styled';
import MainLogo from '../atoms/MainLogo';

function GNB() {
  return (
    <GNBWrapper>
      <MainLogo />
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
