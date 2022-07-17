import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  // 1. Set usestates
  const [loading, setLoading] = useState(true);
  const [tours, SetTours] = useState([]);

  //4. Fetch tours
  //setLoading, true
  //try: resposen: fetch url, tours setLoading, setTours
  //catch:
  //error setLoading

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      SetTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  //5. useEffect, FetchTours
  useEffect(() => {
    fetchTours();
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
