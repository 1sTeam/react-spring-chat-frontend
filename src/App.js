import { Route, Routes } from "react-router-dom";
import Login from "./routers/Login";
import SignUp from "./routers/SignUp";
import ChatList from "./routers/ChatList";
import ChatRoom from "./routers/ChatRoom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatList />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signUp" element={<SignUp />}></Route>
        <Route path="chatRoom" element={<ChatRoom />}></Route>
      </Routes>
    </div>
  );
}

export default App;
