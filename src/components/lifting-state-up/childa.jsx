// components/ChildA.js
export default function ChildA({ count, onIncrement }) {
  return (
    <div>
      <h3>Child A</h3>
      <p>Count: {count}</p>

      <button onClick={onIncrement}>
        Increment from Child A
      </button>
    </div>
  );
}