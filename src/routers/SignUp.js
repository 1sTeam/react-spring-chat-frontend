import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [newAccount, setNewAccount] = useState({
    id: "",
    pwd: "",
    nickname: "",
    email: "",
  });
  const [chkPwd, setchkPwd] = useState("");

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
      console.log(newAccount);
      navigate("/login");
    }
  };

  return (
    <div>
      <form onSubmit={onMakeAccount}>
        <label htmlFor="ID">아이디</label> // 바꾸기!!
        <input type="text" name="ID" onChange={onChangeState} />
        <div>비밀번호</div>
        <input type="password" name="pwd" onChange={onChangeState} />
        <div>비밀번호 재확인</div>
        <input type="password" name="chkpassword" onChange={onChangeState} />
        <div>닉네임</div>
        <input type="text" name="nickname" onChange={onChangeState} />
        <div>이메일</div>
        <input type="text" name="email" onChange={onChangeState} />
        <br />
        <input type="submit" value="계정 생성" />
      </form>
    </div>
  );
}

export default SignUp;
