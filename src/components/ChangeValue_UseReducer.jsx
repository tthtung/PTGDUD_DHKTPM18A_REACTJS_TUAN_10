import { useReducer } from "react";

export default function ChangeValue_UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return { ...state, count: state.count + 1 };
      case "DEC":
        return { ...state, count: state.count - 1 };
      case "RESET":
        return { ...state, count: 0 };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Giá trị hiện tại {state.count} </h1>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        INCREASE
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        DECREASE
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        RESET
      </button>
    </>
  );
}
