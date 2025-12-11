export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        padding: "100px 40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #0b0b0b, #151515)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          color: "#fff",
          marginBottom: "20px",
        }}
      >
        Pronto para Transformar Suas Redes Sociais?
      </h2>

      <p
        style={{
          fontSize: "22px",
          color: "#ddd",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.6",
          marginBottom: "40px",
        }}
      >
        Tenha acesso imediato a todas as nossas artes comemorativas, criadas
        para gerar engajamento, atrair clientes e aumentar suas vendas.
      </p>

      <a
        href="https://pay.finaliza.shop/pl/1531428d04"
        style={{
          background: "#D4A017",
          color: "#000",
          padding: "18px 36px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "22px",
          textDecoration: "none",
          boxShadow: "0 6px 20px rgba(212,160,23,0.4)",
          transition: "0.3s",
          display: "inline-block",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Comprar Agora — R$19,90
      </a>

      <p
        style={{
          marginTop: "20px",
          fontSize: "16px",
          color: "#888",
        }}
      >
        Acesso imediato. Sem mensalidade. Atualizações incluídas.
      </p>
    </section>
  );
}
