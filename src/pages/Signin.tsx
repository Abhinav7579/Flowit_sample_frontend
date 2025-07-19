import SubHeading from "../components/Subheading"
import  Button  from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import BottomWarning from "../components/Bottomwarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Signin() {    
    const navigate=useNavigate();
     const [username,setusername]=useState("");
    const [password,setpassword]=useState("");

    const handleSignin = async () => {
    try {
      const response = await axios.post("https://flowbit.onrender.com/api/v1/user/signin", {
        email:username,
        password:password,
      });
        
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("signin successful")
        navigate("/dashboard");
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      alert("Signin failed");
    }
  };


    return <div className="bg-blue-100 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        
        <Inputbox label={"Email"} placeholder="abhi@gmail.com"  onChange={(e)=>{setusername(e.target.value)}} />
        <Inputbox label={"Password"}  placeholder="123456"  onChange={(e)=>{setpassword(e.target.value)}} />
        <div className="pt-4">
          <Button label={"Sign in"} onClick={handleSignin} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/Signup"} />
      </div>
    </div>
  </div>
}