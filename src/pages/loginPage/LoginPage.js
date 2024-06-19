import React, { useState } from "react";
import pms from "../../data/images/pms.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [credentials, setCredentials] = useState({username:"",password:""});
  const navigate = useNavigate();

  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
}

  const handleLogin = async () => {
    
    try {
      const response = await axios.post("https://merchandise-edt-les-crossing.trycloudflare.com/login/", {
       username : credentials.username,
       password: credentials.password 
      },{
        headers: {
            "Content-Type": "application/json"
        }
    });

      console.log("Login response:", response.data);
      const data = response.data;
     
      
        if (data.role === "Hospital_Owner") {
          localStorage.setItem("authToken", data.access);
          localStorage.setItem("username", credentials.username);
          localStorage.setItem("role", data.role);
          navigate("/hospital-owner-dashboard");
        } else {
        alert("You are not authorized to access this dashboard.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div className="hidden md:block lg:w-1/2 bg-cover bg-blue-700 object-cover">
          <img src={pms} className="object-cover h-full" alt="loginimg"></img>
        </div>
        <div className="w-full p-8 lg:w-1/2 bg-blue-50">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              name="username" value={credentials.username}
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              name="password" value={credentials.password}
              onChange={onChange}
              required
            />
            <a
              href="/forgot"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button
              onClick={handleLogin}
              className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/register"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don't have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginPage;





