import MoodList from './components/MoodList/MoodList';
import DisplayMood from './components/DisplayMood/DisplayMood';

import React, { useState } from 'react';

export default function App() {
  const [currentMood, setMood] = useState('');

  return (
    <div>
      <MoodList setMood={setMood} />
      <DisplayMood currentMood={currentMood} />
    </div>
  );
}
