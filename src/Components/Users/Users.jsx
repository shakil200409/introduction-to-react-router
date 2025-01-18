import { useLoaderData } from "react-router-dom";
import User from "../User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <p>Fantastic and Vodro users</p>
      <div className="users-container">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
