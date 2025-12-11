import { useState } from "react";

export default function Samples() {
  const artes = [
    "https://i.postimg.cc/LsTZRxKX/gemini-2-5-flash-image-Use-the-uploaded-bus-photo-as-the-main-subject-Keep-the-bus-exactly-as-the-o.jpg",
    "https://i.postimg.cc/Qtv7nHZD/gemini-2-5-flash-image-Use-the-uploaded-photo-Keep-both-buses-exactly-as-the-original-Marcopolo-Tra.jpg",
    "https://i.postimg.cc/W4Hqhh3n/gemini-2-5-flash-image-a-surreal-and-vibrant-cinematic-photo-of-Use-the-uploaded-photo-exactly-as-re.jpg"
  ];

  const [modalImg, setModalImg] = useState(null);

  return (
    <section id="samples" style={{ padding: "60px 40px" }}>
      <h2
        style={{
          fontSize: "36px",
          textAlign: "center",
          marginBottom: "40px",
          color: "#fff",
        }}
      >
        Exemplos de Artes PremiumDesign
      </h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {artes.map((img, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "350px",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#111",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
            onClick={() => setModalImg(img)}
          >
            <img
              src={img}
              alt={`Arte ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalImg && (
        <div
          onClick={() => setModalImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={modalImg}
            alt="Preview"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      )}
    </section>
  );
}
