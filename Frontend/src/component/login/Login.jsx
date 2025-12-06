// Login.jsx
import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("user"); // default role user

  return (
    <div>
      <h2>Login</h2>

      {/* Role select buttons */}
      <button onClick={() => setRole("user")}>User {role==="user"?"✔":""}</button>
      <button onClick={() => setRole("seller")}>Seller {role==="seller"?"✔":""}</button>

      {/* Simple form with Name and Mobile */}
      <form>
        <input type="text" placeholder="Name" required /> {/* Name field */}
        <input type="tel" placeholder="Mobile No" pattern="[0-9]{10}" required /> {/* 10 digit mobile */}
        <button type="submit">Login as {role}</button> {/* Shows selected role */}
      </form>
    </div>
  );
}
