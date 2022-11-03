import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";

function MakeRoom() {
  const [roomName, setRoomName] = useState("");

  const onChangeState = (e) => {
    setRoomName(e.target.value);
  };

  const handleClick = () => {
    axios
      .post("http://54.215.135.43:8080/api/chat/room", { name: roomName })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header title="대화상대 선택" backBtn={true} etcBtn={true} />

      <input type="text" value={roomName} onChange={onChangeState} />
      <button onClick={handleClick}>생성</button>
    </div>
  );
}

export default MakeRoom;
