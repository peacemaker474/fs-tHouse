import React, { PropsWithChildren, ReactElement } from 'react';

interface SelectProps {
  name: string;
  id: string;
  handleSelectBox?: () => void;
  children: PropsWithChildren<ReactElement[]>;
}

function Select({ name, id, handleSelectBox, children }: SelectProps) {
  return (
    <select name={name} id={id} onChange={handleSelectBox}>
      {children}
    </select>
  );
}

export default Select;
