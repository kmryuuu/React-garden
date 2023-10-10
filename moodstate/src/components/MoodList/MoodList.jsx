import React from 'react';
import MoodListItem from '../MoodListItem/MoodListItem';

export default function MoodList(props) {
  console.log(props);
  const moodData = ['좋아요!', '정말 좋아요!', '최고에요!', '미쳤어요!!'];

  return (
    <ul>
      {moodData.map((moodel, i) => (
        <MoodListItem key={i} moodel={moodel} setMood={props.setMood} />
      ))}
    </ul>
  );
}
