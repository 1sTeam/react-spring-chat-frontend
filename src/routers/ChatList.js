import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ChatListItem from "../components/ChatListItem";
import ChatListBar from "../components/ChatListBar";
import Style from "../css/ChatList.css";

function ChatList({ setNowChatRoomName, setNowChatRoomuuid }) {
  const [roomCount, setRoomCount] = useState(0);
  const [chatList, setChatList] = useState([]);

  const navigate = useNavigate();
  const [signedUp, setSignedUp] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
    }
    if (!signedUp) {
      navigate("/login");
    }

    axios
      .get("http://54.215.135.43:8080/api/chat/rooms")
      .then((res) => {
        console.log(res);
        setChatList(res.data.data);
        JSON.stringify(chatList);
      })
      .then(() => {
        console.log(chatList);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setRoomCount(chatList.length);
  }, [chatList]);

  const goMakeRoom = () => {
    navigate("/makeRoom");
  };

  return (
    <div style={Style}>
      <Header title="Whatsup" backBtn={false} etcBtn={true} />
      <ChatListBar roomCount={roomCount} />
      <div className="chatList">
        {chatList.map((chat) => (
          <ChatListItem
            key={chat.name}
            chatRoomName={chat.name}
            roomUuid={chat.uuid}
            setNowChatRoomName={setNowChatRoomName}
            setNowChatRoomuuid={setNowChatRoomuuid}
          />
        ))}
      </div>
      <button className="btnMake" onClick={goMakeRoom}>
        +
      </button>
    </div>
  );
}

export default ChatList;
