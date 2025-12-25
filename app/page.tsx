export default function Home() {
  return (
    <main style={styles.page}>
      {/* Neon glow background */}
      <div style={styles.glowLeft} />
      <div style={styles.glowRight} />

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>EvieX</div>
        <div style={styles.subtitle}>Fortnite Creator</div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          EvieX <span style={styles.neon}>NEON HUB</span>
        </h1>

        <p style={styles.description}>
          Clips • Customs • UEFN Maps • Creator Code
        </p>

        <div style={styles.buttonRow}>
          <a href="#" style={styles.neonButton}>
            YouTube
          </a>

          <a href="#" style={styles.neonButton}>
            Twitch
          </a>

          <a
            href="https://discord.gg/ZzurZUDHPR"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.neonButton}
          >
            Discord
          </a>
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
        <h2 style={styles.sectionTitle}>SUPPORT A CREATOR</h2>
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
    filter: "blur(90px)",
  },

  glowRight: {
    position: "absolute",
    bottom: "-200px",
    right: "-200px",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, #b400ff55, transparent 60%)",
    filter: "blur(90px)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    position: "relative",
  },

  logo: {
    fo
