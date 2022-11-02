import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

function SignUp() {
  const navigate = useNavigate();
  const [newAccount, setNewAccount] = useState({
    id: "",
    pwd: "",
    nickname: "",
    email: "",
  });
  const [chkPwd, setchkPwd] = useState("");

  const InputBoxList = [
    { type: "text", inputName: "id", text: "ID" },
    { type: "password", inputName: "pwd", text: "비밀번호" },
    { type: "password", inputName: "chkpassword", text: "비밀번호 재확인" },
    { type: "text", inputName: "nickname", text: "닉네임" },
    { type: "text", inputName: "email", text: "이메일" },
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
    if (chkPwd !== newAccount.pwd) {
      alert("비밀번호를 확인하세요");
    } else {
      //계정 생성
      alert("계정이 생성되었습니다.");
      console.log(newAccount);
      navigate("/login");
    }
  };

  return (
    <div>
      <form onSubmit={onMakeAccount}>
        {InputBoxList.map((box) => (
          <InputBox
            key={`${box.inputName} + 1`}
            box={box}
            onChangeState={onChangeState}
          />
        ))}
        <input type="submit" value="계정 생성" />
      </form>
    </div>
  );
}

export default SignUp;
