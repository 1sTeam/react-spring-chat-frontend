import axios from "axios";
import "../css/MakeRoom.css";
import { useState } from "react";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";

function MakeRoom() {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const onChangeState = (e) => {
    setRoomName(e.target.value);
  };

  const handleClick = () => {
    axios
      .post("http://54.215.135.43:8080/api/chat/room", { name: roomName })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header title="Make Room" backBtn={true} etcBtn={false} />

      <InputBox
        box={{
          type: "text",
          inputName: "roomName",
          text: "원하는 방 이름을 입력하세요.",
        }}
        onChangeState={onChangeState}
      />
      <button onClick={handleClick} className="createRoomBtn">
        생성
      </button>
    </div>
  );
}

export default MakeRoom;
