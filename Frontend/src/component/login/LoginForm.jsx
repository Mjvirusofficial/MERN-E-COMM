// import { useState } from "react";
// import { useParams } from "react-router-dom";

// export default function LoginForm() {
//   const { type } = useParams();   // <-- FIXED
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const handleSubmit = () => {
//     alert(`Sending OTP to ${number} for ${type}`);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>{type === "user" ? "User Login" : "Seller Login"}</h2>

//       <input 
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//       /><br/><br/>

//       <input 
//         type="number"
//         placeholder="Enter Mobile Number"
//         value={number}
//         onChange={e => setNumber(e.target.value)}
//       /><br/><br/>

//       <button onClick={handleSubmit}>Send OTP</button>
//     </div>
//   );
// }
