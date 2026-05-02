const UserCard = ({ name, age }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;