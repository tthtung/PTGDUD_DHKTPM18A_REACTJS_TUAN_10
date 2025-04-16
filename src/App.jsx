import "./App.css";
import ChangeValue_UseReducer from "./components/ChangeValue_UseReducer";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import ChangeValue_Redux from "./components/ChangeValue_Redux";

function App() {

  return (
    <>
      {/* <ChangeValue_UseReducer /> */}
      <Provider store={store}>
        <ChangeValue_Redux />
      </Provider>
    </>
  );
}

export default App;
