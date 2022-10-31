import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({ ID: "", password: "" });
  const [userPassword, setUserPassword] = useState("1234");

  const onChangeState = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (account.ID === "" || account.password === "") {
      alert("아이디 또는 비밀번호를 입력하세요");
      return;
    }

    if (account.password !== userPassword) {
      alert("비밀번호가 틀렸습니다!!");
      e.target.passWord.value = "";
      return;
    }

    console.log(account);
    alert("성공");
  };

  const goSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div>
      <div className="logo">로고</div>
      <form className="loginForm" onSubmit={onSubmit}>
        <div className="signText">Sign in to your account</div>
        <div className="loginBox">
          <label htmlFor="ID" className="labelText">
            ID
          </label>
          <br />
          <input
            className="loginID"
            type="text"
            name="ID"
            placeholder="ID"
            value={account.ID}
            onChange={onChangeState}
          />
        </div>
        <div className="loginBox">
          <label htmlFor="password" className="labelText">
            Password
          </label>
          <br />
          <input
            className="loginPwd"
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={account.password}
            onChange={onChangeState}
          />
        </div>
        <input className="loginSubmit" type="submit" value="Login" />
        <br />
        <button onClick={goSignUp}>회원가입</button>
      </form>
    </div>
  );
}

export default Login;
