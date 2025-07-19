import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-6xl md:text-7xl font-extrabold text-indigo-600 mb-8 drop-shadow-lg">
        Flowbit
      </h1>

      <p className="text-lg text-gray-600 mb-12 text-center max-w-md">
        Automate your work
      </p>

      <Button
        label={"Get Started"}
        onClick={() => navigate("/signup")}
      
      />
    </div>
  );
}
