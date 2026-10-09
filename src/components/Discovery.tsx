"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Bookmark,
  Check,
  Flower2,
  Share2,
  MapPin,
  Compass,
} from "lucide-react";
import { exploreItems, tirthankars } from "@/data/demo";
import { iconMap, SectionHeading, Modal, LinkButton, TempleArt } from "./ui";
export function ExploreGrid() {
  return (
    <section id="explore" className="section container">
      <SectionHeading
        eyebrow="A WORLD TO DISCOVER"
        title="Explore Jain Wisdom"
        description="Many paths. One place to begin."
      />
      <div className="explore-grid">
        {exploreItems.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <a
              className="explore-card"
              href={`#${item.target}`}
              key={item.title}
            >
              <span className={`tile-icon tone-${index % 4}`}>
                <Icon size={25} strokeWidth={1.5} />
              </span>
              <ArrowUpRight className="card-arrow" size={19} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export function TirthankarSection() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section id="tirthankars" className="section soft-section">
      <div className="container">
        <SectionHeading
          eyebrow="THE GUIDING LIGHTS"
          title="Know the 24 Tirthankars"
          description="A thoughtful introduction to their lives, symbols and stories."
        />
        <div className="tirthankar-grid">
          {tirthankars.map((person) => (
            <button
              className="tirthankar-card"
              key={person.name}
              onClick={() => setSelected(person.name)}
            >
              <span className="tirthankar-number">{person.number}</span>
              <div className="meditation-art">
                <Flower2 strokeWidth={0.8} size={62} />
                <div className="meditation-ring" />
              </div>
              <small>TIRTHANKAR {person.number}</small>
              <h3>{person.name}</h3>
              <p>An introduction to a timeless legacy.</p>
              <span className="text-link">
                Explore Story <ArrowUpRight size={15} />
              </span>
            </button>
          ))}
        </div>
        <div className="center-action">
          <button
            className="button secondary"
            onClick={() => setSelected("The 24 Tirthankars")}
          >
            View All 24 Tirthankars <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
      {selected && (
        <Modal title={selected} onClose={() => setSelected(null)}>
          <div className="detail-emblem">
            <Flower2 size={52} strokeWidth={1} />
          </div>
          <span className="demo-label">CONTENT PREVIEW</span>
          <p>
            This collection will introduce the Tirthankars through carefully
            reviewed stories, symbols and learning resources.
          </p>
          <p className="muted">
            Detailed religious content is a placeholder in this presentation. It
            will be reviewed before the platform launches.
          </p>
          <a
            className="button"
            href="#learning"
            onClick={() => setSelected(null)}
          >
            Explore learning <ArrowUpRight size={17} />
          </a>
        </Modal>
      )}
    </section>
  );
}
export function DailyWisdom() {
  const [saved, setSaved] = useState(false);
  const [read, setRead] = useState(false);
  const [shared, setShared] = useState(false);
  async function share() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/#wisdom`);
      setShared(true);
    } catch {
      setRead(true);
    }
  }
  return (
    <section id="wisdom" className="container wisdom-section">
      <div className="wisdom-card">
        <div className="wisdom-decoration">
          <Flower2 size={260} strokeWidth={0.35} />
        </div>
        <div className="wisdom-intro">
          <span className="light-badge">
            <Sparkle /> DAILY WISDOM
          </span>
          <h2>Wisdom for Today</h2>
          <p>
            A gentle invitation to pause
            <br />
            and look within.
          </p>
        </div>
        <div className="wisdom-quote">
          <span className="quote-mark">“</span>
          <p>
            Make a little space for
            <br />
            <em>a more mindful day.</em>
          </p>
          <span className="sample-caption">
            SAMPLE DAILY WISDOM · NOT A SCRIPTURE QUOTATION
          </span>
          <div className="wisdom-actions">
            <button aria-pressed={saved} onClick={() => setSaved(!saved)}>
              {saved ? <Check size={17} /> : <Bookmark size={17} />}{" "}
              {saved ? "Saved" : "Save"}
            </button>
            <button onClick={share}>
              <Share2 size={17} />
              {shared ? "Link copied" : "Share"}
            </button>
            <button onClick={() => setRead(true)}>
              Read More
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </div>
      {read && (
        <Modal title="A moment to reflect" onClose={() => setRead(false)}>
          <span className="demo-label">SAMPLE DAILY WISDOM</span>
          <p>
            Set aside a quiet moment to reflect on the day and your intentions.
          </p>
          <p className="muted">
            This is placeholder editorial copy, without religious attribution.
            Live content will be managed through the Jain Wisdom platform.
          </p>
        </Modal>
      )}
    </section>
  );
}
function Sparkle() {
  return <span aria-hidden="true">✧</span>;
}
export function TirthGuide() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section id="tirth" className="section container">
      <SectionHeading
        eyebrow="JOURNEYS WITH MEANING"
        title="Explore Sacred Jain Tirths"
        description="Discover pilgrimage locations and make room for meaningful journeys."
        link={{ href: "#tirth-map", text: "Explore Tirth Guide" }}
      />
      <div className="destination-grid">
        {[
          {
            name: "Girnarji",
            location: "Gujarat, India",
            variant: "mountain" as const,
          },
          {
            name: "Shikharji",
            location: "Jharkhand, India",
            variant: "hill" as const,
          },
        ].map((item) => (
          <article className="destination-card" key={item.name}>
            <TempleArt variant={item.variant} />
            <div className="destination-content">
              <span className="location">
                <MapPin size={14} />
                {item.location}
              </span>
              <h3>{item.name}</h3>
              <p>
                Explore a sacred destination through a future guide to its
                history and visitor resources.
              </p>
              <button
                className="text-link"
                onClick={() => setSelected(item.name)}
              >
                Explore Tirth <ArrowUpRight size={17} />
              </button>
            </div>
          </article>
        ))}
        <div id="tirth-map" className="map-card">
          <span className="tile-icon">
            <Compass size={26} />
          </span>
          <h3>
            Your next journey
            <br />
            starts here.
          </h3>
          <p>A future guide to sacred places, thoughtfully brought together.</p>
          <div className="stylized-map">
            <div className="map-line" />
            <span className="map-pin pin-one">
              <MapPin size={22} />
              <small>Girnarji</small>
            </span>
            <span className="map-pin pin-two">
              <MapPin size={22} />
              <small>Shikharji</small>
            </span>
            <span className="map-pin pin-three">
              <MapPin size={22} />
            </span>
          </div>
          <span className="demo-label">LOCATION PREVIEW · NOT A LIVE MAP</span>
          <button
            className="text-link"
            onClick={() => setSelected("Tirth Guide")}
          >
            Discover the guide
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
      {selected && (
        <Modal title={selected} onClose={() => setSelected(null)}>
          <span className="demo-label">TIRTH GUIDE PREVIEW</span>
          <p>
            Future destination pages will bring together reviewed history,
            location details and visitor information.
          </p>
          <p className="muted">
            Maps, travel details and destination content are demonstration
            placeholders. The landscape artwork is illustrative.
          </p>
          <LinkButton href="#volunteer" secondary>
            Connect with the community
          </LinkButton>
        </Modal>
      )}
    </section>
  );
}
