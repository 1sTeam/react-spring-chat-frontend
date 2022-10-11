import { useEffect } from "react";
import { AiOutlineEllipsis, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from "../css/Header.css";

function Header({ title, backBtn, etcBtn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!backBtn) {
    }
  }, []);

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div id="top">
      <button className="back" onClick={goBack}>
        <AiOutlineLeft />
      </button>
      <div>{title}</div>
      <button className="etc">
        <AiOutlineEllipsis />
      </button>
    </div>
  );
}

export default Header;
