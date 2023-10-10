import React from 'react';

export default function Hello() {
  function onClickName() {
    console.log('민수');
  }
  function onClickAge() {
    console.log(20);
  }
  function showTxt(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={onClickName}>Show name</button>
      <button onClick={onClickAge}>Show age</button>
      <input type="text" onChange={showTxt} />
    </div>
  );
}
