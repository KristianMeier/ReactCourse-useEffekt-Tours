import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  // Set usestates
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //Fetch tours
  //try: resposen, tours setLoading, setTours
  //catch:
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //useEffect, FetchTours
  useEffect(() => {
    fetchTours();
    console.log(tours);
  }, []);

  //If loading, laoding
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  //return Tours
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
