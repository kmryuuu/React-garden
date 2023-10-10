import { useState } from 'react';

export default function Name() {
  const [name, setName] = useState('Mike');

  function changeName() {
    setName(name === 'Mike' ? 'Jane' : 'Mike');
  }

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
}
