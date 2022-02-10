import React from 'react';
import SignUpInput from './SignUpInput';
import './SignUpInputList.scss';

function SignUpInputList({
  signUpInfo,
  onChange,
  validator,
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
          validErrorMessage,
          duplicateErrorMessage,
          mandatoryMessage,
          clearMessage,
        }) => (
          <SignUpInput
            type={type}
            text={text}
            key={id}
            name={inputName}
            value={signUpInfo[inputName]}
            onChange={onChange}
            placeholder={placeholder}
            isError={validator[inputName][0]}
            validErrorMessage={validErrorMessage}
            fetch={validator[inputName][1]}
            isDuplicate={isDuplicate}
            setIsDuplicate={setIsDuplicate}
            duplicateErrorMessage={duplicateErrorMessage}
            mandatoryMessage={mandatoryMessage}
            clearMessage={clearMessage}
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
    validErrorMessage: '🤬 영문자,숫자 조합으로 6-16글자 범위로 입력해주세요.',
    duplicateErrorMessage:
      '😭 이미 등록된 아이디입니다. 다른 아이디를 입력해 주세요.',
    mandatoryMessage: '🆔 아이디를 입력하세요.',
    clearMessage: '🌈 사용 가능한 아이디입니다.',
  },

  {
    id: '2',
    type: 'password',
    text: '비밀번호',
    inputName: 'signUpPw',
    validErrorMessage:
      '❌ 영문자,숫자,특수문자 조합으로 8-16글자 범위로 입력해주세요.',
    mandatoryMessage: '🔒 비밀번호를 입력하세요.',
    clearMessage: '✅ 사용 가능한 비밀번호입니다.',
  },

  {
    id: '3',
    type: 'password',
    text: '비밀번호확인',
    inputName: 'signUpPwCheck',
    validErrorMessage: '❌ 비밀번호와 비밀번호확인은 같아야 합니다.',
    mandatoryMessage: '🔒 확인을 위해 위의 비밀번호를 다시 입력해주세요.',
    clearMessage: '✅ 비밀번호와 비밀번호확인이 일치합니다',
  },

  {
    id: '4',
    type: 'email',
    text: '이메일',
    inputName: 'signUpEmail',
    validErrorMessage: '❌ 올바른 이메일 형식이 아닙니다.',
    duplicateErrorMessage: '😰 해당 이메일로 가입하신 계정이 이미 존재합니다.',
    mandatoryMessage: '💌 이메일을 입력하세요.',
    clearMessage: '✅ 사용가능한 이메일입니다.',
  },

  {
    id: '5',
    type: 'name',
    text: '닉네임',
    inputName: 'signUpNick',
    duplicateErrorMessage:
      '🤢 이미 등록된 닉네임입니다. 다른 닉네임을 입력해 주세요.',
    mandatoryMessage: '🔥 닉네임을 입력하세요.',
    clearMessage: '✅ 사용가능한 닉네임입니다.',
  },

  {
    id: '6',
    type: 'text',
    text: '휴대폰번호',
    placeholder: ' -없이 입력하세요',
    inputName: 'signUpPhone',
    validErrorMessage: '🌪 올바른 전화번호 형식이 아닙니다.',
    duplicateErrorMessage:
      '💥 해당 휴대폰 번호로 가입하신 계정이 이미 존재합니다.',
    mandatoryMessage: '📞 휴대폰 번호를 입력하세요.',
    clearMessage: '✅ 사용가능한 휴대폰 번호입니다.',
  },
];
