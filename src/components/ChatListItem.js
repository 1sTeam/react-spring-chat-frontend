import "../css/ChatListItem.css";
import { useNavigate } from "react-router-dom";

function ChatListItem({ chatRoomName, currentTalk, isChecked }) {
  const navigate = useNavigate();
  const goChatRoom = () => {
    navigate("/ChatRoom");
  };
  return (
    <div className="chatRoomInfo" onClick={goChatRoom}>
      <div>
        <div id="chatRoomName">{chatRoomName}</div>
        <div id="currentTalk">{currentTalk}</div>
      </div>
      <div className={`alarm ${isChecked ? "checked" : ""}`}>🔴</div>
    </div>
  );
}

export default ChatListItem;
