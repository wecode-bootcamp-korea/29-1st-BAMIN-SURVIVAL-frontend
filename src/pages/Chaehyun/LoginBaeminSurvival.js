import React from 'react';
import '../../styles/variables.scss';
import '../Chaehyun/LoginBaeminSurvival.scss';

function LoginBaeminSurvival() {
  return (
    <div className="loginBaeminSurvival">
      <div className="loginContainer">
        <div className="loginBox">
          <h3 className="memberLogin">회원 로그인</h3>
          <input type="text" className="idInput" placeholder="아이디" />
          <input type="password" className="pwInput" placeholder="비밀번호" />
          <div className="idCheckWrapper">
            <input type="checkbox" className="idCheck" />
            <span className="idSave">아이디저장</span>
          </div>
          <button className="loginButton buttonNoBorder">로그인</button>
        </div>
        <ul className="loginButtonBox">
          <li>
            <button className="buttonNoBorder">회원가입</button>
          </li>
          <li>
            <button className="buttonNoBorder">아이디 찾기</button>
          </li>
          <li>
            <button className="buttonNoBorder">비밀번호 찾기</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoginBaeminSurvival;
