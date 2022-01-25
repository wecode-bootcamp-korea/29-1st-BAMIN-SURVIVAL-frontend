import React, { useState } from 'react';
import '../Chaehyun/LoginBaeminSurvival.scss';

function LoginBaeminSurvival() {
  const [inputId, setInputId] = useState('');

  const [inputPw, setInputPw] = useState('');

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const onSubmit = () => {
    if (inputId === '') {
      alert('아이디를 입력해주세요');
    } else if (inputPw === '') {
      alert('패스워드를 입력해주세요');
    }
  };

  const pressEnter = e => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="loginBaeminSurvival">
      <form className="loginForm" onSubmit={pressEnter}>
        <div className="loginContainer">
          <div className="loginBox">
            <h3 className="memberLogin">회원 로그인</h3>
            <input
              type="text"
              className="idInput"
              placeholder="아이디"
              onChange={handleInputId}
            />
            <input
              type="password"
              className="pwInput"
              placeholder="비밀번호"
              onChange={handleInputPw}
            />
            <div className="idCheckWrapper">
              <input type="checkbox" className="idCheck" />
              <span className="idSave">아이디저장</span>
            </div>
            <button className="loginButton buttonNoBorder" onClick={onSubmit}>
              로그인
            </button>
          </div>
          <ul className="loginButtonBox">
            <li className="buttonList">
              <button className="buttonNoBorder">회원가입</button>
            </li>
            <li className="findId buttonList">
              <button className="buttonNoBorder">아이디 찾기</button>
            </li>
            <li className="buttonList">
              <button className="buttonNoBorder">비밀번호 찾기</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default LoginBaeminSurvival;
