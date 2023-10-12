import DisplayMood from './components/DisplayMood/DisplayMood';
import MoodList from './components/MoodList/MoodList';
import React, { useState } from 'react';

const [currentMood, setMood] = useState('');

function App() {
  return (
    <div>
      <MoodList setMood={setMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
