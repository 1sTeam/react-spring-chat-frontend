import "../css/AccInfoInput.css";

function AccInfoInput({ title, name, onChangeState }) {
  return (
    <div className="AccountInfo">
      <div className="detailTitle">{title}</div>
      <input
        className="detailInput"
        type={name === "password" ? "password" : "text"}
        name={name}
        autoComplete="off"
        onChange={onChangeState}
      />
    </div>
  );
}

export default AccInfoInput;
