import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineWechat } from "react-icons/ai";
import InputBox from "../components/InputBox";
import "../css/Login.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({ ID: "", password: "" });
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const loginBoxList = [
    { type: "text", inputName: "ID", text: "ID" },
    { type: "password", inputName: "password", text: "비밀번호" },
  ];

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
    } else if (!regex.test(account.ID)) {
      alert("이메일 형식으로 입력해주세요!");
      return;
    }

    axios
      .post("http://54.215.135.43:8080/api/auth/login", {
        email: account.ID,
        password: account.password,
      })
      .then((res) => {
        console.log(res);
        const token = res.data.data;
        JSON.stringify(token);
        localStorage.setItem("token", token.accessToken);
        console.log(localStorage.getItem("token"));
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === "403") {
          alert("아이디 또는 비밀번호가 틀렸습니다.");
          setAccount({ ID: "", password: "" });
          return;
        }
        console.log("error!!");
      });

    // if (account.password !== userPassword) {
    //   alert("비밀번호가 틀렸습니다!!");
    //   e.target.passWord.value = "";
    //   return;
    // }

    // console.log(account);
    // alert("성공");
    // navigate("/");
  };

  const goSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div>
      <div className="titleLogo">
        <AiOutlineWechat className="logo" />
      </div>
      <form className="loginForm" onSubmit={onSubmit}>
        <div className="signText">Sign in to your account</div>
        {loginBoxList.map((box) => (
          <InputBox
            key={`${box.inputName} + 1`}
            box={box}
            onChangeState={onChangeState}
          />
        ))}

        <input className="loginSubmit" type="submit" value="Sign in" />
        <div className="signUpBox">
          Don't have an account?
          <button className="signUpBtn" onClick={goSignUp}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
