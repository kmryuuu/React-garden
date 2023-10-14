import React from 'react';

export default function MoodListItem(props) {
  const onClickMood = () => {
    props.setMood(props.moodEl);
  };

  return (
    <li>
      <button onClick={onClickMood}>기분이 {props.moodEl}</button>
    </li>
  );
}
