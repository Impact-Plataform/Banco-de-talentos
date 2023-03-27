import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";

function MainPage() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const { data } = await axios.get("https://swapi.py4e.com/api/people/");

    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="main-page">
      <Header />
      <Card movieData={characters} />
    </div>
  );
}

export default MainPage;