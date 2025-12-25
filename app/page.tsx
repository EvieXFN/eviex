export default function Home() {
  return (
    <div style={page}>
      <div style={glowBlue} />
      <div style={glowPurple} />

      <header style={header}>
        <h1 style={logo}>EvieX</h1>
        <span style={subtitle}>Fortnite Creator</span>
      </header>

      <main style={hero}>
        <h2 style={title}>
          EvieX <span style={neon}>NEON HUB</span>
        </h2>

        <p style={text}>
          Clips • Customs • UEFN Maps • Creator Code
        </p>

        <div style={buttons}>
          <a style={button} href="#">
            YouTube
          </a>
          <a style={button} href="#">
            Twitch
          </a>
          <a
            style={button}
            href="https://discord.gg/ZzurZUDHPR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>

        <section style={section}>
          <h3 style={sectionTitle}>SUPPORT A CREATOR</h3>
          <p style={creator}>
            Use code <span style={neon}>EvieX</span>
          </p>
        </section>
      </main>

      <footer style={footer}>
        © {new Date().getFullYear()} EvieX
      </footer>
    </div>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  background: "#05060a",
  color: "white",
  padding: "40px",
  fontFamily: "Arial, sans-serif",
  position: "relative",
  overflow: "hidden",
};

const glowBlue = {
  position: "absolute",
  top: "-200px",
  left: "-200px",
  width: "500px",
  height: "500px",
  background: "radial-gradient(circle, #00f0ff55, transparent 60%)",
  filter: "blur(90px)",
};

const glowPurple = {
  position: "absolute",
  bottom: "-200px",
  right: "-200px",
  width: "500px",
  height: "500px",
  background: "radial-gradient(circle, #b400ff55, transparent 60%)",
  filter: "blur(90px)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo = {
  fontSize: "30px",
  fontWeight: "900",
  color: "#00f0ff",
  textShadow: "0 0 15px #00f0ff",
};

const subtitle = {
  fontSize: "14px",
  color: "#aaa",
};

const hero = {
  marginTop: "120px",
  maxWidth: "700px",
};

const title = {
  fontSize: "56px",
  fontWeight: "900",
};

const neon = {
  color: "#b400ff",
  textShadow: "0 0 12px #b400ff, 0 0 30px #b400ff",
};

const text = {
  marginTop: "16px",
  fontSiz
