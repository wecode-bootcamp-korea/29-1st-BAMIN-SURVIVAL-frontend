import React from 'react';
import SignUpInput from './SignUpInput';
import './SignUpInputList.scss';

function SignUpInputList({ signupInfo, setSignupInfo }) {
  return (
    <div className="signUpBox">
      {SIGNUP_INPUT_DATA.map(({ type, text, id, inputName, placeholder }) => (
        <SignUpInput
          type={type}
          text={text}
          key={id}
          name={inputName}
          value={signupInfo[inputName]}
          signupInfo={signupInfo}
          placeholder={placeholder}
          setSignupInfo={setSignupInfo}
        />
      ))}
    </div>
  );
}

export default SignUpInputList;

const SIGNUP_INPUT_DATA = [
  {
    id: '1',
    type: 'text',
    text: '아이디',
    inputName: 'signUpId',
  },

  {
    id: '2',
    type: 'password',
    text: '비밀번호',
    inputName: 'signUpPw',
  },

  {
    id: '3',
    type: 'password',
    text: '비밀번호확인',
    inputName: 'signUpPwCheck',
  },

  {
    id: '4',
    type: 'email',
    text: '이메일',
    inputName: 'signUpEmail',
  },

  {
    id: '5',
    type: 'name',
    text: '닉네임',
    inputName: 'signUpNick',
  },

  {
    id: '6',
    type: 'text',
    text: '휴대폰번호',
    placeholder: ' -없이 입력하세요',
    inputName: 'signUpPhone',
  },
];
