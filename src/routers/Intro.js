import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  const goSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div>
      <button onClick={goLogin}>로그인하기</button>
      <br />
      <button onClick={goSignUp}>회원 가입</button>
    </div>
  );
}

export default Intro;
