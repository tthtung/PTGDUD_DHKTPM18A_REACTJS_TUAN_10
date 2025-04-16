import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../components/redux_toolkit/counterSlideAd";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterSliceAd.count);
  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: 20 }}>
      <h2>🔢 Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>Tăng +1</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>
        Giảm -1
      </button>
      <button onClick={() => dispatch(reset())} style={{ marginLeft: 10 }}>
        Reset
      </button>

      <div style={{ marginTop: 20 }}>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button
          onClick={() => dispatch(incrementByAmount(step))}
          style={{ marginLeft: 10 }}
        >
          Tăng theo số nhập
        </button>
      </div>
    </div>
  );
}
