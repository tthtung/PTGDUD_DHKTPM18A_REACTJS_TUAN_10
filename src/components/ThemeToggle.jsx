import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../components/redux_toolkit/themeSlice";

export default function ThemeToggle() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const isDark = mode === "dark";

  const appStyle = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>Theme: {mode}</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
