function Card({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        width: "250px",
        margin: "10px"
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;