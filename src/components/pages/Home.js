import React, { useState } from "react";

import NavBar from "./NavBar";
import Movies from "./Movies";
import Genre from "./Genre";
import '../../styles/home.css'


const Home = () => {

  const [selectedGenreId, setSelectedGenreId] = useState(null);

  const handleGenreSelect = (genreId) => {
    setSelectedGenreId(genreId);
  };
  
  return (
    <>
      <NavBar />
      {/* if search something we have to remove this container - todo */}
      <div class="container">
        <div class="flex-four">
        <Genre onSelect={handleGenreSelect} />
        </div>
        <div class="flex-eight">
        <Movies genreId={selectedGenreId} />
        </div>
      </div>
    </>
  );
};

export default Home;
