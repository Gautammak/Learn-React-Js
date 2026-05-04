// components/Toggle.js
import { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h3>Toggle</h3>
      <p>Status: {isOn ? "ON" : "OFF"}</p>

      <button onClick={() => setIsOn(prev => !prev)}>
        Toggle
      </button>
    </div>
  );
}