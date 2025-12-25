import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";


function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate login: username = "admin", password = "1234"
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}



export default WelcomeMessage;
