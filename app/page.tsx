export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(135deg, #001018 0%, #0a1a2f 40%, #1a0033 100%)",
        padding: "64px",
        position: "relative",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "48px",
          color: "#00ffff",
          marginBottom: "8px",
        }}
      >
        EvieX
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "48px" }}>
        Fortnite Creator
      </p>

      <p style={{ opacity: 0.8, marginBottom: "24px" }}>
        Clips • Customs • Content creator
      </p>

      {/* Discord Button */}
      <a
        href="https://discord.gg/ZzurZUDHPR"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 28px",
          border: "2px solid #00ffff",
          borderRadius: "10px",
          color: "#00ffff",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Join Discord
      </a>

      {/* Creator Code */}
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ color: "#00ffff" }}>Support-A-Creator</h3>
        <p>Use code <strong>EvieX</strong></p>
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "16px",
          left: "64px",
          opacity: 0.6,
          fontSize: "14px",
        }}
      >
        © 2025 EvieX 
      </footer>
    </main>
  );
}
