import React from 'react';
import SignUpInput from './SignUpInput';
import './SignUpInputList.scss';

function SignUpInputList({
  signUpInfo,
  onChange,
  validator,
  fetch,
  isDuplicate,
  setIsDuplicate,
}) {
  return (
    <div className="signUpBox">
      {SIGNUP_INPUT_DATA.map(
        ({
          type,
          text,
          id,
          inputName,
          placeholder,
          warning,
          duplicateError,
        }) => (
          <SignUpInput
            type={type}
            text={text}
            key={id}
            name={inputName}
            value={signUpInfo[inputName]}
            onChange={onChange}
            placeholder={placeholder}
            isError={validator[inputName]}
            warning={warning}
            fetch={fetch}
            isDuplicate={isDuplicate}
            setIsDuplicate={setIsDuplicate}
            duplicateError={duplicateError}
          />
        )
      )}
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
    warning: '사용불가! 영문자,숫자 조합으로 6-16글자 범위로 입력해주세요.',
    isDuplicate: false,
    duplicateError: '이미 등록된 아이디입니다. 다른 아이디를 입력해 주세요',
  },

  {
    id: '2',
    type: 'password',
    text: '비밀번호',
    inputName: 'signUpPw',
    warning:
      '사용불가! 영문자,숫자,특수문자 조합으로 8-16글자 범위로 입력해주세요.',
  },

  {
    id: '3',
    type: 'password',
    text: '비밀번호확인',
    inputName: 'signUpPwCheck',
    warning: '비밀번호와 비밀번호확인은 같아야 합니다.',
  },

  {
    id: '4',
    type: 'email',
    text: '이메일',
    inputName: 'signUpEmail',
    warning: '올바른 이메일 형식이 아닙니다.',
    isDuplicate: false,
    duplicateError: '사용불가! 해당 이메일로 가입하신 계정이 이미 존재합니다.',
  },

  {
    id: '5',
    type: 'name',
    text: '닉네임',
    inputName: 'signUpNick',
    warning: '중복된 닉네임입니다!',
    isDuplicate: false,
    duplicateError: '사용불가! 중복된 닉네임입니다.',
  },

  {
    id: '6',
    type: 'text',
    text: '휴대폰번호',
    placeholder: ' -없이 입력하세요',
    inputName: 'signUpPhone',
    warning: '올바른 전화번호 형식이 아닙니다.',
    isDuplicate: false,
    duplicateError: '사용불가! 번호로 가입하신 계정이 이미 존재합니다',
  },
];
