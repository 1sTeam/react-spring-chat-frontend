import { Route, Routes } from "react-router-dom";
import Intro from "./routers/Intro";
import Login from "./routers/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
      </Routes>
    </div>
  );
}

export default App;
