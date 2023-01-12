import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/images/mainLogo.png';

function MainLogo() {
  return (
    <MainLogoWrapper>
      <Link href="/">
        <Image alt="TomorrowHouse-Logo" src={Logo} placeholder="empty" />
      </Link>
    </MainLogoWrapper>
  );
}

export default MainLogo;

const MainLogoWrapper = styled.div``;
