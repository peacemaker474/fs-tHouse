import { inputTypes } from '../../../type/common';

interface InputProps {
  inputType: inputTypes;
}

function Input({ inputType }: InputProps) {
  return <input type={inputType} />;
}

export default Input;
