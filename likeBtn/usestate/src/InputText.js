import { useState } from 'react';

export default function InputText() {
  const [input, setInput] = useState();
  function inputBox(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={inputBox}></input>
      <div>{input}</div>
    </div>
  );
}

// 버튼으로 하는 방법
// const inputText = (e) => {
//   setInput(document.querySelector('input').value);
//   e.preventDefault();
// };
