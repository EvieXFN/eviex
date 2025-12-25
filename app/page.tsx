import CopyButton from "./CopyButton";

const DISCORD_URL = "https://discord.gg/ZzurZUDHPR";

export default function Home() {
  return (
    <main className="wrap">
      {/* Top Nav */}
      <header className="top">
        <div className="topLeft">
          <div className="logoMark" />
          <div className="brandBlock">
            <div className="brandName">EvieX</div>
            <div className="brandTag">Fortnite Creator</div>
          </div>
        </div>

        <nav className="tabs">
          <a className="tab" href="#discover">Discover</a>
          <a className="tab" href="#videos">Videos</a>
          <a className="tab" href="#maps">UEFN Maps</a>
          <a className="tab" href="#code">Creator Code</a>
          <a
            className="tab tabAccent"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" id="discover">
        <div className="heroInner">
          <h1 className="title">EvieX</h1>
          <p className="subtitle">
            Clips • UEFN Maps • Community • Support-A-Creator
          </p>

          <div className="ctaRow">
            <a
              className="btn btnPrimary"
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
            <a className="btn btnGhost" href="#videos">
              Watch Videos
            </a>
            <a className="btn btnSoft" href="#code">
              Use Code EvieX
            </a>
          </div>
        </div>

        <aside className="feature">
          <div className="featureTitle">EvieX Community</div>
          <div className="featureText">
            Fortnite content, updates, and links — all in one place.
          </div>
          <a
            className="btn btnPrimary"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%" }}
          >
            Open Discord
          </a>
        </aside>
      </section>

      {/* Videos */}
      <section className="grid" id="videos">
        <header className="sectionHead">
          <h2 className="h2">Latest Videos</h2>
          <p className="p">Recent uploads and highlights</p>
        </header>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            marginTop: "12px",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/Uqcl4ZkJ594"
            title="EvieX Video 1"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          />

          <iframe
            src="https://www.youtube.com/embed/tiFdaaiev04"
            title="EvieX Video 2"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          />

          <iframe
            src="https://www.youtube.com/embed/pHH3xiNarus"
            title="EvieX Video 3"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          />
        </div>
      </section>

      {/* Creator Code */}
      <section className="panel" id="code">
        <div className="panelInner">
          <div>
            <h2 className="h2">Support-A-Creator</h2>
            <p className="p">
              Use code <strong>EvieX</strong> in the Fortnite Item Shop.
            </p>
          </div>

          <div className="codeBox">
            <div className="codeValue">EvieX</div>
            <CopyButton />
          </div>
        </div>
      </section>

      <footer className="foot">© 2025 EvieX • Fortnite</footer>
    </main>
  );
}
