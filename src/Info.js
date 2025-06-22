import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Info = ({ movies, searchTerm, setSearchTerm }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.movietitle === decodeURIComponent(title));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="info-page">
        <img
          src={movie.moviemainphoto.replace("./", "/")}
          alt={movie.movietitle}
        />
        <div className="movie-details">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>

          <h1>
            {movie.movietitle} ({movie.movieyear})
          </h1>

          <p>
            <strong>Director:</strong> {movie.moviedirector}
          </p>

          {/* Genre Tags */}
          <div className="genre-tags">
            <strong>Genres:</strong>
            <div className="genres-container">
              {movie.moviegenres.map((genre, index) => (
                <div className="genre-box" key={index}>
                  {genre}
                </div>
              ))}
            </div>
          </div>

          <p>
            <strong>Story:</strong> {movie.moviestory}
          </p>

          {/* ✅ Newly added runtime and country */}
          {movie.movieruntime && (
            <p>
              <strong>Runtime:</strong> {movie.movieruntime}
            </p>
          )}
          {movie.moviecountry && (
            <p>
              <strong>Country:</strong> {movie.moviecountry}
            </p>
          )}

          {movie.moviebudget && (
            <p>
              <strong>Budget:</strong> {movie.moviebudget}
            </p>
          )}
          <p>
            <strong>Box Office:</strong> {movie.movieboxoffice}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
