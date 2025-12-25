export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1a1a2e 0%, #050510 40%, #000 80%)",
        color: "#ffffff",
        padding: "60px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fortnite-style glow layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(0,246,255,0.15), transparent 40%), radial-gradient(circle at 80% 30%, rgba(140,0,255,0.15), transparent 40%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div>
          <h1
            style={{
              color: "#00f6ff",
              fontSize: "32px",
              fontWeight: "900",
              marginBottom: "6px",
              textShadow: "0 0 14px rgba(0,246,255,0.8)",
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
            textShadow: "0 0 18px rgba(255,255,255,0.2)",
          }}
        >
          EvieX
        </h2>

        <p
          style={{
            marginTop: "12px",
            color: "#d0d0ff",
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
            padding: "14px 30px",
            borderRadius: "12px",
            border: "2px solid #00f6ff",
            color: "#00f6ff",
            textDecoration: "none",
            fontWeight: "800",
            boxShadow:
              "0 0 20px rgba(0,246,255,0.6), inset 0 0 10px rgba(0,246,255,0.3)",
          }}
        >
          Join Discord
        </a>

        {/* Support A Creator */}
        <div style={{ marginTop: "60px" }}>
          <p
            style={{
              color: "#00f6ff",
              fontWeight: "700",
              marginBottom: "6px",
            }}
          >
            Support-A-Creator
          </p>

          <p style={{ fontSize: "20px" }}>
            Use code <strong>EvieX</strong>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "20px",
          left: "60px",
          color: "#777",
          fontSize: "12px",
        }}
      >
        © 2025 EvieX • Fortnite
      </footer>
    </main>
  );
}
