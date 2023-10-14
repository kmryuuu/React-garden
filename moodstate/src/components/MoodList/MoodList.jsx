import React from 'react';
import MoodListItem from '../MoodListItem/MoodListItem';

export default function MoodList(props) {
  const moodMenu = ['좋아요!', '정말 좋아요!', '최고에요!', '미쳤어요!'];

  return (
    <ul>
      {moodMenu.map((moodEl, i) => (
        <MoodListItem key={i} moodEl={moodEl} setMood={props.setMood} />
      ))}
    </ul>
  );
}
