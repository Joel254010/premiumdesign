import { useState } from "react";
import logoFull from "../assets/logoFull.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "6px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* LOGO */}
        <img
          src={logoFull}
          alt="PremiumDesign"
          style={{
            height: "90px",
            objectFit: "contain",
          }}
        />

        {/* MENU DESKTOP */}
        <nav className="menu-desktop" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <a href="#samples" style={{ color: "#fff", fontSize: "18px" }}>Exemplos</a>
          <a href="#categories" style={{ color: "#fff", fontSize: "18px" }}>Categorias</a>
          <a href="#about" style={{ color: "#fff", fontSize: "18px" }}>Quem Somos</a>
          <a href="#benefits" style={{ color: "#fff", fontSize: "18px" }}>Importância</a>
        </nav>

        {/* BOTÃO DE MENU MOBILE */}
        <div
          className="mobile-menu-button"
          onClick={() => setMenuOpen(true)}
          style={{
            width: "38px",
            height: "32px",
            display: "none", // só aparece no mobile via CSS
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <span style={{ height: "4px", background: "#fff", borderRadius: "4px" }}></span>
          <span style={{ height: "4px", background: "#fff", borderRadius: "4px" }}></span>
          <span style={{ height: "4px", background: "#fff", borderRadius: "4px" }}></span>
        </div>
      </header>

      {/* MENU MOBILE LATERAL */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Botão fechar */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "32px",
            position: "absolute",
            right: "20px",
            top: "20px",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {/* Links do menu mobile */}
        <a href="#samples" onClick={() => setMenuOpen(false)}>Exemplos</a>
        <a href="#categories" onClick={() => setMenuOpen(false)}>Categorias</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Quem Somos</a>
        <a href="#benefits" onClick={() => setMenuOpen(false)}>Importância</a>
      </div>
    </>
  );
}
