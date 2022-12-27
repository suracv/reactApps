import React from "react";
import { useUser } from "../contextt/UserContext";

function User() {
  const { user, setUser } = useUser();
  return <div>active user: {user}</div>;
}

export default User;
