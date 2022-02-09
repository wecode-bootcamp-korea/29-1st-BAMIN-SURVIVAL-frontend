import React, { useState } from 'react';
import './SignUpInput.scss';

function SignUpInput({
  type,
  onChange,
  value,
  text,
  placeholder,
  name,
  isError,
  validErrorMessage,
  fetch,
  isDuplicate,
  setIsDuplicate,
  duplicateError,
  mandatoryMessage,
}) {
  const [isBlur, setIsBlur] = useState(false);

  const onBlur = () => {
    setIsBlur(true);
    fetch();
  };

  const onFocus = () => {
    setIsBlur(false);
    setIsDuplicate(false);
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
        ) : (
          <div className="warning">{validErrorMessage}</div>
        )}
        {isDuplicate && value !== '' && isBlur ? (
          <div className="warningShowUp duplicate">{duplicateError}</div>
        ) : (
          <div className="warning">{validErrorMessage}</div>
        )}
        {value === '' && isBlur ? (
          <div className="warningShowUp mandatory">{mandatoryMessage}</div>
        ) : (
          <div className="warning">{validErrorMessage}</div>
        )}
      </div>
    </div>
  );
}

export default SignUpInput;
