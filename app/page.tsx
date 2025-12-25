const DISCORD_URL = "https://discord.gg/ZzurZUDHPR";

export default function Home() {
  return (
    <main className="site">
      {/* Top Nav */}
      <header className="topbar">
        <div className="brand">
          <div className="brandDot" />
          <span className="brandText">EvieX</span>
        </div>

        <nav className="nav">
          <a href="#clips">Clips</a>
          <a href="#customs">Customs</a>
          <a href="#uefn">UEFN Maps</a>
          <a href="#code">Creator Code</a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="heroOverlay" />

        <div className="heroInner">
          <p className="kicker">FORTNITE CREATOR</p>

          <h1 className="heroTitle">
            Don’t take shelter.
            <br />
            <span className="accent">Make it.</span>
          </h1>

          <p className="heroSub">
            Clips • Customs • UEFN Maps • Support-A-Creator
          </p>

          <div className="heroButtons">
            <a
              className="btnPrimary"
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
            <a className="btnGhost" href="#code">
              Support-A-Creator
            </a>
          </div>
        </div>
      </section>

      {/* Promo Cards */}
      <section className="cards">
        <article className="card" id="clips">
          <div className="cardMedia cardMedia1" />
          <div className="cardBody">
            <h3>THE HIGHLIGHTS</h3>
            <p>Best clips + moments. Updated often.</p>
            <a className="btnSmall" href="#clips">View Clips</a>
          </div>
        </article>

        <article className="card" id="uefn">
          <div className="cardMedia cardMedia2" />
          <div className="cardBody">
            <h3>UEFN MAPS</h3>
            <p>Play my newest islands + updates.</p>
            <a className="btnSmall" href="#uefn">See Maps</a>
          </div>
        </article>

        <article className="card" id="customs">
          <div className="cardMedia cardMedia3" />
          <div className="cardBody">
            <h3>CUSTOMS</h3>
            <p>Join the community customs when I go live.</p>
            <a
              className="btnSmall"
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In
            </a>
          </div>
        </article>
      </section>

      {/* Creator Code */}
      <section className="code" id="code">
        <div className="codeInner">
          <h2>Support-A-Creator</h2>
          <p>
            Use code <strong>EvieX</strong> in the Fortnite Item Shop 💙
          </p>
        </div>
      </section>

      <footer className="footer">© 2025 EvieX • Fortnite</footer>
    </main>
  );
}
