import { useEffect, useState } from "react";
import axios from "axios";

export function Status() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function fetchStatus() {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://flowbit.onrender.com/api/v1/user/ticket/status", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStatus(response.data.status);
    }

    fetchStatus();
  }, []);

  return (
    <div className=" m-4 font-bold p-2 text-xl w-[150px] h-[100px] bg-blue-500 rounded-2xl">
      <p>Status: {status}</p>
    </div>
  );
}
