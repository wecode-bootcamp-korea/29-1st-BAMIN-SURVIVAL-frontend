import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import BASE_URL from '../Config';

function Login() {
  const [inputLogin, setInputLogin] = useState({
    loginId: '',
    loginPw: '',
  });

  const { loginId, loginPw } = inputLogin;

  const handleLoginInput = e => {
    const { name, value } = e.target;
    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  };

  const loginValidation = () => {
    if (loginId === '') {
      alert('아이디를 입력해주세요');
      return;
    }
    if (loginPw === '') {
      alert('패스워드를 입력해주세요');
      return;
    }
  };

  const navigate = useNavigate();

  const goToSignUp = e => {
    e.preventDefault();

    fetch(`${BASE_URL}users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        account: loginId,
        password: loginPw,
      }),
    })
      .then(res => res.json())
      .then(result =>
        sessionStorage.setItem('token', result.SUCCESS.ACCESS_TOKEN)
      )
      .then(() => navigate('/'));
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginValidation}>
        <div className="loginContainer">
          <div className="loginBox">
            <h3 className="memberLogin">회원 로그인</h3>
            <input
              type="text"
              name="loginId"
              value={loginId}
              className="idInput"
              placeholder="아이디"
              onChange={handleLoginInput}
            />
            <input
              name="loginPw"
              type="password"
              value={loginPw}
              className="pwInput"
              placeholder="비밀번호"
              onChange={handleLoginInput}
            />
            <div className="idCheckWrapper">
              <input type="checkbox" className="idCheck" />
              <span className="idSave">아이디저장</span>
            </div>
            <button className="loginButton buttonNoBorder" onClick={goToSignUp}>
              로그인
            </button>
          </div>
          <ul className="loginButtonBox">
            <li className="loginSignUp buttonList">
              <button className="buttonNoBorder">회원가입</button>
            </li>
            <li className="loginFindId buttonList">
              <button className="buttonNoBorder">아이디 찾기</button>
            </li>
            <li className="loginFindPw buttonList">
              <button className="buttonNoBorder">비밀번호 찾기</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Login;
