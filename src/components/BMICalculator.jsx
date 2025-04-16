import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInput, calculateResult } from "../components/redux_toolkit/bmiSlice";

export default function BMICalculator() {
  const { height, weight, result } = useSelector((state) => state.bmi);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInput({ field: e.target.name, value: e.target.value }));
  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>BMI Calculator</h2>
      <div>
        <label>Chiều cao (cm):</label>
        <input
          type="number"
          name="height"
          value={height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Cân nặng (kg):</label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={handleChange}
        />
      </div>
      <button onClick={() => dispatch(calculateResult())} style={{ marginTop: 10 }}>
        Tính BMI
      </button>
      {result && (
        <div style={{ marginTop: 10, fontWeight: "bold" }}>{result}</div>
      )}
    </div>
  );
}
