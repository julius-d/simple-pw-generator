import { useState, useEffect } from "react";
import "./App.css";
import { generatePassword } from "./passwordGenerator";

function App() {
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword(generatePassword());
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(45deg, #1a1a2e, #16213e, #0f3460, #533483, #7209b7, #2d1b69)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 6s ease infinite",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <p
        style={{
          fontSize: "clamp(24px, 8vw, 48px)",
          fontFamily: "monospace",
          fontWeight: "900",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          margin: 0,
          padding: "0 20px",
          wordBreak: "break-all",
        }}
      >
        {password}
      </p>
    </div>
  );
}

export default App;
