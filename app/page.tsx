export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#05060a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "900",
          color: "#00f0ff",
          textShadow: "0 0 12px #00f0ff",
        }}
      >
        EvieX
      </h1>

      <p style={{ color: "#aaa", marginTop: "4px" }}>
        Fortnite Creator
      </p>

      {/* Hero */}
      <h2
        style={{
          marginTop: "80px",
          fontSize: "48px",
          fontWeight: "900",
        }}
      >
        EvieX <span style={{ color: "#b400ff" }}>NEON HUB</span>
      </h2>

      <p style={{ marginTop: "16px", color: "#bdbdbd" }}>
        Clips • Customs • UEFN Maps • Creator Code
      </p>

      {/* Buttons */}
      <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
        <a
          href="https://discord.gg/ZzurZUDHPR"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "14px 22px",
            border: "2px solid #00f0ff",
            borderRadius: "10px",
            color: "#00f0ff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Discord
        </a>
      </div>

      {/* Support a Creator */}
      <div style={{ marginTop: "80px" }}>
        <h3 style={{ color: "#00f0ff", fontSize: "22px" }}>
          Support-A-Creator
        </h3>
        <p style={{ fontSize: "22px", marginTop: "8px" }}>
          Use code <strong>EvieX</strong>
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "120px",
          fontSize: "12px",
          color: "#777",
        }}
      >
        © 2025 EvieX • Fortnite
      </footer>
    </div>
  );
}

