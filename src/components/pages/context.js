import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=68026e07f1d9513ae3e3ddacdfe4954b`;

// context(wairhouse)
const AppContext = React.createContext();

// we need to create to provider function
const AppProvider = ({ children }) => {
const [isLoading,setIsLoading]=useState(true);
const [movie,setMovie] =useState([]);
const [isError,setIsError]=useState({show:"false",msg:""});
// const [query,setQuery] =useState("Plane");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if(data.Response==='true'){
        setIsLoading(false)
        setMovie(data.results)
      }else{
        setIsError({
          show:true,
          msg:data.error,
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${API_URL}`);
  },[]);
  return <AppContext.Provider value={{isError,isLoading,movie}}>{children}</AppContext.Provider>;
};

// use globle custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
