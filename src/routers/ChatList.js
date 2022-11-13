import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ChatListItem from "../components/ChatListItem";
import ChatListBar from "../components/ChatListBar";
import FindRoom from "../components/FindRoom";
import Style from "../css/ChatList.css";

function ChatList({ setNowChatRoomName, setNowChatRoomuuid }) {
  const [roomCount, setRoomCount] = useState(0);
  const [chatList, setChatList] = useState([]);
  const [findName, setFindName] = useState("$");
  const [backUpList, setBackUpList] = useState([]);

  const navigate = useNavigate();
  const [signedUp, setSignedUp] = useState(true);

  //채팅 방 정보 가져오기
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }

    axios
      .get("http://54.215.135.43:8080/api/chat/rooms")
      .then((res) => {
        console.log(res);
        setChatList(res.data.data);
        JSON.stringify(chatList);
        setBackUpList(res.data.data);
        JSON.stringify(backUpList);
      })
      .then(() => {
        console.log(chatList);
      })
      .catch((err) => console.log(err));
  }, []);

  //검색 기능
  useEffect(() => {
    if (findName === "$") {
      return;
    } else if (findName.length < 1) {
      setChatList(backUpList);
    } else {
      const fountRoom = backUpList.filter(
        (room) => room.name.indexOf(findName) !== -1
      );
      setChatList(fountRoom);
    }
  }, [findName]);

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
      <FindRoom setFindName={setFindName} findName={findName} />
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
