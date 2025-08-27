import { useState, useEffect } from "react";
import "./App.css";
import { generatePassword } from "./passwordGenerator";

function App() {
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword(generatePassword());
  }, []);

  return (
    <div>
      <p
        style={{
          fontSize: "48px",
          fontFamily: "monospace",
          fontWeight: "900",
          padding: "80px 40px",
          background:
            "linear-gradient(45deg, #1a1a2e, #16213e, #0f3460, #533483, #7209b7, #2d1b69)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 6s ease infinite",
          border: "2px solid #333",
          borderRadius: "12px",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
        }}
      >
        {password}
      </p>
    </div>
  );
}

export default App;
