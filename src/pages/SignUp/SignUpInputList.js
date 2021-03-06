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
          backname,
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
            backname={backname}
            onChange={onChange}
            placeholder={placeholder}
            isError={validator[inputName]}
            validErrorMessage={validErrorMessage}
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
    text: 'μμ΄λ',
    backname: 'account',
    inputName: 'signUpId',
    validErrorMessage: 'π€¬ μλ¬Έμ,μ«μ μ‘°ν©μΌλ‘ 6-16κΈμ λ²μλ‘ μλ ₯ν΄μ£ΌμΈμ.',
    duplicateErrorMessage:
      'π­ μ΄λ―Έ λ±λ‘λ μμ΄λμλλ€. λ€λ₯Έ μμ΄λλ₯Ό μλ ₯ν΄ μ£ΌμΈμ.',
    mandatoryMessage: 'π μμ΄λλ₯Ό μλ ₯νμΈμ.',
    clearMessage: 'π μ¬μ© κ°λ₯ν μμ΄λμλλ€.',
  },

  {
    id: '2',
    type: 'password',
    text: 'λΉλ°λ²νΈ',
    inputName: 'signUpPw',
    validErrorMessage:
      'β μλ¬Έμ,μ«μ,νΉμλ¬Έμ μ‘°ν©μΌλ‘ 8-16κΈμ λ²μλ‘ μλ ₯ν΄μ£ΌμΈμ.',
    mandatoryMessage: 'π λΉλ°λ²νΈλ₯Ό μλ ₯νμΈμ.',
    clearMessage: 'β μ¬μ© κ°λ₯ν λΉλ°λ²νΈμλλ€.',
  },

  {
    id: '3',
    type: 'password',
    text: 'λΉλ°λ²νΈνμΈ',
    inputName: 'signUpPwCheck',
    validErrorMessage: 'β λΉλ°λ²νΈμ λΉλ°λ²νΈνμΈμ κ°μμΌ ν©λλ€.',
    mandatoryMessage: 'π νμΈμ μν΄ μμ λΉλ°λ²νΈλ₯Ό λ€μ μλ ₯ν΄μ£ΌμΈμ.',
    clearMessage: 'β λΉλ°λ²νΈμ λΉλ°λ²νΈνμΈμ΄ μΌμΉν©λλ€',
  },

  {
    id: '4',
    type: 'email',
    text: 'μ΄λ©μΌ',
    inputName: 'signUpEmail',
    backname: 'email',
    validErrorMessage: 'β μ¬λ°λ₯Έ μ΄λ©μΌ νμμ΄ μλλλ€.',
    duplicateErrorMessage: 'π° ν΄λΉ μ΄λ©μΌλ‘ κ°μνμ  κ³μ μ΄ μ΄λ―Έ μ‘΄μ¬ν©λλ€.',
    mandatoryMessage: 'π μ΄λ©μΌμ μλ ₯νμΈμ.',
    clearMessage: 'β μ¬μ©κ°λ₯ν μ΄λ©μΌμλλ€.',
  },

  {
    id: '5',
    type: 'name',
    text: 'λλ€μ',
    inputName: 'signUpNick',
    backname: 'nickname',
    duplicateErrorMessage:
      'π€’ μ΄λ―Έ λ±λ‘λ λλ€μμλλ€. λ€λ₯Έ λλ€μμ μλ ₯ν΄ μ£ΌμΈμ.',
    mandatoryMessage: 'π₯ λλ€μμ μλ ₯νμΈμ.',
    clearMessage: 'β μ¬μ©κ°λ₯ν λλ€μμλλ€.',
  },

  {
    id: '6',
    type: 'text',
    text: 'ν΄λν°λ²νΈ',
    placeholder: ' -μμ΄ μλ ₯νμΈμ',
    inputName: 'signUpPhone',
    backname: 'phone',
    validErrorMessage: 'πͺ μ¬λ°λ₯Έ μ νλ²νΈ νμμ΄ μλλλ€.',
    duplicateErrorMessage:
      'π₯ ν΄λΉ ν΄λν° λ²νΈλ‘ κ°μνμ  κ³μ μ΄ μ΄λ―Έ μ‘΄μ¬ν©λλ€.',
    mandatoryMessage: 'π ν΄λν° λ²νΈλ₯Ό μλ ₯νμΈμ.',
    clearMessage: 'β μ¬μ©κ°λ₯ν ν΄λν° λ²νΈμλλ€.',
  },
];
