import React from 'react';
import SignUpInput from './SignUpInput';
import './InputList.scss';

function InputList({ signup }) {
  return (
    <div className="signUpBox">
      {signup.map(data => (
        <SignUpInput
          type={data.type}
          text={data.text}
          key={data.id}
          placeholder={data.placeholder}
        />
      ))}
    </div>
  );
}

export default InputList;
