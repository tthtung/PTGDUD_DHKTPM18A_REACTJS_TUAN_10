import { createSlice } from "@reduxjs/toolkit";

const bmiSlice = createSlice({
  name: "bmi",
  initialState: {
    height: "", // cm
    weight: "", // kg
    result: "",
  },
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    calculateResult: (state) => {
      const heightInM = parseFloat(state.height) / 100;
      const weight = parseFloat(state.weight);
      if (!heightInM || !weight) {
        state.result = "Vui lòng nhập đúng chiều cao và cân nặng";
        return;
      }
      const bmi = weight / (heightInM * heightInM);
      let status = "";

      if (bmi < 18.5) status = "Thiếu cân";
      else if (bmi < 25) status = "Bình thường";
      else if (bmi < 30) status = "Thừa cân";
      else status = "Béo phì";

      state.result = `BMI: ${bmi.toFixed(2)} (${status})`;
    },
  },
});

export const { updateInput, calculateResult } = bmiSlice.actions;
export default bmiSlice.reducer;
