export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <div style={{ position: "fixed", inset: 0, zIndex: -2 }}>
        <iframe
          src="https://www.youtube.com/embed/Uqcl4ZkJ594?autoplay=1&mute=1&loop=1&playlist=Uqcl4ZkJ594&controls=0&showinfo=0&modestbranding=1"
          title="EvieX Background"
          frameBorder="0"
          allow="autoplay; fullscreen"
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Dark Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <section style={{ padding: "64px" }}>
        <h1
          style={{
            fontSize: "48px",
            color: "#00ffff",
            marginBottom: "8px",
          }}
        >
          EvieX
        </h1>

        <p style={{ opacity: 0.8, marginBottom: "40px" }}>
          Fortnite Creator
        </p>

        <p style={{ opacity: 0.8, marginBottom: "24px" }}>
        Clips • Customs • Content creator
        </p>

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
            marginBottom: "32px",
          }}
        >
          Join Discord
        </a>

        <div style={{ marginTop: "40px" }}>
          <h3 style={{ color: "#00ffff" }}>Support-A-Creator</h3>
          <p>Use code <strong>EvieX</strong></p>
        </div>
      </section>

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
