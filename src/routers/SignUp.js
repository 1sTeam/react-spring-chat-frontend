import { useState } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import "../css/SignUp.css";
import { AiOutlineSmile } from "react-icons/ai";

function SignUp() {
  const navigate = useNavigate();
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const [newAccount, setNewAccount] = useState({
    id: "",
    pwd: "",
    nickname: "",
  });
  const [chkPwd, setchkPwd] = useState("unKnown");

  const InputBoxList = [
    { type: "text", inputName: "id", text: "ID" },
    { type: "password", inputName: "pwd", text: "비밀번호" },
    { type: "password", inputName: "chkpassword", text: "비밀번호 재확인" },
    { type: "text", inputName: "nickname", text: "닉네임" },
  ];

  const onChangeState = (e) => {
    if (e.target.name === "chkpassword") {
      setchkPwd(e.target.value);
    } else {
      setNewAccount({
        ...newAccount,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onMakeAccount = (e) => {
    e.preventDefault();
    if (
      newAccount.id === "" ||
      newAccount.pwd === "" ||
      newAccount.nickname === ""
    ) {
      alert("모든 항목을 채워주세요");
    } else if (!regex.test(newAccount.id)) {
      alert("이메일 형식으로 입력해주세요!");
      return;
    } else if (chkPwd !== newAccount.pwd) {
      alert("비밀번호를 확인하세요");
    } else {
      axios
        .post("http://54.215.135.43:8080/api/auth/register", {
          email: newAccount.id,
          password: newAccount.pwd,
          username: newAccount.nickname,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      //계정 생성
      alert("계정이 생성되었습니다.");
      console.log(newAccount);
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="signupTitle">
        <AiOutlineSmile className="signupLogo" />
        Welcome!
      </div>

      <form onSubmit={onMakeAccount}>
        {InputBoxList.map((box) => (
          <InputBox
            key={`${box.inputName} + 1`}
            box={box}
            onChangeState={onChangeState}
          />
        ))}
        <input className="signupBtn" type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
