import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
type Screen = {
  screenUrl: string;
};
export default function Dashboard() {
  const navigate=useNavigate();

  const [screens, setScreens] = useState<Screen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchScreens = async () => {
      try {
        const res = await axios.get("https://flowbit.onrender.com/api/v1/user/me/screens", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`  
          }
        });
        setScreens(res.data);
      } catch (err) {
        setError("Failed to load screens.");
      } finally {
        setLoading(false);
      }
    };

    fetchScreens();
  }, []);

  async function ticketGenerate(){
    try{
    const response=await axios.post("https://flowbit.onrender.com/api/v1/user/ticket/generate",{
         subject:"fetch data",
         description:"data is fetched from backend"
    },
   {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`  
    }
  })
    alert(response.data.message);
  }
  catch(e){
    alert("failed")
  }
    
  }
  async function ticketStatus(){
        navigate("/ticket/status");
  }

  return (
    <div className="p-4">
      <div className="bg-blue-800 p-2 rounded-2xl">
      <h1 className="text-4xl text-white flex justify-center font-bold">Flow-Bit</h1>
      </div>
       <h1 className="text-2xl font-bold mb-4">Your Screens</h1>
       <div className="flex">
      <div className="w-[150px] rounded-2xl h-screen bg-blue-100">
     
      {loading ? (
        <p className="text-gray-500 p-4">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : screens.length === 0 ? (
        <p className="text-gray-600">No screens found.</p>
      ) : (
        <ul className="space-y-2">
          {screens.map((screen, index) => (
            <li key={index} className="p-4 ">
              <span className="text-lg font-medium">{screen.screenUrl}</span>
            </li>
          ))}
        </ul>
      )}
      </div>
      <div>
        <div className="p-2">
          <Button
            label={"Generate Ticket"} onClick={ticketGenerate}/>
        </div>
      </div>
       <div className="p-2">
          <Button
            label={"View Ticket Status"} onClick={ticketStatus}/>
        </div>
      </div>

    </div>
  );
}
