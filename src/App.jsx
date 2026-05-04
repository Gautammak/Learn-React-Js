// App.js
import Counter from "./components/state-usestate/counter";
import Toggle from "./components/state-usestate/toggle";
import FormInput from "./components/state-usestate/formInput";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>React Basic Demo</h2>

      <Counter />
      <hr />

      <Toggle />
      <hr />

      <FormInput />
    </div>
  );
}

export default App;