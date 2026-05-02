// components/ProfileCard.jsx
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import ActionButton from "./ActionButton";

function ProfileCard() {
  return (
    <div style={styles.card}>
      <Avatar />
      <UserInfo />
      <ActionButton />
    </div>
  );
}

const styles = {
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default ProfileCard;