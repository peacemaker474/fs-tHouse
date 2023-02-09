import { PropsWithChildren } from 'react';
import { buttonTypes } from '../../../type/common';

interface Button {
  type: buttonTypes;
  children: PropsWithChildren<string>;
}

function SubmitButton({ type, children }: Button) {
  return <button type={type}>{children}</button>;
}

export default SubmitButton;
