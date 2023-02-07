import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MainMenu() {
  const router = useRouter();

  return (
    <MenuLists>
      <MenuList>
        <MainLink href="/" current={router.pathname === '/'}>
          {' '}
          커뮤니티{' '}
        </MainLink>
      </MenuList>
      <MenuList>
        <MainLink href="/store" current={router.pathname === '/store'}>
          {' '}
          쇼핑{' '}
        </MainLink>
      </MenuList>
      <MenuList>
        <MainLink href="/expets" current={router.pathname === '/expets'}>
          {' '}
          이사/시공/수리{' '}
        </MainLink>
      </MenuList>
    </MenuLists>
  );
}

export default MainMenu;

const MenuLists = styled.ul`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MenuList = styled.li`
  padding: 21px 5px 20px;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 18px;
`;

const MainLink = styled(Link)<{ current: boolean }>`
  color: ${({ current }) => (current ? '#35c5f0' : '#000')};

  &:hover {
    color: #35c5f0;
  }
`;
