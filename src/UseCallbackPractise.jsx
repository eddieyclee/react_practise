import React, { useState, useCallback } from 'react';

// 優化過的子組件，只有當 props 改變時才重新渲染
const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering Button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

function UseCallbackPractise() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 使用 useCallback 記憶 handleClick 函數
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // 依賴項為空陣列，表示函數只創建一次

  // 沒有使用 useCallback 的函數，每次 ParentComponent 渲染都會重新創建
  const handleInputChange = (e) => {
    console.log('Rendering Input Function');
    setText(e.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment Count</Button>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Text: {text}</p>
    </div>
  );
}

export default UseCallbackPractise;