import React from "react";

function Dashboard({ onLogout }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
