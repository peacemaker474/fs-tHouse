import { ReactElement, ReactNode } from 'react';

export interface OptionProps {
  value: string;
  children: ReactNode;
}

function Option({ value, children }: OptionProps): ReactElement {
  return <option value={value}>{children}</option>;
}

export default Option;
