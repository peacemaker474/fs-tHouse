import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

function SubTitle({ children }: PropsWithChildren) {
  return <Span>{children}</Span>;
}

export default SubTitle;

const Span = styled.span`
  font-size: 12px;
  margin: 15px 0px;
  color: rgb(117, 117, 117);
`;
