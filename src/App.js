import { Route, Routes } from "react-router-dom";
import Login from "./routers/Login";
import SignUp from "./routers/SignUp";
import ChatList from "./routers/ChatList";
import ChatRoom from "./routers/ChatRoom";
import MakeRoom from "./routers/MakeRoom";

function App() {
  const pathNames = ["/", "login", "signUp", "chatRoom", "makeRoom"];
  const components = [
    <ChatList />,
    <Login />,
    <SignUp />,
    <ChatRoom />,
    <MakeRoom />,
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
