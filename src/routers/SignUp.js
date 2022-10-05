import { useState } from "react";

function SignUp() {
  const [newAccount, setNewAccount] = useState({
    email: "",
    nickname: "",
    ID: "",
    pwd: "",
  });
  const [chkPwd, setchkPwd] = useState("");

  return (
    <div>
      <form>
        <div>아이디</div>
        <input type="text" name="ID" />
        <div>비밀번호</div>
        <input type="password" name="pwd" />
        <div>비밀번호 재확인</div>
        <input type="password" name="chkpassword" />
        <div>닉네임</div>
        <input type="text" name="nickname" />
        <div>이메일</div>
        <input type="text" name="email" />
        <br />
        <input type="submit" value="계정 생성" />
      </form>
    </div>
  );
}

export default SignUp;
