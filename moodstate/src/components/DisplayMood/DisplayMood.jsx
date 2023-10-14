import React from 'react';

export default function DisplayMood(props) {
  return (
    <div>
      {props.currentMood === ''
        ? '기분을 선택해 주세요!'
        : `기분이 ${props.currentMood}`}
    </div>
  );
}
