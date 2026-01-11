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
        A <strong style={{ color: "#D4A017" }}>PremiumDesign</strong> nasceu com o
        propósito de transformar datas comemorativas em oportunidades reais de
        crescimento para empresas de todos os segmentos.
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

      {/* Destaque institucional */}
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

      {/* 🟡 CTA COMPRA ÚNICA */}
      <div
        style={{
          marginTop: "60px",
          padding: "35px 30px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <h3
          style={{
            fontSize: "30px",
            color: "#fff",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          Precisa de artes pontuais?
        </h3>

        <p
          style={{
            fontSize: "20px",
            color: "#ddd",
            marginBottom: "22px",
          }}
        >
          Ideal para campanhas específicas, datas comemorativas ou ações rápidas.
        </p>

        <a
          href="https://pay.finaliza.shop/pl/1531428d04"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#D4A017",
            color: "#000",
            padding: "16px 32px",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Comprar pacote único
        </a>
      </div>

      {/* 🔥 CTA PROMOÇÃO MENSAL */}
      <div
        style={{
          marginTop: "50px",
          padding: "45px 30px",
          background: "linear-gradient(135deg, #D4A017, #b8920f)",
          borderRadius: "16px",
          color: "#000",
        }}
      >
        <h3
          style={{
            fontSize: "34px",
            fontWeight: "900",
            marginBottom: "15px",
          }}
        >
          Promoção Mensal Premium 🔥
        </h3>

        <p
          style={{
            fontSize: "21px",
            marginBottom: "28px",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          Receba <strong>20 artes profissionais por mês</strong>, prontas para
          postar e vender, por apenas{" "}
          <strong>R$100,00 mensais</strong>.
        </p>

        <a
          href="https://pay.finaliza.shop/pl/0bbaebee50"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#000",
            color: "#D4A017",
            padding: "18px 36px",
            borderRadius: "12px",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Quero garantir minha vaga mensal
        </a>
      </div>
    </section>
  );
}
