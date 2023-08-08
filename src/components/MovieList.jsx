import React, { useState, useEffect } from "react";
import { API_URL } from "../API";
import axios from "axios";
import { useNavigate } from "react-router";

import noPoster from "../assets/no-poster.jpg";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.show.id}>
          <div className="movie-banner">
            {movie.show.image ? (
              <img src={movie.show.image.original} alt="" />
            ) : (
              <img src={noPoster} alt="" />
            )}
          </div>
          <div className="movie-title">
            <span>{movie.show.name}</span>
          </div>
          <div className="details-btn">
            <button onClick={() => navigate(`/shows/${movie.show.id}`)}>
              More Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
