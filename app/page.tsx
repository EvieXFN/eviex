import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Youtube,
  Twitch,
  Twitter,
  Instagram,
  Disc,
  Copy,
  Check,
  Search,
  Map as MapIcon,
  Calendar,
  Mail,
  ExternalLink,
} from "lucide-react";

const CREATOR_CODE = "EVIE X"; // ← change me
const DISPLAY_NAME = "KLSFN"; // ← change me

const LINKS = {
  youtube: "https://youtube.com/@YOURCHANNEL",
  twitch: "https://twitch.tv/YOURCHANNEL",
  twitter: "https://x.com/YOURHANDLE",
  instagram: "https://instagram.com/YOURHANDLE",
  discord: "https://discord.gg/YOURINVITE",
  contactEmail: "you@example.com",
};

const FEATURED_VIDEOS = [
  {
    title: "INSANE clutch in Ranked",
    desc: "Highlights + tips (placeholder)",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tag: "Highlights",
  },
  {
    title: "UEFN build walkthrough",
    desc: "How I made my newest island (placeholder)",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tag: "UEFN",
  },
  {
    title: "Best settings + aim routine",
    desc: "Quick setup for smoother gameplay (placeholder)",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tag: "Settings",
  },
];

const ISLANDS = [
  {
    name: "Beach 1v1 — 200HP",
    code: "0000-0000-0000",
    mode: "1v1 / Practice",
    status: "Live",
    blurb: "Fast respawn, clean loadouts, simple vibes.",
  },
  {
    name: "Ranked Box Fights",
    code: "0000-0000-0000",
    mode: "PvP",
    status: "Updating",
    blurb: "Rank system + competitive rounds.",
  },
  {
    name: "Zone Wars: Neon City",
    code: "0000-0000-0000",
    mode: "Zone Wars",
    status: "Coming Soon",
    blurb: "Rotations, loot, and chaos—done right.",
  },
];

const SCHEDULE = [
  { day: "Mon", time: "6–9 PM", note: "Ranked + viewer games" },
  { day: "Wed", time: "6–9 PM", note: "UEFN build / updates" },
  { day: "Fri", time: "7–11 PM", note: "Customs / tournaments" },
  { day: "Sun", time: "5–8 PM", note: "Highlights + chill" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Pill({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
    >
      <Icon className="h-4 w-4 opacity-80 transition group-hover:opacity-100" />
      <span>{label}</span>
      <ExternalLink className="h-3.5 w-3.5 opacity-40" />
    </a>
  );
}

function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6">
          {kicker ? (
            <div className="mb-2 text-xs font-medium tracking-widest text-white/50">
              {kicker}
            </div>
          ) : null}
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

function Nav() {
  const items = [
    { label: "Videos", href: "#videos" },
    { label: "Islands", href: "#islands" },
    { label: "Schedule", href: "#schedule" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{DISPLAY_NAME}</div>
            <div className="text-xs text-white/50">Fortnite Creator</div>
          </div>
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {it.label}
            </a>
          ))}
        </div>
        <a
          href={LINKS.youtube}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
        >
          <Play className="h-4 w-4" />
          Watch
        </a>
      </div>
    </div>
  );
}

function CreatorCodeBar() {
  const [copied, setCopied] = useState(false);

  return (
    <Card className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="text-sm font-semibold text-white">
          Support the grind — use my Creator Code
        </div>
        <div className="text-white/60 text-sm">
          In the Fortnite Item Shop, type: <span className="text-white">{CREATOR_CODE}</span>
        </div>
      </div>
      <button
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(CREATOR_CODE);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          } catch {
            // ignore
          }
        }}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied" : "Copy code"}
      </button>
    </Card>
  );
}

function Hero() {
  return (
    <div className="relative" id="top">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-black to-black" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-12 md:items-center"
        >
          <div className="md:col-span-7">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge>Fortnite</Badge>
              <Badge>UEFN</Badge>
              <Badge>Customs</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {DISPLAY_NAME} — clips, builds, and chaos (the fun kind)
            </h1>
            <p className="mt-4 text-base text-white/65 sm:text-lg">
              I post highlights, tutorial-style tips, and UEFN island updates. If you like
              fast edits, clean fights, and a little bit of menace… you’re in the right place.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pill icon={Youtube} label="YouTube" href={LINKS.youtube} />
              <Pill icon={Twitch} label="Twitch" href={LINKS.twitch} />
              <Pill icon={Disc} label="Discord" href={LINKS.discord} />
            </div>

            <div className="mt-8">
              <CreatorCodeBar />
            </div>
          </div>

          <div className="md:col-span-5">
            <Card className="p-6">
              <div className="text-sm font-semibold text-white">Quick links</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={LINKS.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-2 text-white">
                    <Youtube className="h-4 w-4" />
                    <div className="text-sm font-medium">Latest videos</div>
                  </div>
                  <div className="mt-1 text-xs text-white/50">Uploads + shorts</div>
                </a>
                <a
                  href={LINKS.twitch}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-2 text-white">
                    <Twitch className="h-4 w-4" />
                    <div className="text-sm font-medium">Live streams</div>
                  </div>
                  <div className="mt-1 text-xs text-white/50">Ranked + customs</div>
                </a>
                <a
                  href={LINKS.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-2 text-white">
                    <Twitter className="h-4 w-4" />
                    <div className="text-sm font-medium">Updates</div>
                  </div>
                  <div className="mt-1 text-xs text-white/50">Patch notes + clips</div>
                </a>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-2 text-white">
                    <Instagram className="h-4 w-4" />
                    <div className="text-sm font-medium">Reels</div>
                  </div>
                  <div className="mt-1 text-xs text-white/50">Behind the scenes</div>
                </a>
              </div>
              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-white/60">
                Tip: Replace the placeholder links + island codes at the top of this file.
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Videos() {
  return (
    <Section
      id="videos"
      title="Featured videos"
      kicker="WATCH"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {FEATURED_VIDEOS.map((v) => (
          <a
            key={v.title}
            href={v.url}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Card className="h-full transition hover:bg-white/10">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">{v.title}</div>
                  <div className="mt-1 text-sm text-white/60">{v.desc}</div>
                </div>
                <Badge>{v.tag}</Badge>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                <Play className="h-4 w-4" />
                <span className="transition group-hover:text-white">Watch</span>
                <ExternalLink className="h-4 w-4 opacity-40" />
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Islands() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ISLANDS;
    return ISLANDS.filter((x) =>
      [x.name, x.code, x.mode, x.status, x.blurb].some((s) =>
        s.toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <Section id="islands" title="UEFN islands" kicker="PLAY">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-white/60 text-sm">
          Drop in, try them out, and tell me what to add next.
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search islands (name, code, mode…)"
            className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((x) => (
          <Card key={x.name} className="h-full">
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm font-semibold text-white">{x.name}</div>
              <Badge>{x.status}</Badge>
            </div>
            <div className="mt-2 text-sm text-white/60">{x.blurb}</div>

            <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <MapIcon className="h-4 w-4" />
              <span className="font-mono">{x.code}</span>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(x.code);
                  } catch {
                    // ignore
                  }
                }}
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
                title="Copy island code"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
            </div>

            <div className="mt-3 text-xs text-white/50">Mode: {x.mode}</div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 text-sm text-white/60">
          No matches. Try a different search.
        </div>
      ) : null}
    </Section>
  );
}

function Schedule() {
  return (
    <Section id="schedule" title="Stream schedule" kicker="LIVE">
      <div className="grid gap-4 md:grid-cols-12">
        <div className="md:col-span-8">
          <Card>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Calendar className="h-4 w-4" />
              Weekly times (local)
            </div>
            <div className="mt-4 grid gap-2">
              {SCHEDULE.map((s) => (
                <div
                  key={s.day}
                  className="flex flex-col gap-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 rounded-lg bg-white/5 px-2 py-1 text-center text-xs font-semibold text-white/80">
                      {s.day}
                    </div>
                    <div>
                      <div className="text-sm text-white">{s.time}</div>
                      <div className="text-xs text-white/50">{s.note}</div>
                    </div>
                  </div>
                  <div className="text-xs text-white/50">Follow for updates</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="md:col-span-4">
          <Card>
            <div className="text-sm font-semibold text-white">What to expect</div>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              <li>• Ranked grind + coaching moments</li>
              <li>• Viewer customs + community nights</li>
              <li>• UEFN updates + sneak peeks</li>
              <li>• Clip reviews + challenges</li>
            </ul>
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 text-xs text-white/55">
              Want a “live now” banner + custom colors? Tell me your vibe and I’ll match it.
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" title="About me" kicker="WHO">
      <div className="grid gap-4 md:grid-cols-12">
        <div className="md:col-span-7">
          <Card>
            <div className="text-sm text-white/70">
              I’m <span className="text-white font-semibold">{DISPLAY_NAME}</span> —
              Fortnite creator focused on clean gameplay, hype moments, and building fun
              UEFN maps. My goal is simple: make content you actually want to rewatch and
              islands you want to queue again.
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Ranked</Badge>
              <Badge>Customs</Badge>
              <Badge>UEFN</Badge>
              <Badge>Tutorials</Badge>
              <Badge>Highlights</Badge>
            </div>
          </Card>
        </div>
        <div className="md:col-span-5">
          <Card>
            <div className="text-sm font-semibold text-white">Socials</div>
            <div className="mt-4 grid grid-cols-1 gap-2">
              <a
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                href={LINKS.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Youtube className="h-4 w-4" /> YouTube
                </span>
                <ExternalLink className="h-4 w-4 opacity-40" />
              </a>
              <a
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                href={LINKS.twitch}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Twitch className="h-4 w-4" /> Twitch
                </span>
                <ExternalLink className="h-4 w-4 opacity-40" />
              </a>
              <a
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                href={LINKS.discord}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Disc className="h-4 w-4" /> Discord
                </span>
                <ExternalLink className="h-4 w-4 opacity-40" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const subject = encodeURIComponent(`Collab / Business — ${DISPLAY_NAME}`);
  const body = encodeURIComponent(
    `Hey ${DISPLAY_NAME},\n\nI’m reaching out about…\n\nLinks (optional):\n- Channel: \n- Social: \n\nThanks!`
  );

  return (
    <Section id="contact" title="Contact" kicker="LET’S WORK">
      <div className="grid gap-4 md:grid-cols-12">
        <div className="md:col-span-7">
          <Card>
            <div className="text-sm text-white/70">
              For business, collabs, or community events: hit me up.
            </div>
            <a
              href={`mailto:${LINKS.contactEmail}?subject=${subject}&body=${body}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 text-xs text-white/55">
              Want a contact form that sends to your email? Tell me what host you’re using
              (Carrd, Netlify, Vercel, Wix, etc.) and I’ll wire it up.
            </div>
          </Card>
        </div>
        <div className="md:col-span-5">
          <Card>
            <div className="text-sm font-semibold text-white">Creator Code</div>
            <div className="mt-2 text-sm text-white/60">
              If you want to support, use code <span className="text-white">{CREATOR_CODE}</span> in
              the Item Shop.
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
              Pro move: add this site link to your YouTube banner + Discord server.
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} {DISPLAY_NAME}. Built for Fortnite content.
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="text-sm text-white/60 transition hover:text-white"
              href="#top"
            >
              Back to top
            </a>
            <a
              className="text-sm text-white/60 transition hover:text-white"
              href={LINKS.youtube}
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a
              className="text-sm text-white/60 transition hover:text-white"
              href={LINKS.discord}
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function FortniteCreatorSite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <div className="space-y-14 pb-14">
        <Videos />
        <Islands />
        <Schedule />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
