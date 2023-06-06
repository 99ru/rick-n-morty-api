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
    <div className="App">
      <Header />
      <Hero />
      <SearchField setSearch={setSearch} />
      <Characters search={search} />
      <Footer />
    </div>
  );
}

export default App;
