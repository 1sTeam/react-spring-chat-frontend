import { AiOutlineEllipsis, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <button name="back" onClick={goBack}>
        <AiOutlineLeft />
      </button>
      <div>{title}</div>
      <button>
        <AiOutlineEllipsis />
      </button>
    </div>
  );
}

export default Header;
