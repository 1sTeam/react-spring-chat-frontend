import { useState } from "react";
import axios from "axios";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import OptionBtn from "../components/OptionBtn";
import "../css/Header.css";

function Header({ title, roomUuid, backBtn, etcBtn }) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleDeleteRoom = (e) => {
    e.preventDefault();
    alert(`${roomUuid} 방을 삭제합니다.`);
    axios
      .delete(`http://54.215.135.43:8080/api/chat/room/${roomUuid}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate(-1);
  };
  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const goMyPage = (e) => {
    e.preventDefault();
    navigate("/myPage");
  };
  const showOption = (e) => {
    e.preventDefault();
    setIsChecked((x) => !isChecked);
  };

  return (
    <div className={`top ${etcBtn ? "" : "unseen"}`}>
      <button className={`back ${backBtn ? "" : "unseen"}`} onClick={goBack}>
        {title === "Make Room" || title === "MyPage" ? (
          <AiOutlineClose />
        ) : (
          <AiOutlineLeft />
        )}
      </button>
      <div
        className={`headerTitle ${title === "MyPage" ? "myPages" : ""} ${
          etcBtn ? "" : "unseen"
        }`}
      >
        {title}
      </div>
      <div className={`options ${etcBtn ? "" : "unseen"}`}>
        <OptionBtn
          btnName="myPageBtn"
          seen={title === "Whatsup" && isChecked}
          handleClick={goMyPage}
        />
        <OptionBtn
          btnName="trashBtn"
          seen={title !== "Whatsup" && isChecked}
          handleClick={handleDeleteRoom}
        />

        <OptionBtn btnName="etc" seen={etcBtn} handleClick={showOption} />
      </div>
    </div>
  );
}

export default Header;
