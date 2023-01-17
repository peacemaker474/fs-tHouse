import styled from '@emotion/styled';
import Link from 'next/link';

function MainMenu() {
  return (
    <MenuLists>
      <MenuList>
        <MainLink href="/"> 커뮤니티 </MainLink>
      </MenuList>
      <MenuList>
        <MainLink href="/store"> 쇼핑 </MainLink>
      </MenuList>
      <MenuList>
        <MainLink href="/expets"> 이사/시공/수리 </MainLink>
      </MenuList>
    </MenuLists>
  );
}

export default MainMenu;

const MenuLists = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const MenuList = styled.li`
  padding: 21px 5px 20px;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 18px;
`;

const MainLink = styled(Link)`
  color: black;

  &:hover {
    color: #35c5f0;
  }
`;
