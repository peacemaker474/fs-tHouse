import { buttonTypes } from '../../../type/common';

interface Button {
  buttonType: buttonTypes;
  text: string;
}

function Button2({ buttonType, text }: Button) {
  return <button type={buttonType}>{text}</button>;
}

export default Button2;
