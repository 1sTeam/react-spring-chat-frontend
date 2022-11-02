import { AiOutlineInbox } from "react-icons/ai";
import "../css/ChatListBar.css";

function ChatListBar({ roomCount }) {
  return (
    <div className="listBar">
      <AiOutlineInbox className="barLogo" />
      <div className="barTitle">Archieved</div>
      <div className="barCount">{roomCount} </div>
    </div>
  );
}

export default ChatListBar;
