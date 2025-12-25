export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0a0a, #000000)",
        color: "#ffffff",
        padding: "60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div>
        <h1
          style={{
            color: "#00f6ff",
            fontSize: "32px",
            fontWeight: "900",
            marginBottom: "6px",
            textShadow: "0 0 12px rgba(0,246,255,0.6)",
          }}
        >
          EvieX
        </h1>

        <p style={{ color: "#bdbdbd", fontSize: "14px" }}>
          Fortnite Creator
        </p>
      </div>

      {/* Main Title */}
      <h2
        style={{
          marginTop: "80px",
          fontSize: "56px",
          fontWeight: "900",
          letterSpacing: "1px",
        }}
      >
        EvieX
      </h2>

      <p
        style={{
          marginTop: "12px",
          color: "#cfcfcf",
          fontSize: "16px",
        }}
      >
        Clips • Customs • UEFN Maps • Creator Code
      </p>

      {/* Discord Button */}
      <a
        href="https://discord.gg/ZzurZUDHPR"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "12px 26px",
          borderRadius: "10px",
          border: "2px solid #00f6ff",
          color: "#00f6ff",
          textDecoration: "none",
          fontWeight: "700",
          boxShadow: "0 0 15px rgba(0,246,255,0.4)",
        }}
      >
        Discord
      </a>

      {/* Support A Creator */}
      <div style={{ marginTop: "50px" }}>
        <p
          style={{
            color: "#00f6ff",
            fontWeight: "700",
            marginBottom: "6px",
          }}
        >
          Support-A-Creator
        </p>

        <p style={{ fontSize: "18px" }}>
          Use code <strong>EvieX</strong>
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "20px",
          left: "60px",
          color: "#666",
          fontSize: "12px",
        }}
      >
        © 2025 EvieX • Fortnite
      </footer>
    </main>
  );
}
