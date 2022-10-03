import { useState } from "react";

function Login() {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const [userPassword, setUserPassword] = useState("1234");

  const onSubmit = (e) => {
    e.preventDefault();
    const getID = e.target.ID.value;
    const getPassword = e.target.passWord.value;
    if (getID === "" && getPassword === "") {
      alert("아이디와 비밀번호를 입력하세요");
      return;
    } else if (getID === "") {
      alert("아이디를 입력하세요");
      return;
    } else if (getPassword === "") {
      alert("비밀번호를 입력하세요");
      return;
    } else {
      //모두 입력된 경우
      setID(getID);
      setPassword(getPassword);
    }

    if (password !== userPassword) {
      alert("비밀번호가 틀렸습니다!!");
      e.target.passWord.value = "";
      return;
    }

    console.log(id, password);
    e.target.ID.value = "";
    e.target.passWord.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="ID" placeholder="ID" />
        <br />
        <input type="password" name="passWord" placeholder="PASSWORD" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
