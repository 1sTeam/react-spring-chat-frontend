import { Route, Routes } from "react-router-dom";
import Login from "./routers/Login";
import SignUp from "./routers/SignUp";
import ChatList from "./routers/ChatList";
import ChatRoom from "./routers/ChatRoom";
import MakeRoom from "./routers/MakeRoom";
import MyPage from "./routers/MyPage";
import { useState } from "react";

function App() {
  const [nowChatRoomName, setNowChatRoomName] = useState("");
  const [nowChatRoomuuid, setNowChatRoomuuid] = useState("");
  const pathNames = ["/", "login", "signUp", "chatRoom", "makeRoom", "myPage"];
  const components = [
    <ChatList
      setNowChatRoomName={setNowChatRoomName}
      setNowChatRoomuuid={setNowChatRoomuuid}
    />,
    <Login />,
    <SignUp />,
    <ChatRoom
      nowChatRoomName={nowChatRoomName}
      nowChatRoomuuid={nowChatRoomuuid}
    />,
    <MakeRoom />,
    <MyPage />,
  ];
  return (
    <Routes>
      {pathNames.map((path, index) => (
        <Route key={`path_${index}`} path={path} element={components[index]} />
      ))}
    </Routes>
  );
}

export default App;
