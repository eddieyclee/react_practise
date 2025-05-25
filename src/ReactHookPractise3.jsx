import React, {useState, useCallback, useMemo} from "react";

// Button元件
function Button({ onClick }) {
  console.log("🔁 Button render");
  return <button onClick={onClick}>Click me</button>;
}

const MemoButton = React.memo(Button); // 只有 props 改變才重新渲染

// cal計算function
function cal(a) {
  console.log("🔁 cal");
  return a + 1;
}

function ReactHookPractise3() {
  const [count, setCount] = useState(0);
  const value = useMemo(() => cal(count), [count]);

  // 使用 useCallback 讓函式不在每次渲染時重建
  const handleClick = useCallback(() => {
    console.log("🧠 Clicked");
  }, []);
    
  return (
    <div>
      <p>Count: {count}</p>
      <p>Value: {value}</p>
      {/*handleClick不會因為渲染時重建*/}
      <MemoButton onClick={handleClick} />
      {/*setCount後，重新渲染count會更新*/}
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
}

export default ReactHookPractise3