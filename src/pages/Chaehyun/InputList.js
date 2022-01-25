import React from 'react';
import Input from './Input';
import './InputList.scss';

function InputList({ signup }) {
  return (
    <div className="signUpBox">
      {signup.map(data => (
        <Input
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
