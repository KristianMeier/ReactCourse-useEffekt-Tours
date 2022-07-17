import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  //1. set useStates loading og tours
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //4. Fetch tours
  //setLoading, true
  //try: resposen: fetch url, tours setLoading, setTours
  //catch:
  //error setLoading

  const fetchTours = async () => {
    setLoading(true);
    try {
      const repsonse = await fetch(url);
      const tours = await repsonse.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //5. useEffect, FetchTours
  useEffect(() => {
    fetchTours();
    console.log(tours);
  }, []);

  //2. If loading, laoding

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  //3. return Tours

  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
