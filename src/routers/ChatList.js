import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ChatListItem from "../components/ChatListItem";
import ChatListBar from "../components/ChatListBar";
import Style from "../css/ChatList.css";

function ChatList() {
  const [roomCount, setRoomCount] = useState(3);
  const [chatInfo, setChatInfo] = useState([
    {
      chatRoomName: "user1",
      currentTalk: "배고파",
      currentTime: "11:31",
      isChecked: false,
    },
    {
      chatRoomName: "user2",
      currentTalk: "안배고파",
      currentTime: "11:31",
      isChecked: false,
    },
    {
      chatRoomName: "user3",
      currentTalk: "집 갈래",
      currentTime: "11:32",
      isChecked: true,
    },
  ]);

  const navigate = useNavigate();
  const [signedUp, setSignedUp] = useState(true);

  useEffect(() => {
    if (!signedUp) {
      navigate("/login");
    }
  }, []);

  return (
    <div style={Style}>
      <Header title="Whatsup" backBtn={false} etcBtn={false} />
      <ChatListBar roomCount={roomCount} />
      <div className="chatList">
        {chatInfo.map((g) => (
          <ChatListItem
            key={g.chatRoomName}
            chatRoomName={g.chatRoomName}
            currentTalk={g.currentTalk}
            currentChat={g.currentTime}
            isChecked={g.isChecked}
          />
        ))}
      </div>
      <button className="btnMake">+</button>
    </div>
  );
}

export default ChatList;
