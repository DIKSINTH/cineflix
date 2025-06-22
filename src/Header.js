import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={() => navigate("/")}>Search</button>
    </header>
  );
};

export default Header;
