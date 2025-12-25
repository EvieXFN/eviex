export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#05060a", color: "white", padding: "40px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>EvieX</h1>
        <span>Fortnite Creator</span>
      </header>

      <section style={{ marginTop: "60px", maxWidth: "700px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: "bold" }}>
          EvieX Fortnite Hub 🔥
        </h2>
        <p style={{ marginTop: "16px", fontSize: "18px", color: "#b3b3b3" }}>
          Highlights, UEFN maps, customs, and creator code support.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "16px" }}>
          <a href="#" style={buttonStyle}>YouTube</a>
          <a href="#" style={buttonStyle}>Twitch</a>
          <a href="#" style={buttonStyle}>Discord</a>
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>Island Codes</h3>
        <ul style={{ marginTop: "16px", color: "#b3b3b3" }}>
          <li>🏝 Beach 1v1 — 0000-0000-0000</li>
          <li>📦 Box Fights — 0000-0000-0000</li>
          <li>🌪 Zone Wars — 0000-0000-0000</li>
        </ul>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>Creator Code</h3>
        <p style={{ marginTop: "10px", fontSize: "20px" }}>
          Use code <strong>EVX</strong> in the Item Shop 💙
        </p>
      </section>
    </main>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  background: "white",
  color: "black",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold"
};
