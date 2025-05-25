import React, { useState, useMemo, useCallback, useEffect } from "react";

function ReactHookPractise() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  // 1️⃣ 記住運算結果在Render前
  const sum = useMemo(() => {
    console.log("計算 sum...");
    return a + b;
  }, [a, b]);

  // 2️⃣ 記住按鈕功能在Render前
  const handleAlert = useCallback(() => {
    console.log(`你按下的總和是：${sum}`);
  }, [sum]);

  // 3️⃣ 畫面完成後更新標題在Render後
  useEffect(() => {
    console.log(`目前總和：${sum}`);
  }, [sum]);

  return (
    <div>
      <input value={a} onChange={(e) => setA(Number(e.target.value))} />
      <input value={b} onChange={(e) => setB(Number(e.target.value))} />
      <h2>總和：{sum}</h2>
      <button onClick={handleAlert}>顯示總和</button>
    </div>
  );
}

export default ReactHookPractise