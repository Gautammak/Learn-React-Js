// components/ActionButton.jsx
function ActionButton() {
  return (
    <button style={styles.button}>
      Follow
    </button>
  );
}

const styles = {
  button: {
    marginTop: "15px",
    padding:"10px 20px",
    border:"none",
    borderRadius:"5px",
    backgroundColor:"#007bff",
    color:"#fff",
    cursor:"pointer"
   
  },
};

export default ActionButton;