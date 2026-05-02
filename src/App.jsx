import UserList from "./components/functional-components/userList";

const App = () => {
  const users = [
    { id: 1, name: "Gautam", age: 22 },
    { id: 2, name: "Rahul", age: 25 },
  ];

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;