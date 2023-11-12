"use client";
import { useEffect } from "react";

function Users() {
  useEffect(() => {
    alert('Loaded!');
  }, []);
  return (
    <div>Users</div>
  );
}

export default Users;