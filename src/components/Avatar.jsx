// components/Avatar.jsx
function Avatar() {
  return (
    <img
      src="src\assets\react.svg"
      alt="Profile"
      style={styles.avatar}
    />
  );
}

const styles = {
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default Avatar;