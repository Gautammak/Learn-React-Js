import UserCard from "./userCard";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </>
  );
};

export default UserList;