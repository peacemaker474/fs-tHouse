import styled from '@emotion/styled'
import GNB from '../organisms/GNB'

function Header() {
  return (
    <HeaderWrapper>
      <GNB />
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  width: 100%;
  height: 132px;
  display: flex;
  flex-direction: column;
`
