'use client';

import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(previousCount => previousCount + 1);
  };

  return (
    <div>
      <h1>Hooks</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
