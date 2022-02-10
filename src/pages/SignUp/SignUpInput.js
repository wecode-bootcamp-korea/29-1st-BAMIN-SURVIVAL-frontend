import React, { useState } from 'react';
import './SignUpInput.scss';

function SignUpInput({
  type,
  onChange,
  value,
  text,
  placeholder,
  name,
  backname,
  isError,
  validErrorMessage,
  isDuplicate,
  setIsDuplicate,
  duplicateErrorMessage,
  mandatoryMessage,
  clearMessage,
}) {
  const [isBlur, setIsBlur] = useState(false);

  const signUpInputFetch = () => {
    fetch(`http://10.58.5.233:8000/users/check-${backname}`, {
      method: 'POST',
      body: JSON.stringify({
        [backname]: value,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ALREADY EXISTS') {
          setIsDuplicate(prev => ({ ...prev, [name]: true }));
        }
      });
  };

  const onBlur = () => {
    setIsBlur(true);
    signUpInputFetch();
  };

  const onFocus = () => {
    setIsBlur(false);
    setIsDuplicate(prev => ({ ...prev, [name]: false }));
  };

  return (
    <div className="signUpInput">
      <div className="inputTextBox">
        <p className="inputText">{`* ${text}`}</p>
      </div>
      <div className="inputWrapper">
        <input
          className="input"
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {isError && isBlur ? (
          <div className="warningShowUp valid">{validErrorMessage}</div>
        ) : isDuplicate[name] && value !== '' && isBlur ? (
          <div className="warningShowUp duplicate">{duplicateErrorMessage}</div>
        ) : value === '' && isBlur ? (
          <div className="warningShowUp mandatory">{mandatoryMessage}</div>
        ) : !isError && !isDuplicate[name] && value !== '' && isBlur ? (
          <div className="clear">{clearMessage}</div>
        ) : null}
      </div>
    </div>
  );
}

export default SignUpInput;
