import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MOVIE_DETAIL_URL } from "../API";
import noPoster from "../assets/no-poster.jpg";

const BookMovieTicket = () => {
  const [movieData, setMovieData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAIL_URL}/${id}`)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="book-ticket-section">
      <div className="book-ticket">
        <h3>Fill Booking Details</h3>
        <div className="movie-image">
          {movieData.image ? (
            <img src={movieData.image.original} alt="" />
          ) : (
            <img src={noPoster} alt="" />
          )}
        </div>
        <form action="">
          <div>
            <label>Movie Name:</label>
            <input type="text" defaultValue={movieData.name} disabled />
          </div>
          <div>
            <label>Your Name:</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Pick Booking Date:</label>
            <input type="date" />
          </div>
          <div className="book">
            <button>Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookMovieTicket;
