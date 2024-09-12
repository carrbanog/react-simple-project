import { useState } from "react";
import Search from "../search";
import { useEffect } from "react";



export default function Weather(){
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchWeatherData(params) {
    setLoading(true);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=b02c6609fdfe21b1822368ed5d251182`)
    const data = await response.json();
  }

  useEffect(() => {
    fetchWeatherData("daegu")
  }, [])


  function handleSearch(search){
    fetchWeatherData(search)
  }

  return(
    <div>
      <Search 
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      
    </div>
  )
}