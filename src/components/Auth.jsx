import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../components/redux_toolkit/authSlice";

export default function Auth() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login({ username }));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ padding: 20 }}>
      {isLoggedIn ? (
        <div>
          <h2>👋 Chào mừng, {user.username}!</h2>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>🔐 Đăng nhập</h2>
          <input
            type="text"
            placeholder="Tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit" style={{ marginLeft: 10 }}>
            Đăng nhập
          </button>
        </form>
      )}
    </div>
  );
}
