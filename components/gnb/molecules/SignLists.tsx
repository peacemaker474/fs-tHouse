import styled from '@emotion/styled';
import Link from 'next/link';

function SignLists() {
  return (
    <Lists>
      <SignLink href="/login"> 로그인 </SignLink>
      <SignLink href="/signUp"> 회원가입 </SignLink>
    </Lists>
  );
}

export default SignLists;

const Lists = styled.ul`
  display: flex;
`;

const SignLink = styled(Link)`
  padding: 0 10px;

  &:first-child {
    border-right: 1px solid #eaedef;
  }
`;
