import { useState } from 'react';

export default function App() {
  const [like, setLike] = useState('');
  function LikeBtn() {
    if (like === '') {
      setLike('❤️‍🔥');
    } else {
      setLike('');
    }
  }

  return (
    <div>
      <button onClick={LikeBtn}>좋아요</button>
      <span>{like}</span>
    </div>
  );
}
