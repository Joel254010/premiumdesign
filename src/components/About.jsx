export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Barra dourada premium */}
      <div
        style={{
          width: "80px",
          height: "6px",
          background: "#D4A017",
          margin: "0 auto 25px",
          borderRadius: "6px",
        }}
      />

      <h2
        style={{
          fontSize: "42px",
          color: "#fff",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Quem Somos
      </h2>

      <p
        style={{
          fontSize: "20px",
          color: "#ddd",
          lineHeight: "1.6",
          maxWidth: "900px",
          margin: "0 auto 40px",
        }}
      >
        A <strong style={{ color: "#D4A017" }}>PremiumDesign</strong> nasceu com o propósito
        de transformar datas comemorativas em oportunidades reais de crescimento
        para empresas de todos os segmentos.
        <br /><br />
        Criamos artes profissionais, modernas e altamente compartilháveis,
        pensadas para gerar engajamento, fortalecer a presença digital e aumentar
        as vendas dos nossos clientes.
      </p>

      <p
        style={{
          fontSize: "20px",
          color: "#ddd",
          lineHeight: "1.6",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        Todas as artes são produzidas com foco em impacto visual, estratégia
        comercial e resultados. Acreditamos que cada post é uma chance de
        conquistar novos clientes — e é por isso que trabalhamos com excelência
        em cada detalhe.
      </p>

      {/* Destaque final */}
      <div
        style={{
          marginTop: "50px",
          padding: "30px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h3
          style={{
            fontSize: "26px",
            color: "#fff",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          Nosso compromisso é simples:
        </h3>

        <p
          style={{
            fontSize: "20px",
            color: "#D4A017",
            fontWeight: "bold",
          }}
        >
          Fazer sua empresa ser lembrada todos os dias — com artes que vendem.
        </p>
      </div>
    </section>
  );
}
