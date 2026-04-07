import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Register() {

const [data, setData] = useState({
name:"",
email:"",
password:"",
role:"ADMIN"
});

const navigate = useNavigate();

const handleRegister = async () => {
await API.post("/auth/register", data);
alert("Registered successfully");
navigate("/");
};

return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
<div className="bg-white p-6 rounded shadow w-80">

<h2 className="text-2xl font-bold mb-4">Register</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Name"
onChange={(e)=>setData({...data,name:e.target.value})}
/>

<input
className="border p-2 w-full mb-3"
placeholder="Email"
onChange={(e)=>setData({...data,email:e.target.value})}
/>

<input
className="border p-2 w-full mb-3"
placeholder="Password"
type="password"
onChange={(e)=>setData({...data,password:e.target.value})}
/>

<button
className="bg-blue-500 text-white w-full p-2 rounded"
onClick={handleRegister}
>
Register
</button>

</div>
</div>
);

}

export default Register;
