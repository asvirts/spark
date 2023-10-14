"use client";

import { useEffect, useState } from "react";
import { supabase } from "./initSupabase";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data: users } = await supabase
      .from("user_id")
      .select("*")
      .order("user_id", true);
    setUsers(users);
  };

  return (
    <ul>
      {users ? (
        users.map((user) => <li key={user.id}>{user.name}</li>)
      ) : (
        <li>No users available</li>
      )}
    </ul>
  );
}
