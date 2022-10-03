import { Route, Routes } from "react-router-dom";
import Intro from "./routers/Intro";
import Login from "./routers/Login";
import SignUp from "./routers/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
