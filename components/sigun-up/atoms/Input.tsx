interface InputProps {
  type: string;
  placeholder: string;
  id: string;
}

function Input({ type, placeholder, id }: InputProps) {
  return <input type={type} placeholder={placeholder} id={id} />;
}

export default Input;
