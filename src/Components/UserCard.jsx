import { UserContext } from "../Contexts/userContext";
import { useContext } from "react";
export default function UserCard({ user }) {
  const userValue = useContext(UserContext);
  return (
    <ul>
      <h2>{user.username}</h2>
      <button onClick={() => userValue.setLoggedInUser(user)}>Log in </button>
    </ul>
  );
}
