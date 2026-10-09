import { ArrowUpRight, Flower2, MapPin, Play, Sparkles } from "lucide-react";
import { LinkButton, PhoneMockup } from "./ui";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge">
            <Sparkles size={14} /> ANCIENT WISDOM. MODERN EXPERIENCE.
          </div>
          <h1>
            Discover the
            <br />
            <em>Wisdom</em> of
            <br />
            Jainism<span className="heading-dot">.</span>
          </h1>
          <p>
            Explore timeless teachings, sacred places, stories, prayers and a
            growing Jain community — all in one place.
          </p>
          <div className="hero-buttons">
            <LinkButton href="#explore">Explore Jain Wisdom</LinkButton>
            <LinkButton href="#quiz" secondary>
              Take Today’s Quiz
            </LinkButton>
          </div>
          <div className="hero-note">
            <span className="tiny-avatars">
              <i>A</i>
              <i>V</i>
              <i>J</i>
              <i>M</i>
            </span>
            <span>
              A shared journey.
              <br />
              <b>A world of possibilities.</b>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="visual-star star-one">✧</div>
          <div className="visual-star star-two">✦</div>
          <div className="floating-card wisdom-float">
            <span className="float-icon">
              <Flower2 size={23} />
            </span>
            <div>
              <small>A MOMENT FOR YOU</small>
              <b>Daily Wisdom</b>
              <span>Reflect. Renew. Reconnect.</span>
            </div>
          </div>
          <PhoneMockup />
          <div className="floating-card tirth-float">
            <span className="float-icon gold">
              <MapPin size={22} />
            </span>
            <div>
              <small>YOUR NEXT JOURNEY</small>
              <b>Explore Sacred Tirths</b>
              <span>Discover places of reflection.</span>
            </div>
            <ArrowUpRight size={18} />
          </div>
          <div className="floating-card audio-float">
            <span className="round-play">
              <Play size={16} fill="currentColor" />
            </span>
            <div>
              <b>Aarti & Bhajan</b>
              <span className="waveform">▂▅▃▇▅▂▆▃▅▇▃▂▅▃</span>
            </div>
          </div>
          <span className="visual-caption">
            A GLIMPSE OF YOUR FUTURE DIGITAL COMPANION
          </span>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>Rooted in tradition. Designed for today.</span>
        <div>
          <span>
            <Flower2 size={17} /> Thoughtful learning
          </span>
          <span>
            <MapPin size={17} /> Sacred discoveries
          </span>
          <span>
            <Sparkles size={17} /> Meaningful connections
          </span>
        </div>
      </div>
    </section>
  );
}
