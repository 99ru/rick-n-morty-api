// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import SearchField from "./components/search/SearchField";
import Cards from "./components/cards/Cards";
import Filter from "./components/filter/Filter";
import Pagination from "@mui/material/Pagination";

const URL = "https://rickandmortyapi.com/api/character/";

function App() {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [planet, setPlanet] = useState("");
  const [species, setSpecies] = useState("");
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setPage(1);
  }, [status, gender, planet, species]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${URL}?name=${search}&status=${status}&gender=${gender}&origin=${planet}&species=${species}&page=${page}`
      );
      setCharacters(result.data.results);
      setTotalPages(Math.ceil(result.data.info.count / 20));
    };

    fetchData();
  }, [search, status, gender, planet, species, page]);

  return (
    <>
      <Header />
      {/* <Hero /> */}
      <SearchField setSearch={setSearch} />
      <Filter
        setGender={setGender}
        setStatus={setStatus}
        setPlanet={setPlanet}
        setSpecies={setSpecies}
      />
      <Cards characters={characters} />
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
        className="pagination"
        color="primary"
      />
    </>
  );
}

export default App;
