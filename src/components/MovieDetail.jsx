import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { MOVIE_DETAIL_URL } from "../API";
import noPoster from "../assets/no-poster.jpg";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAIL_URL}/${id}`)
      .then((res) => {
        setMovieDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="detail-section">
      <div className="movie-details">
        <div className="movie-detail-img">
          {movieDetail.image ? (
            <img src={movieDetail.image.original} alt="" />
          ) : (
            <img src={noPoster} alt="" />
          )}
        </div>
        <div>
          <div className="movie-detail-title">
            <span>Title:</span> {movieDetail.name}
          </div>
          <div className="movie-detail-summary">
            <span>Summary:</span> {movieDetail.summary}
          </div>
          <div className="movie-detail-language">
            <span>Language:</span> {movieDetail.language}
          </div>
          <div className="movie-detail-premiered">
            {movieDetail.premiered ? (
              <>
                <span>Premiered:</span> {movieDetail.premiered}
              </>
            ) : (
              <>
                <span>Premiered:</span> Not Available
              </>
            )}
          </div>
          <div className="movie-detail-rating">
            {movieDetail.rating && movieDetail.rating.average > 0 ? (
              <>
                <span>Rating:</span> {movieDetail.rating.average}
              </>
            ) : (
              <>
                <span>Rating:</span> 0.0
              </>
            )}
          </div>
          <div className="book-ticket-btn">
            <Link to={"/book/" + movieDetail.id}>Book movie ticket</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
