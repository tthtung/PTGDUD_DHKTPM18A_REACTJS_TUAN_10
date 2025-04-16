import "./App.css";
import ChangeValue_UseReducer from "./components/ChangeValue_UseReducer";
import { Provider } from "react-redux";
// import store from "./components/redux/store";
import store from "./components/redux_toolkit/store";
import ChangeValue_Redux from "./components/ChangeValue_Redux";
import ChangeValue_ReduxToolkit from "./components/ChangeValue_ReduxToolkit";
import TodoApp from "./components/TodoApp";
import ThemeToggle from "./components/ThemeToggle";
import Cart from "./components/Cart";
import Auth from "./components/Auth";
import Users from "./components/Users";
import Counter from "./components/Counter";
import BMICalculator from "./components/BMICalculator";
import EventManager from "./components/EventManager";

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
        {/* <ThemeToggle /> */}
        {/* <Cart /> */}
        {/* <Auth /> */}
        {/* <Users /> */}
        {/* <Counter /> */}
        {/* <BMICalculator /> */}
        <EventManager />
      </Provider>
    </>
  );
}

export default App;
