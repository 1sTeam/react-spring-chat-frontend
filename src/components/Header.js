import {
  AiOutlineClose,
  AiOutlineEllipsis,
  AiOutlineLeft,
  AiOutlineCheck,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";

function Header({ title, backBtn, etcBtn }) {
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className={`top ${etcBtn ? "" : "unseen"}`}>
      <button className={`back ${backBtn ? "" : "unseen"}`} onClick={goBack}>
        {title === "Make Room" ? <AiOutlineClose /> : <AiOutlineLeft />}
      </button>
      <div className={`headerTitle ${etcBtn ? "" : "unseen"}`}>{title}</div>
      <button className={`etc ${etcBtn ? "" : "unseen"}`} onClick={goBack}>
        <AiOutlineEllipsis />
      </button>
    </div>
  );
}

export default Header;
