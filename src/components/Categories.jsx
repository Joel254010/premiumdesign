export default function Categories({ onCategoriaSelecionada }) {
  const categorias = [
    // === CATEGORIAS NACIONAIS ===
    { nome: "Carnaval", cor: "#ff4757" },
    { nome: "Páscoa", cor: "#ffa502" },
    { nome: "Tiradentes", cor: "#70a1ff" },
    { nome: "Dia do Trabalhador", cor: "#2ed573" },
    { nome: "Independência do Brasil", cor: "#1e90ff" },
    { nome: "Proclamação da República", cor: "#5352ed" },
    { nome: "Consciência Negra", cor: "#2f3542" },
    { nome: "Dia da Bandeira", cor: "#2ecc71" },

    // === CATEGORIAS COMERCIAIS ===
    { nome: "Black Friday", cor: "#000000" },
    { nome: "Cyber Monday", cor: "#3742fa" },
    { nome: "Promoções", cor: "#eccc68" },
    { nome: "Liquidações", cor: "#ff6b81" },

    // === DIAS ESPECIAIS ===
    { nome: "Dia das Mães", cor: "#e84393" },
    { nome: "Dia dos Pais", cor: "#57606f" },
    { nome: "Dia das Crianças", cor: "#ff7f50" },
    { nome: "Dia dos Namorados", cor: "#ff4757" },
    { nome: "Dia Internacional da Mulher", cor: "#ff85c0" },

    // === EVENTOS ANUAIS ===
    { nome: "Ano Novo", cor: "#ffffff" },
    { nome: "Natal", cor: "#2ecc71" },
    { nome: "Halloween", cor: "#ff851b" },
    { nome: "Festa Junina", cor: "#ff6348" },
    { nome: "Volta às Aulas", cor: "#1e90ff" },

    // === CATEGORIAS EMPRESARIAIS ===
    { nome: "Aniversário da Empresa", cor: "#D4A017" },
    { nome: "Inauguração", cor: "#eccc68" },
    { nome: "Meta Atingida", cor: "#7bed9f" },
    { nome: "Boas-Vindas", cor: "#70a1ff" },
    { nome: "Satisfação do Cliente", cor: "#f1c40f" },

    // === FERIADOS REGIONAIS ===
    { nome: "Dia da República", cor: "#ced6e0" },
    { nome: "Dia da Independência", cor: "#2ed573" },
    { nome: "Semana da Pátria", cor: "#1e90ff" },
    { nome: "Dia do Agricultor", cor: "#27ae60" },
    { nome: "Dia do Professor", cor: "#a55eea" },

    // === ESTAÇÕES DO ANO ===
    { nome: "Verão", cor: "#ffa502" },
    { nome: "Inverno", cor: "#1e3799" },
    { nome: "Outono", cor: "#e67e22" },
    { nome: "Primavera", cor: "#b71540" },
  ];

  return (
    <section id="categories" style={{ padding: "80px 40px", textAlign: "center" }}>
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "40px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Categorias de Artes Comemorativas
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {categorias.map((cat, i) => (
          <div
            key={i}
            onClick={() => onCategoriaSelecionada(cat.nome)} // 🔥 AGORA FUNCIONANDO
            style={{
              padding: "25px",
              borderRadius: "12px",
              background: "#111",
              color: cat.cor,
              fontSize: "22px",
              border: `2px solid ${cat.cor}`,
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
              textAlign: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {cat.nome}
          </div>
        ))}
      </div>
    </section>
  );
}
