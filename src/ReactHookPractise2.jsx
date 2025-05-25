import React, { useState, useMemo, useEffect } from "react";

const ReactHookPractise2 = () => {
  const [keyword, setKeyword] = useState("");
  const [items] = useState(["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"]);

  // useMemo：當 keyword 或 items 改變時才重新過濾，否則使用上次的結果
  const filteredItems = useMemo(() => {
    console.log("🔍 重新計算過濾結果...");
    return items.filter(item =>
      item.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [keyword, items]);

  // useEffect：每次 filteredItems 改變時，更新結果
  useEffect(() => {
    setTimeout(() => {
        console.log(`搜尋結果：${filteredItems.length} 項`);
    }, 1000)
  }, [filteredItems]);

  return (
    <div>
      <h2>搜尋水果</h2>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="輸入關鍵字"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactHookPractise2;