import { useState } from "react";
import Header from "../components/Header";
import ChatBubble from "../components/ChatBubble";
import "../css/ChatRoom.css";

function ChatRoom() {
  const [chatContent, setChatContent] = useState("");
  const [count, setCount] = useState(3);
  const [nowUser, setNowUser] = useState("user1");
  const [chatLog, setChatLog] = useState([
    {
      content: "뭐해",
      sender: "user1",
      count: 1,
      time: "11:31",
    },
    {
      content: "놀아",
      sender: "user2",
      count: 2,
      time: "11:31",
    },
    {
      content:
        "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
      sender: "user2",
      count: 3,
      time: "11:32",
    },
  ]);

  const onChange = (e) => {
    setChatContent(e.target.value);
  };
  const onSubmit = (e) => {
    const newContent = {
      content: { chatContent },
      sender: { nowUser },
      count: { count },
    };
    setChatLog({ ...chatLog, newContent });
  };

  return (
    <div>
      <Header title={nowUser} backBtn={true} etcBtn={true} />
      <div className="chatLogList">
        {chatLog.map((chatLog) => (
          <ChatBubble key={chatLog.count} chatLog={chatLog} nowUser={nowUser} />
        ))}
      </div>
      <form className="chatInput" onSubmit={onSubmit}>
        <input
          className="contentInput"
          type="text"
          name="talk"
          onChange={onChange}
        />
        <input className="contentSubmit" type="submit" value=">" />
      </form>
    </div>
  );
}

export default ChatRoom;
