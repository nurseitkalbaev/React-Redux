import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(20));
  };
  const removeBy = () => {
    dispatch(actions.removeBy(10));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={removeBy}>RemoveBy</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={addBy}>AddBy</button>
    </div>
  );
}

export default App;
