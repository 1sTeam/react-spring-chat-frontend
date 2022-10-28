import { Route, Routes } from "react-router-dom";
import Login from "./routers/Login";
import SignUp from "./routers/SignUp";
import ChatList from "./routers/ChatList";
import ChatRoom from "./routers/ChatRoom";

function App() {
  const pathNames = ["/", "login", "signUp", "chatRoom"];
  const components = [<ChatList />, <Login />, <SignUp />, <ChatRoom />];
  return (
    <Routes>
      {pathNames.map((path, index) => (
        <Route path={path} element={components[index]} />
      ))}
    </Routes>
  );
}

export default App;
