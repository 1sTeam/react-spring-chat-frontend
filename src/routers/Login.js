import { useState } from "react";

function Login() {
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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="ID"
          placeholder="ID"
          value={account.ID}
          onChange={onChangeState}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={account.password}
          onChange={onChangeState}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
