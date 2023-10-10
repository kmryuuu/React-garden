import React from 'react';

export default function MoodListItem(props) {
  function onClickItem() {}
  return (
    <li>
      <button onClick={onClickItem}>기분이 {props.setMood}</button>
    </li>
  );
}
