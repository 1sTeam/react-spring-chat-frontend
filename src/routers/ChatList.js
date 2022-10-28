import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ChatListItem from "../components/ChatListItem";
import Style from "../css/ChatList.css";

function ChatList() {
  const [chatInfo, setChatInfo] = useState([
    {
      chatRoomName: "user1",
      currentTalk: "배고파",
      isChecked: false,
    },
    {
      chatRoomName: "user2",
      currentTalk: "안배고파",
      isChecked: false,
    },
    {
      chatRoomName: "user3",
      currentTalk: "집 갈래",
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
      <div className="chatList">
        {chatInfo.map((g) => (
          <ChatListItem
            key={g.chatRoomName}
            chatRoomName={g.chatRoomName}
            currentTalk={g.currentTalk}
            isChecked={g.isChecked}
          />
        ))}
      </div>
      <button id="btnMake">+</button>
    </div>
  );
}

export default ChatList;
