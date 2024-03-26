// App.jsx
import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

function App() {
  const [filtro, setFiltro] = useState("");

  const handleFilterChange = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  return (
    <>
      <Header onFilterChange={handleFilterChange} />
      <Banner />
      <ProductsSection filtro={filtro} />
      <Footer />
    </>
  );
}

export default App;
