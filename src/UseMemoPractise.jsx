import React, { useState, useMemo } from 'react';

function ProductList({ products, filterText }) {
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    // 重新計算只有在products 或 filterText 改變時
    return products.filter(product =>
      product.name.includes(filterText)
    );
  }, [products, filterText]); // 只有當 products 或 filterText 改變時才重新過濾

  return (
    <div>
      {filteredProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

function UseMemoPractise() {
  const [count, setCount] = useState(0);
  const products = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];
  const [filter, setFilter] = useState('');

  const handleCount = () => {
    console.log('Rendering Input Function');
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment Count</button>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter products"
      />
      <ProductList products={products} filterText={filter} />
    </div>
  );
}

export default UseMemoPractise;