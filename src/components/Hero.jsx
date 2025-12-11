import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        width: "100%",
        marginTop: "100px", // 🔥 compensação do header fixo
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "scroll", // 🔥 mobile-safe
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {/* Overlay escuro */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          textAlign: "center",
          padding: "0 10px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            lineHeight: "1.1",
            color: "#fff",
            textShadow: "0 6px 25px rgba(0,0,0,0.7)",
          }}
        >
          Transforme Datas Comemorativas em{" "}
          <span style={{ color: "#D4A017" }}>Vendas Reais</span>
        </h1>

        <p
          style={{
            marginTop: "25px",
            fontSize: "24px",
            color: "#f1f1f1",
            textShadow: "0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          A coleção mais profissional de artes comemorativas para empresas que
          querem crescer nas redes sociais.
        </p>

        {/* BARRA DE BUSCA */}
        <div
          style={{
            marginTop: "45px",
            display: "flex",
            background: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            width: "100%",
            maxWidth: "750px",
            marginInline: "auto",
            boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
          }}
        >
          <input
            type="text"
            placeholder="Buscar artes (Natal, Promoções, Black Friday...)"
            style={{
              flex: 1,
              padding: "18px",
              border: "none",
              fontSize: "20px",
              outline: "none",
            }}
          />
          <button
            style={{
              background: "#D4A017",
              border: "none",
              padding: "0 30px",
              fontWeight: "bold",
              fontSize: "20px",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}
