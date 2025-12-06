// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("user"); // default role user
  const [isLogin, setIsLogin] = useState(true); // Login / Register toggle

  const navigate = useNavigate(); // Redirect ke liye hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Role ke hisaab se redirect
    if(role === "user"){
      navigate("/user");
    } else {
      navigate("/seller");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>

      {/* Role select buttons */}
      <button onClick={() => setRole("user")}>User {role==="user"?"✔":""}</button>
      <button onClick={() => setRole("seller")}>Seller {role==="seller"?"✔":""}</button>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Password" required />
        {/* Mobile number optional, use if needed */}
        {/* <input type="tel" placeholder="Mobile No" pattern="[0-9]{10}" required /> */}
        <button type="submit">{isLogin ? `Login as ${role}` : `Register as ${role}`}</button>
      </form>

      {/* Toggle text */}
      <p style={{marginTop:"10px"}}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span 
          style={{color:"blue", cursor:"pointer"}} 
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Register" : "Login"}
        </span>
      </p>
    </div>
  );
}



