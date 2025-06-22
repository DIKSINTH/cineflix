import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = ({ movies, searchTerm, setSearchTerm }) => {
  const filteredMovies = movies.filter((movie) =>
    movie.movietitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <Link
            key={movie.movietitle}
            to={`/movie/${encodeURIComponent(movie.movietitle)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="movie-card">
              <img
                src={movie.moviemainphoto.replace("./", "/")}
                alt={movie.movietitle}
              />
              <div className="movie-info">
                <h2>
                  {movie.movietitle} ({movie.movieyear})
                </h2>
                <p>{movie.moviestory}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
