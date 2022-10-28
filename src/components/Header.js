import { useEffect } from "react";
import { AiOutlineEllipsis, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from "../css/Header.css";

function Header({ title, backBtn, etcBtn }) {
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="top">
      <button className={`back ${backBtn ? "" : "unseen"}`} onClick={goBack}>
        <AiOutlineLeft />
      </button>
      <div className="headerTitle">{title}</div>
      <button className="etc">
        <AiOutlineEllipsis />
      </button>
    </div>
  );
}

export default Header;
