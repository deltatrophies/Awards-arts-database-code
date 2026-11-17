import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [serverMessage, setServerMessage] = useState("Connecting...");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");0

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/health"
        );
        console.log(response);
        setServerMessage(response.data.message);
      } catch (error) {
        console.error("Backend connection failed:", error);
        setServerMessage("Backend connection failed");
      } finally {
        setLoading(false);
      }
    };

    checkServer();
  }, []);

  const fetchData  = async () => {
    try{
      const data =  await axios.get()

    }catch(error){
      console.log("Error in Fetching Data from DataBase");
    }
  }

  return (
    <div>
      <h1>BACKEND API</h1>

      <h2>Frontend: React is running</h2>

      <h3>
        Backend: {loading ? "Connecting..." : serverMessage}
      </h3>
    </div>
  );
}

export default App;