import {
  ArrowUpRight,
  Check,
  Globe2,
  Smartphone,
  Apple,
  Flower2,
  Camera,
  Users,
  CirclePlay,
  Mail,
} from "lucide-react";
import { Logo, PhoneMockup, LinkButton } from "./ui";
export function LanguageSection() {
  return (
    <section id="languages" className="language-section container">
      <span className="language-globe">
        <Globe2 size={34} strokeWidth={1} />
      </span>
      <p className="eyebrow">MANY LANGUAGES. SHARED WISDOM.</p>
      <h2>Wisdom Without Language Barriers</h2>
      <p>A future experience that feels closer to home.</p>
      <div className="language-chips">
        {[
          "English", "हिन्दी", "ગુજરાતી", "मराठी", "தமிழ்", "తెలుగు", "বাংলা", "ਪੰਜਾਬੀ", ].map((language, index) => (
          <span
            key={language}
            lang={["en", "hi", "gu", "mr", "ta", "te", "bn", "pa"][index]}
          >
            {language}
          </span>
        ))}
      </div>
      <p className="small muted">
        Planned language support · And more languages coming soon.
      </p>
    </section>
  );
}
export function AppShowcase() {
  return (
    <section id="app" className="app-section">
      <div className="container app-layout">
        <div className="app-phones">
          <div className="app-ring" />
          <PhoneMockup />
          <PhoneMockup alternate />
          <span className="app-star">✧</span>
        </div>
        <div className="app-copy">
          <p className="eyebrow">
            <span />
            YOUR JOURNEY, IN YOUR POCKET
          </p>
          <h2>
            Jain Wisdom,
            <br />
            <em>Wherever You Go.</em>
          </h2>
          <p>
            Carry a little inspiration into your everyday. Learn, listen and
            discover — wherever life takes you.
          </p>
          <span className="app-platform">
            <Smartphone size={17} />
            Designed for Android & iOS
          </span>
          <div className="store-buttons">
            <button disabled>
              <Smartphone size={25} />
              <span>
                <small>COMING SOON</small>Android App
              </span>
            </button>
            <button disabled>
              <Apple size={27} />
              <span>
                <small>COMING SOON</small>iOS App
              </span>
            </button>
          </div>
          <p className="small muted">
            A preview of the future mobile experience.
          </p>
        </div>
      </div>
    </section>
  );
}
export function MembershipSection() {
  return (
    <section id="membership" className="section container membership-section">
      <div className="membership-copy">
        <p className="eyebrow">
          <span />
          MORE ROOM TO GROW
        </p>
        <h2>
          Jain Wisdom
          <br />
          <em>Membership</em>
        </h2>
        <p className="section-description">
          A thoughtful way to deepen your journey.
        </p>
        <span className="demo-label">PROPOSED MEMBERSHIP PLANS</span>
        <ul className="benefit-list">
          {[
            "Access to premium learning content",
            "Extended audio library",
            "Books & digital resources",
            "Enhanced learning experience",
          ].map((item) => (
            <li key={item}>
              <Check size={17} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="membership-plans">
        <article className="plan-card">
          <span className="small muted">A MONTH AT A TIME</span>
          <h3>Monthly</h3>
          <div className="price">
            ₹200<small>/ month</small>
          </div>
          <p>Space for everyday discovery.</p>
          <button className="button secondary" disabled>
            Coming Soon
          </button>
          <small>Proposed plan · No payments</small>
        </article>
        <article className="plan-card yearly">
          <span className="plan-badge">A YEAR OF POSSIBILITIES</span>
          <span className="small muted">THE LONGER JOURNEY</span>
          <h3>Yearly</h3>
          <div className="price">
            ₹2,200<small>/ year</small>
          </div>
          <p>A year of learning and reflection.</p>
          <button className="button" disabled>
            Coming Soon
          </button>
          <small>Proposed plan · No payments</small>
        </article>
      </div>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-flower">
        <Flower2 size={420} strokeWidth={0.3} />
      </div>
      <div className="container">
        <p className="eyebrow">ANCIENT ROOTS. NEW POSSIBILITIES.</p>
        <h2>
          Preserving Wisdom.
          <br />
          <em>Connecting Generations.</em>
        </h2>
        <p>
          Jain Wisdom brings knowledge, spirituality and community
          <br className="desktop-break" /> together in one modern digital
          experience.
        </p>
        <LinkButton href="#explore">Explore Jain Wisdom</LinkButton>
      </div>
    </section>
  );
}
export function Footer() {
  const columns = [
    {
      name: "Explore",
      links: [
        ["Tirthankars", "tirthankars"],
        ["Tirth Guide", "tirth"],
        ["Jain Stories", "learning"],
        ["Quiz", "quiz"],
      ],
    },
    {
      name: "Resources",
      links: [
        ["Aarti & Bhajan", "audio"],
        ["Jain Calendar", "calendar"],
        ["Museums", "community"],
        ["Books", "learning"],
      ],
    },
    {
      name: "Community",
      links: [
        ["Jain Samaj", "community"],
        ["Volunteers", "volunteer"],
        ["Business Directory", "directory"],
      ],
    },
    {
      name: "Platform",
      links: [
        ["About", "home"],
        ["Android App", "app"],
        ["iOS App", "app"],
        ["Contact", "volunteer"],
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            A modern home for timeless wisdom
            <br />
            and meaningful connections.
          </p>
          <div
            className="social-icons"
            aria-label="Social channels coming soon"
          >
            {[Camera, Users, CirclePlay, Mail].map((Icon, i) => (
              <span key={i} title="Social channel placeholder">
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>
        {columns.map((column) => (
          <div className="footer-column" key={column.name}>
            <h3>{column.name}</h3>
            {column.links.map(([label, id]) => (
              <a key={label} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Jain Wisdom. Demo concept.</span>
        <span>
          Discover <i>⬢</i> Learn <i>⬢</i> Connect
        </span>
        <a href="#home">
          Back to top
          <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}
