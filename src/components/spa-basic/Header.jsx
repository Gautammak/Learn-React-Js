// components/Header.jsx
export default function Header() {
  return (
    <header style={styles.header}>
      <h2>My SPA App</h2>
    </header>
  );
}

const styles = {
  header: {
    height: "60px",
    background: "#333",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
  },
};