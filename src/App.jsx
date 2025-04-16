import "./App.css";
import ChangeValue_UseReducer from "./components/ChangeValue_UseReducer";
import { Provider } from "react-redux";
// import store from "./components/redux/store";
import store from "./components/redux_toolkit/store";
import ChangeValue_Redux from "./components/ChangeValue_Redux";
import ChangeValue_ReduxToolkit from "./components/ChangeValue_ReduxToolkit";
import TodoApp from "./components/TodoApp";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      {/* <ChangeValue_UseReducer /> */}

      {/* <Provider store={store}>
        <ChangeValue_Redux />
      </Provider> */}

      <Provider store={store}>
        {/* <ChangeValue_ReduxToolkit /> */}
        {/* <TodoApp /> */}
        <ThemeToggle />
      </Provider>
    </>
  );
}

export default App;
