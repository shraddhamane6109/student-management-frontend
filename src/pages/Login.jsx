import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", data);

      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/dashboard");

    } catch (error) {
      alert("Invalid credentials");
    }
  };
return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">

<div className="bg-white p-6 rounded shadow w-80">

<h2 className="text-2xl font-bold mb-4">Login</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Email"
onChange={(e)=>setData({...data,email:e.target.value})}
/>

<input
className="border p-2 w-full mb-3"
type="password"
placeholder="Password"
onChange={(e)=>setData({...data,password:e.target.value})}
/>

<button
className="bg-green-500 text-white w-full p-2 rounded"
onClick={handleLogin}
>
Login
</button>

<p className="mt-3 text-sm">
<Link to="/register" className="text-blue-500">
Create account
</Link>
</p>

</div>

</div>
);

 
}

export default Login;
