import CopyButton from "./CopyButton";

const DISCORD_URL = "https://discord.gg/ZzurZUDHPR";

export default function Home() {
  return (
    <main className="wrap">
      {/* Top Nav */}
      <header className="top">
        <div className="topLeft">
          <div className="logoMark" aria-hidden />
          <div className="brandBlock">
            <div className="brandName">EvieX</div>
            <div className="brandTag">Fortnite Creator</div>
          </div>
        </div>

        <nav className="tabs" aria-label="Primary">
          <a className="tab" href="#discover">Discover</a>
          <a className="tab" href="#content">Content</a>
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

            <a className="btn btnGhost" href="#content">
              View Content
            </a>

            <a className="btn btnSoft" href="#code">
              Use Code EvieX
            </a>
          </div>
        </div>

        {/* Right-side feature card */}
        <aside className="feature">
          <div className="featureTitle">EvieX Community</div>
          <div className="featureText">
            Announcements, updates, and links—everything in one place.
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

      {/* Content Tiles */}
      <section className="grid" id="content">
        <header className="sectionHead">
          <h2 className="h2">Discover</h2>
          <p className="p">Quick links to your main sections.</p>
        </header>

        <div className="tiles">
          <article className="tile">
            <div className="tileMedia" />
            <div className="tileBody">
              <div className="tileTitle">Clips & Highlights</div>
              <div className="tileText">Best moments, edits, and wins.</div>
              <a className="tileBtn" href="#content">View</a>
            </div>
          </article>

          <article className="tile" id="maps">
            <div className="tileMedia" />
            <div className="tileBody">
              <div className="tileTitle">UEFN Maps</div>
              <div className="tileText">New islands + updates.</div>
              <a className="tileBtn" href="#maps">Explore</a>
            </div>
          </article>

          <article className="tile">
            <div className="tileMedia" />
            <div className="tileBody">
              <div className="tileTitle">Join the Community</div>
              <div className="tileText">Get announcements and updates.</div>
              <a
                className="tileBtn"
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Creator Code */}
      <section className="panel" id="code">
        <div className="panelInner">
          <div className="panelLeft">
            <h2 className="h2">Support-A-Creator</h2>
            <p className="p">
              Use code <strong>EvieX</strong> in the Fortnite Item Shop.
            </p>
          </div>

          <div className="codeBox" aria-label="Creator Code">
            <div className="codeValue">EvieX</div>
            <CopyButton />
          </div>
        </div>
      </section>

      <footer className="foot">© 2025 EvieX • Fortnite</footer>
    </main>
  );
}
