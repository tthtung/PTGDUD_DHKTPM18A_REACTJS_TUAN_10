import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../components/redux_toolkit/counterSlice";

export default function ChangeValue_ReduxToolkit() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux toolkit</h1>
      <h1>Giá trị hiện tại {count}</h1>
      <button onClick={() => dispatch(increment())}>INCREASE</button>
      <button onClick={() => dispatch(decrement())}>DECREASE</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
}
