import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import SubmitButton from '../atoms/Button';

const emailList = [
  {
    value: 'naver.com',
    address: 'naver.com',
  },
  {
    value: 'hanmail.net',
    address: 'hanmail.net',
  },
  {
    value: 'daum.net',
    address: 'daum.net',
  },
  {
    value: 'gmail.com',
    address: 'gmail.com',
  },
  {
    value: 'nate.com',
    address: 'nate.com',
  },
  {
    value: 'hotmail.com',
    address: 'hotmail.com',
  },
  {
    value: 'outlook.com',
    address: 'outlook.com',
  },
  {
    value: 'icloud.com',
    address: 'icloud.com',
  },
  {
    value: 'manual',
    address: '직접입력',
  },
];

function Email() {
  const [selectedEamil, setSelectedEamil] = useState<string>('');

  const [manualEmail, setManualEmail] = useState<boolean>(false);

  const handleSelectBox = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'manual') {
      setManualEmail(true);
    }
    setSelectedEamil(event.target.value);
  };

  const handleCancelManualEmail = () => {
    setManualEmail(false);
  };

  useEffect(() => {
    if (selectedEamil === 'manual') setManualEmail(true);
  }, [selectedEamil]);

  return (
    <div>
      <Input type="text" placeholder="이메일" id="email" />
      <span>@</span>
      {!manualEmail && (
        <select onChange={handleSelectBox}>
          {emailList?.map((email) => (
            <option key={email.value} value={email.value}>
              {email.address}
            </option>
          ))}
        </select>
      )}
      {manualEmail && (
        <>
          <Input id="eamilAddress" placeholder="직접입력" type="text" />
          <button type="button" onClick={handleCancelManualEmail}>
            X
          </button>
        </>
      )}
      <div>
        <SubmitButton type="submit">이메일 인증하기</SubmitButton>
      </div>
    </div>
  );
}

export default Email;
