import React from 'react';
import './Input.scss';

function Input({ type, text, placeholder }) {
  return (
    <div className="inputBox">
      <div className="inputTextBox">
        <p className="inputText">{`* ${text}`}</p>
      </div>
      <div className="inputWrapper">
        <input className="signUpInput" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default Input;
