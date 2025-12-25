import { useState } from "react";

export default function ThemeToggle() {
  // false = light mode, true = dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
    

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "40px",
        transition: "0.3s",
      }}
    >
      <button onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <p>This is a simple theme toggle example.</p>
    </div>
  );
}
