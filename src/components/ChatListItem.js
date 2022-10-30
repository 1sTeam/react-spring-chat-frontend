import "../css/ChatListItem.css";
import { useNavigate } from "react-router-dom";

function ChatListItem({ chatRoomName, currentTalk, currentChat, isChecked }) {
  const navigate = useNavigate();
  const goChatRoom = () => {
    navigate("/ChatRoom");
  };
  return (
    <div className="chatRoomInfo" onClick={goChatRoom}>
      <div>
        <div className="chatRoomName">{chatRoomName}</div>
        <div className="currentTalk">{currentTalk}</div>
      </div>
      <div className="chatOption">
        <div className="currentTime">{currentChat}</div>
        <div className={`alarm ${isChecked ? "checked" : ""}`}></div>
      </div>
    </div>
  );
}

export default ChatListItem;
