export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 20px",
        textAlign: "center",
        color: "#aaa",
        borderTop: "1px solid #222",
        marginTop: "40px",
      }}
    >
      {/* Redes Sociais */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/premiumdesign2026/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <svg
            width="32"
            height="32"
            fill="#D4A017"
            viewBox="0 0 24 24"
            style={{ transition: "0.3s" }}
          >
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 
            0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 
            3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 
            3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 
            6 3 3 0 010-6zm4.75-.5a1.25 1.25 0 11-2.5 
            0 1.25 1.25 0 012.5 0z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/premiumdesign2026"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <svg
            width="32"
            height="32"
            fill="#D4A017"
            viewBox="0 0 24 24"
            style={{ transition: "0.3s" }}
          >
            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 
            1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 
            0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 
            10 0 0022 12z" />
          </svg>
        </a>
      </div>

      <div style={{ fontSize: "14px", color: "#777" }}>
        PremiumDesign © 2025 — Todos os direitos reservados.
      </div>
    </footer>
  );
}
