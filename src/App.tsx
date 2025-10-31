import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>
      <h1>Vite + React + SWC + TS</h1>
      <p>프로젝트가 성공적으로 생성되었습니다.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        count: {count}
      </button>
    </div>
  );
}


