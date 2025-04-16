import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChangeValue_UseReducer from "./components/ChangeValue_UseReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChangeValue_UseReducer />
    </>
  );
}

export default App;
