// BrowserRouter → React app ko routing use karne deta hai
// Routes → Saare route ka group
// Route → Ek specific page/URL define karta hai
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
export default function App() {
  return (
    // Step 1: Pure app ko BrowserRouter ke andar wrap karte hain
    <BrowserRouter>

      {/* Step 2: Saare routes ko Routes ke andar likhte hain */}
      <Routes>

        {/*
          Step 3: "/" route ka matlab Home Page
          Abhi yaha koi component nahi hai, bas ek blank div return kar rahe
        */}
        <Route path="/" element={<Home/>} />

        {/*
          Step 4: Example of another route
          "/login" pe jaake ye simple text show hoga
        */}
        
       

      </Routes>
    </BrowserRouter>
  );
}