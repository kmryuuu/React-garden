import React from 'react';
import MoodListItem from '../MoodListItem/MoodListItem';

export default function MoodList(props) {
  const menu = ['좋아요!', '정말 좋아요!', '최고에요!', '미쳤어요!'];
  return (
    <div>
      <ul>
        {menu.map((moodEl, i) => (
          // mood : 기분의 텍스트, setMood : 현재 기분을 변경하는 함수
          <MoodListItem key={i} mood={moodEl} setMood={props.setMood} />
        ))}
      </ul>
    </div>
  );
}
