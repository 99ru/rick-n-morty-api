import React, { useState } from "react";

import "./App.css";
import Header from "./components/header/Header";
import SearchField from "./components/search/SearchField";
import Characters from "./components/characters/Characters";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <Hero />
      <SearchField setSearch={setSearch} />
      <Characters search={search} />
      <Footer />
    </>
  );
}

export default App;
