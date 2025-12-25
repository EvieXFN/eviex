export default function Home() {
  return (
    <main style={styles.page}>
      {/* Neon glow background */}
      <div style={styles.glowLeft} />
      <div style={styles.glowRight} />

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>EVIEX</div>
        <div style={styles.subtitle}>FORTNITE CREATOR</div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          EVIEX <span style={styles.neon}>NEON HUB</span>
        </h1>

        <p style={styles.description}>
          Clips • Customs • UEFN Maps • Creator Code
        </p>

        <div style={styles.buttonRow}>
          <a href="#" style={styles.neonButton}>YouTube</a>
          <a href="#" style={styles.neonButton}>Twitch</a>
          <a href="#" style={styles.neonButton}>Discord</a>
        </div>
      </section>

      {/* Island Codes */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ISLAND CODES</h2>
        <div style={styles.card}>
          🏝 Beach 1v1 — <strong>0000-0000-0000</strong>
        </div>
        <div style={styles.card}>
          📦 Box Fights — <strong>0000-0000-0000</strong>
        </div>
        <div style={styles.card}>
          🌪 Zone Wars — <strong>0000-0000-0000</strong>
        </div>
      </section>

      {/* Creator Code */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>CREATOR CODE</h2>
        <div style={styles.creatorCode}>
          USE CODE <span style={styles.neon}>EvieX</span>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} EvieX • Fortnite
      </footer>
    </main>
  );
}

/* ───────── STYLES ───────── */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "#05060a",
    color: "white",
    padding: "40px",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },

  glowLeft: {
    position: "absolute",
    top: "-200px",
    left: "-200px",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, #00f0ff55, transparent 60%)",
    filter: "blur(80px)",
  },

  glowRight: {
    position: "absolute",
    bottom: "-200px",
    right: "-200px",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, #b400ff55, transparent 60%)",
    filter: "blur(80px)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    position: "relative",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "900",
    letterSpacing: "2px",
    color: "#00f0ff",
    textShadow: "0 0 12px #00f0ff",
  },

  subtitle: {
    fontSize: "14px",
    color: "#aaa",
  },

  hero: {
    marginTop: "120px",
    maxWidth: "700px",
    zIndex: 1,
    position: "relative",
  },

  title: {
    fontSize: "56px",
    fontWeight: "900",
    lineHeight: "1.1",
  },

  neon: {
    color: "#b400ff",
    textShadow: "0 0 12px #b400ff, 0 0 30px #b400ff",
  },

  description: {
    marginTop: "16px",
    fontSize: "18px",
    color: "#bdbdbd",
  },

  buttonRow: {
    marginTop: "32px",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },

  neonButton: {
    padding: "14px 24px",
    border: "2px solid #00f0ff",
    borderRadius: "10px",
    color: "#00f0ff",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 0 15px #00f0ff55",
    transition: "0.2s",
  },

  section: {
    marginTop: "100px",
    maxWidth: "700px",
    zIndex: 1,
    position: "relative",
  },

  sectionTitle: {
    fontSize: "26px",
    marginBottom: "20px",
    color: "#00f0ff",
    textShadow: "0 0 10px #00f0ff",
  },

  card: {
    padding: "16px",
    marginBottom: "12px",
    background: "#0b0d14",
    border: "1px solid #222",
    borderRadius: "10px",
    boxShadow: "0 0 15px #000",
  },

  creatorCode: {
    fontSize: "24px",
    fontWeight: "bold",
  },

  footer: {
    marginTop: "120px",
    fontSize: "12px",
    color: "#777",
    zIndex: 1,
    position: "relative",
  },
};
