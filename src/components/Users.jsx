import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../components/redux_toolkit/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h2>📋 Danh sách người dùng</h2>

      {status === "loading" && <p>Đang tải dữ liệu...</p>}
      {status === "failed" && <p style={{ color: "red" }}>Lỗi: {error}</p>}
      {status === "succeeded" &&
        users.map((user) => (
          <div key={user.id} style={{ marginBottom: 10 }}>
            <strong>{user.name}</strong> - {user.email}
          </div>
        ))}
    </div>
  );
}
