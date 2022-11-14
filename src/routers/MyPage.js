import "../css/MyPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AccountInfoItem from "../components/AccountInfoItem";
import AccountInfoTitle from "../components/AccountInfoTitle";
import AccInfoInput from "../components/AccInfoInput";
import { useEffect, useState } from "react";

function MyPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  const [newInfo, setNewInfo] = useState({ password: "", username: "" });

  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    axios
      .get("/api/auth/read", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        console.log(res);
        setUserInfo(res.data.data);
        JSON.stringify(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const onChangeState = (e) => {
    setNewInfo({
      ...newInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditInfo = (e) => {
    e.preventDefault();
    console.log(newInfo);

    axios
      .put(
        "/api/auth/update",
        { password: newInfo.password, username: newInfo.username },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    navigate(-1);
  };

  return (
    <div className="MyPage">
      <Header title="MyPage" backBtn={true} etcBtn={false} />

      <AccountInfoTitle title="회원 정보 조회" />
      <AccountInfoItem title="ID(e-mail)" context={userInfo.email} />
      <AccountInfoItem title="닉네임" context={userInfo.username} />

      <AccountInfoTitle title="회원 정보 수정" />
      <AccInfoInput
        title="비밀번호"
        name="password"
        onChangeState={onChangeState}
      />
      <AccInfoInput
        title="닉네임"
        name="username"
        onChangeState={onChangeState}
      />

      <button className="EditBtn" onClick={handleEditInfo}>
        수정하기
      </button>
    </div>
  );
}

export default MyPage;
