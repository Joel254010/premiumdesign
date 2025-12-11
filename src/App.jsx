import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Samples from "./components/Samples";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import About from "./components/About";
import CTA from "./components/CTA"; // 🔥 NOVO

export default function App() {
  // 🔥 Estado global para controle do filtro
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");

  // 🔥 Função para rolar suavemente até Samples
  const scrollToSamples = () => {
    const elemento = document.getElementById("samples");
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <Header />
      <Hero />

      {/* Seção de Categorias com filtro */}
      <Categories
        onCategoriaSelecionada={(cat) => {
          setFiltroCategoria(cat);
          scrollToSamples();
        }}
      />

      {/* Seção de artes filtráveis */}
      <Samples filtro={filtroCategoria} />

      {/* Quem Somos */}
      <About />

      {/* Importância das artes */}
      <Benefits />

      {/* CTA final de compra */}
      <CTA />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
