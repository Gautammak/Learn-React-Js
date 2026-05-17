import { useState, useMemo, useRef } from "react";
import users from "./Data";

function Dashboard() {
  const [search, setSearch] = useState("");

  // useRef
  const inputRef = useRef();

  // Focus input using ref
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Expensive filtering using useMemo
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");

    // Simulate expensive operation
    for (let i = 0; i < 100000000; i++) {}

    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>

      <div style={styles.searchBox}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <button onClick={focusInput} style={styles.button}>
          Focus Input
        </button>
      </div>

      <h3>Total Users: {filteredUsers.length}</h3>

      <ul style={styles.list}>
        {filteredUsers.map((user, index) => (
          <li key={index} style={styles.item}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
    fontFamily: "Arial",
  },

  searchBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
  },

  button: {
    padding: "10px 15px",
    cursor: "pointer",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  item: {
    padding: "10px",
    border: "1px solid #ddd",
    marginBottom: "8px",
    borderRadius: "5px",
  },
};

export default Dashboard;