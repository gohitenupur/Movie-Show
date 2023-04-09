import React from "react";
import "../styles/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Error from "./pages/Error";
import Movies from "./pages/Movies";
import Genre from "./pages/Genre";
// import SeatSelection from "./pages/SeatSelection";
import MovieDescription from "./pages/MovieDescription";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/genre" element={<Genre />} />
        {/* <Route path="/movie/selectSeat" element={<SeatSelection />} /> */}
        <Route path="/movie/:id" element={<MovieDescription/>} />
      </Routes>
    </>
  );
};

export default App;
