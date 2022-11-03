import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ChatListItem from "../components/ChatListItem";
import ChatListBar from "../components/ChatListBar";
import Style from "../css/ChatList.css";

function ChatList() {
  const [roomCount, setRoomCount] = useState(3);
  const [chatList, setChatList] = useState([]);

  const navigate = useNavigate();
  const [signedUp, setSignedUp] = useState(true);

  if (localStorage.getItem("accessToken") === null) {
  }

  useEffect(() => {
    if (!signedUp) {
      navigate("/login");
    }

    axios
      .get("http://54.215.135.43:8080/api/chat/rooms")
      .then((res) => {
        console.log(res);
        setChatList(res.data.data);
        JSON.stringify(chatList);
        setRoomCount(chatList.length);
      })
      .then(() => console.log(chatList))
      .catch((err) => console.log(err));
  }, []);

  const goMakeRoom = () => {
    navigate("/makeRoom");
  };

  return (
    <div style={Style}>
      <Header title="Whatsup" backBtn={false} etcBtn={false} />
      <ChatListBar roomCount={roomCount} />
      <div className="chatList">
        {chatList.map((chat) => (
          <ChatListItem key={chat.name} chatRoomName={chat.name} />
        ))}
      </div>
      <button className="btnMake" onClick={goMakeRoom}>
        +
      </button>
    </div>
  );
}

export default ChatList;
