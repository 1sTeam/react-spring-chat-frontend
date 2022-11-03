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
    <div className="top">
      <button className={`back ${backBtn ? "" : "unseen"}`} onClick={goBack}>
        {title === "대화상대 선택" ? <AiOutlineClose /> : <AiOutlineLeft />}
      </button>
      <div className="headerTitle">{title}</div>
      <button className="etc" onClick={goBack}>
        {title === "대화상대 선택" ? <AiOutlineCheck /> : <AiOutlineEllipsis />}
      </button>
    </div>
  );
}

export default Header;
