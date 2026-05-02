// components/Sidebar.jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul style={styles.ul}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#f4f4f4",
    height: "calc(100vh - 60px)",
    padding: "20px",
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
};