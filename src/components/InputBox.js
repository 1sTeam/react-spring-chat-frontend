function InputBox({ box, onChangeState }) {
  return (
    <div>
      <label htmlFor={box.inputName}>{box.text}</label>
      <input type={box.type} name={box.inputName} onChange={onChangeState} />
    </div>
  );
}

export default InputBox;
