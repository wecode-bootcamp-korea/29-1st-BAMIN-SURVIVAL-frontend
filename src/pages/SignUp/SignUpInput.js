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
  warning,
  fetch,
  isDuplicate,
  setIsDuplicate,
  duplicateError,
}) {
  const [isBlur, setIsBlur] = useState(false);

  const onBlur = () => {
    setIsBlur(true);
  };

  const onFocus = () => {
    setIsBlur(false);
    setIsDuplicate(false);
  };

  const onBlurFetch = isBlur ? fetch() : null;

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
          <div className="warningShowUp">{warning}</div>
        ) : (
          <div className="warning">{warning}</div>
        )}
        {isDuplicate && isBlur ? (
          <div className="warningShowUp">{duplicateError}</div>
        ) : (
          <div className="warning">{warning}</div>
        )}
      </div>
    </div>
  );
}

export default SignUpInput;
