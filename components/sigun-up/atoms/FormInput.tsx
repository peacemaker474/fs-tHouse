// import { useForm } from 'react-hook-form';
import { inputTypes } from '../../../type/common';

interface FormInputProps {
  type: inputTypes;
  registerOpt: any;
  error: any;
  label: string;
  name: string;
}

function FormInput({ label, type, name, registerOpt, error }: FormInputProps) {
  // const { register } = useForm<any>();
  console.log(registerOpt); // temp
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} />
      <div>{error}</div>
    </div>
  );
}

export default FormInput;
