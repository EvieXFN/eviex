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
        <div className="heroGrid" aria-hidden />
        <div className="heroGlow" aria-hidden />

        <div className="heroInner">
          <div className="badgeRow">
            <span className="badge badgeCyan">LIVE UPDATES</span>
            <span className="badge badgePurple">CREATOR</span>
            <span className="badge badgeGold">FEATURED</span>
          </div>

          <h1 className="title">
            EVieX <span className="titleAccent">HQ</span>
          </h1>

          <p className="subtitle">
            Clips • Customs • UEFN Maps • Community • Support-A-Creator
          </p>

          <div className="ctaRow">
            <a
              className="btn btnPrimary"
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btnIcon" aria-hidden>⬢</span>
              Join Discord
            </a>

            <a className="btn btnGhost" href="#content">
              View Content
            </a>

            <a className="btn btnSoft" href="#code">
              Use Code EvieX
            </a>
          </div>

          <div className="miniStats">
            <div className="stat">
              <div className="statTop">Region</div>
              <div className="statVal">NA</div>
            </div>
            <div className="stat">
              <div className="statTop">Mode</div>
              <div className="statVal">Battle Royale</div>
            </div>
            <div className="stat">
              <div className="statTop">Focus</div>
              <div className="statVal">UEFN + Customs</div>
            </div>
          </div>
        </div>

        {/* Right-side feature card */}
        <aside className="feature">
          <div className="featureTop">
            <div className="chip">FEATURED</div>
            <div className="chip chipAlt">UPDATED</div>
          </div>

          <div className="featureTitle">Community Customs</div>
          <div className="featureText">
            Queue + rules live in Discord. Join to get notified.
          </div>

          <a
            className="btn btnPrimary btnFull"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Discord
          </a>

          <div className="featureFoot">
            <div className="dot" /> Fast join • Mobile-friendly
          </div>
        </aside>
      </section>

      {/* Discover Cards */}
      <section className="grid" id="content">
        <header className="sectionHead">
          <h2 className="h2">Discover</h2>
          <p className="p">Fortnite-style tiles for your main sections.</p>
        </header>

        <div className="tiles">
          <article className="tile rarityCyan">
            <div className="tileMedia tileMedia1" />
            <div className="tileBody">
              <div className="tileKicker">CONTENT</div>
              <div className="tileTitle">Clips & Highlights</div>
              <div className="tileText">Best moments, edits, and wins.</div>
              <a className="tileBtn" href="#content">View</a>
            </div>
          </article>

          <article className="tile rarityPurple" id="maps">
            <div className="tileMedia tileMedia2" />
            <div className="tileBody">
              <div className="tileKicker">UEFN</div>
              <div className="tileTitle">Maps & Updates</div>
              <div className="tileText">New islands + change logs.</div>
              <a className="tileBtn" href="#maps">Explore</a>
            </div>
          </article>

          <article className="tile rarityGold">
            <div className="tileMedia tileMedia3" />
            <div className="tileBody">
              <div className="tileKicker">COMMUNITY</div>
              <div className="tileTitle">Customs Queue</div>
              <div className="tileText">Join the server to get in.</div>
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

      {/* Creator Code Panel */}
      <section className="panel" id="code">
        <div className="panelInner">
          <div className="panelLeft">
            <h2 className="h2">Support-A-Creator</h2>
            <p className="p">
              Use code <strong>EvieX</strong> in the Fortnite Item Shop.
            </p>
          </div>

          <div className="codeBox" aria-label="Creator Code">
            <div className="codeLabel">CREATOR CODE</div>
            <div className="codeValue">EvieX</div>
            <CopyButton />
          </div>
        </div>
      </section>

      <footer className="foot">© 2025 EvieX • Fortnite</footer>
    </main>
  );
}
