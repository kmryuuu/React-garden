import React from 'react';

export default function MoodListItem(props) {
  const onClickMood = () => {
    props.setMood(props.mood);
  };

  return (
    <li>
      <button onClick={onClickMood}>기분이 {props.mood}</button>
    </li>
  );
}
