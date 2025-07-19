import SubHeading from "../components/Subheading"
import  Button  from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import BottomWarning from "../components/Bottomwarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Signup() {
    const navigate=useNavigate();
    const [firstName,setFirstName]=useState("");
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");

    return <div className="bg-blue-100 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <Inputbox label={"FirstName"} placeholder="john" onChange={(e)=>{setFirstName(e.target.value)}} />
        <Inputbox placeholder="abhi@gmail.com" label={"Email"} onChange={(e)=>{setusername(e.target.value)}} />
        <Inputbox placeholder="123456" label={"Password"}  onChange={(e)=>{setpassword(e.target.value)}}/>
        <div className="pt-4">
          <Button label={"Sign up"} onClick={async()=>{
            const response=await axios.post("https://flowbit.onrender.com/api/v1/user/signup",{
                name:firstName,
                email:username,
                password:password
            })
            console.log(response.data);
            if(response){
            alert("you have successfully signed up")
            navigate("/signin");
            }
          }} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/Signin"} />
      </div>
    </div>
  </div>
}