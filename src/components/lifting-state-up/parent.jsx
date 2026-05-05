// components/Parent.js
import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

export default function Parent() {
  const [count, setCount] = useState(0);

  // callback function passed to children
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Shared Count: {count}</p>

      <ChildA count={count} onIncrement={handleIncrement} />
      <ChildB count={count} />
    </div>
  );
}