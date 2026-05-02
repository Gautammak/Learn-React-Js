// App.jsx
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={styles.container}>
      <ProfileCard />
    </div>
  );
} 

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#812121",
  },
};

export default App;