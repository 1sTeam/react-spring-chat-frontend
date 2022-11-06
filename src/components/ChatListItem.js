import "../css/ChatListItem.css";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

function ChatListItem({
  chatRoomName,
  setNowChatRoomName,
  setNowChatRoomuuid,
  roomUuid,
}) {
  const navigate = useNavigate();
  const goChatRoom = () => {
    setNowChatRoomName(chatRoomName);
    setNowChatRoomuuid(roomUuid);
    navigate("/ChatRoom");
  };
  return (
    <div className="chatRoomInfo" onClick={goChatRoom}>
      <BsFillPersonFill className="chatPersonIcon" />
      <div className="chatRoomContext">
        <div className="chatRoomName">{chatRoomName}</div>
      </div>
      {/* <div className="chatOption">
        <div className="currentTime">{currentChat}</div>
        <div className={`alarm ${isChecked ? "checked" : ""}`}></div>
      </div> */}
    </div>
  );
}

export default ChatListItem;
