import MoodList from './components/MoodList/MoodList';
import DisplayMood from './components/DisplayMood/DisplayMood';

import React, { useState } from 'react';

const [mood, setMood] = useState('');

function App() {
  return (
    <div>
      <MoodList setMood={setMood} />
      <DisplayMood mood={mood} />
    </div>
  );
}

export default App;
