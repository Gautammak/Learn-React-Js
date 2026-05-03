import Button from "./components/react-props-data-flow/Buttton";
import Card from "./components/react-props-data-flow/Card";

function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div style={{ display: "flex" }}>
      
      <Card title="User 1">
        <p>Name: Gautam</p>
        <Button text="Follow" color="green" onClick={handleClick} />
      </Card>

      <Card title="User 2">
        <p>Name: Rahul</p>
        <Button text="Message" color="purple" onClick={handleClick} />
      </Card>

    </div>
  );
}

export default App;