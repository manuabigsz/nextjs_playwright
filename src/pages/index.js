import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Contador</h1>
      <p data-testid="counter">{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      {/* simulando erro */}
      {/* <button onClick={() => setCount(count + 2)}>Incrementar</button> */}

    </main>
  );
}
