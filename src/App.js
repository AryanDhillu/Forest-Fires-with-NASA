import Loader from "./components/Loader";
import Map from "./components/Maps";
import { useState,useEffect } from "react";



function App() {
  const [eventData,SetEventData] = useState([])
  const [loading,setLoading] = useState(false)
  
  useEffect(()=> {
    const fetchEvent = async () => {
        setLoading(true)
        const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
        const {events} = await res.json()
        SetEventData(events)
        setLoading(false)
    }
    fetchEvent()

  },[])

  return (
    <div>
    {loading === false ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
