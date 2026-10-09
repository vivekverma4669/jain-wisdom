"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Users,
  HeartHandshake,
  Landmark,
  BriefcaseBusiness,
  MapPin,
  Check,
  Leaf,
  Send,
} from "lucide-react";
import { businesses } from "@/data/demo";
import { SectionHeading, Modal } from "./ui";
export function CommunitySection() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section id="community" className="section container">
      <SectionHeading
        eyebrow="BELONG TO SOMETHING MEANINGFUL"
        title="Connect With the Jain Community"
        description="Shared values. New connections. A stronger community."
      />
      <div className="community-layout">
        <div className="community-panel">
          <div className="community-orbit">
            <span className="community-person person-a">AS</span>
            <span className="community-person person-b">VN</span>
            <span className="community-person person-c">MP</span>
            <span className="community-person person-d">RJ</span>
            <span className="community-center">
              <Users size={42} strokeWidth={1.1} />
            </span>
          </div>
          <h3>Better, together.</h3>
          <p>
            A digital home for shared learning
            <br />
            and meaningful connection.
          </p>
          <span className="demo-label">FUTURE COMMUNITY EXPERIENCE</span>
        </div>
        <div className="community-grid">
          {[
            {
              name: "Jain Samaj",
              copy: "Find and connect with Jain communities.",
              icon: Users,
            },
            {
              name: "Jain Volunteers",
              copy: "Explore seva and volunteering opportunities.",
              icon: HeartHandshake,
            },
            {
              name: "Jain Museums",
              copy: "Discover museums and cultural collections.",
              icon: Landmark,
            },
            {
              name: "Business Directory",
              copy: "Discover Jain-owned businesses and services.",
              icon: BriefcaseBusiness,
            },
          ].map(({ name, copy, icon: Icon }) => (
            <a
              key={name}
              className="community-card"
              href={
                name === "Jain Volunteers"
                  ? "#volunteer"
                  : name === "Business Directory"
                    ? "#directory"
                    : "#community"
              }
              onClick={(e) => {
                if (["Jain Samaj", "Jain Museums"].includes(name)) {
                  e.preventDefault();
                  setSelected(name);
                }
              }}
            >
              <Icon size={26} strokeWidth={1.5} />
              <h3>{name}</h3>
              <p>{copy}</p>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </div>
      {selected && (
        <Modal title={selected} onClose={() => setSelected(null)}>
          <span className="demo-label">COMMUNITY PREVIEW</span>
          <p>
            {selected === "Jain Museums"
              ? "Future museum profiles will introduce cultural collections through reviewed resources."
              : "The future platform will help members discover Jain communities and opportunities to connect."}
          </p>
          <p className="muted">
            Profiles and community features will become available with the full
            platform.
          </p>
        </Modal>
      )}
    </section>
  );
}
export function BusinessDirectory() {
  const [selected, setSelected] = useState<(typeof businesses)[number] | null>(
    null,
  );
  const [category, setCategory] = useState("All");
  return (
    <section id="directory" className="section directory-section">
      <div className="container">
        <SectionHeading
          eyebrow="SUPPORT YOUR COMMUNITY"
          title="Discover Local Possibilities"
          description="A preview of the future Jain business directory."
          link={{ href: "#directory-list", text: "Explore Directory" }}
        />
        <div
          className="directory-tabs"
          role="group"
          aria-label="Business categories"
        >
          {[
            "All",
            "Medical Stores",
            "Restaurants",
            "Professional Services",
            "Retail",
            "Education",
          ].map((item) => (
            <button
              aria-pressed={category === item}
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div id="directory-list" className="business-grid">
          {businesses
            .filter((b) => category === "All" || b.category === category)
            .map((b) => (
              <article className="business-card" key={b.name}>
                <div className="business-top">
                  <span className="business-monogram">{b.initial}</span>
                  <span className="demo-label">DEMO BUSINESS</span>
                </div>
                <span className="small muted">{b.category}</span>
                <h3>{b.name}</h3>
                <span className="location">
                  <MapPin size={14} />
                  {b.city}
                </span>
                <button className="text-link" onClick={() => setSelected(b)}>
                  View Details
                  <ArrowUpRight size={17} />
                </button>
              </article>
            ))}
          {!businesses.some(
            (b) => category === "All" || b.category === category,
          ) && (
            <div className="directory-empty">
              <BriefcaseBusiness size={28} />
              <h3>More possibilities to come</h3>
              <p>No sample listings in this category yet.</p>
              <button className="text-link" onClick={() => setCategory("All")}>
                See all sample listings
                <ArrowUpRight size={17} />
              </button>
            </div>
          )}
        </div>
        <p className="small muted">
          All business names and listings are fictional examples for this
          presentation.
        </p>
      </div>
      {selected && (
        <Modal title={selected.name} onClose={() => setSelected(null)}>
          <span className="demo-label">FICTIONAL DEMO BUSINESS</span>
          <p>
            {selected.category} · {selected.city}
          </p>
          <p className="muted">
            This sample listing illustrates a future business profile. It does
            not represent a real business. Contact details and reviews will be
            available on future verified listings.
          </p>
        </Modal>
      )}
    </section>
  );
}
export function VolunteerSection() {
  const [received, setReceived] = useState(false);
  return (
    <section id="volunteer" className="section container">
      <div className="volunteer-panel">
        <div className="volunteer-copy">
          <span className="tile-icon">
            <HeartHandshake size={30} strokeWidth={1.3} />
          </span>
          <p className="eyebrow">SMALL ACTS. SHARED PURPOSE.</p>
          <h2>
            Contribute
            <br />
            Through <em>Seva.</em>
          </h2>
          <p>
            Discover opportunities to contribute your time and skills to the
            Jain community.
          </p>
          <div className="volunteer-note">
            <Leaf size={19} />
            <span>Your time can make a meaningful difference.</span>
          </div>
        </div>
        <form
          className="volunteer-form"
          onSubmit={(e) => {
            e.preventDefault();
            setReceived(true);
          }}
        >
          <span className="demo-label">DEMO REGISTRATION</span>
          <h3>Begin with a small step.</h3>
          <p>Tell us a little about yourself.</p>
          <label>
            Name
            <input
              name="name"
              required
              placeholder="Your full name"
              autoComplete="name"
              maxLength={80}
            />
          </label>
          <label>
            City
            <input
              name="city"
              required
              placeholder="Your city"
              autoComplete="address-level2"
              maxLength={80}
            />
          </label>
          <label>
            Area of Interest
            <select name="interest" required defaultValue="">
              <option value="" disabled>
                How would you like to contribute?
              </option>
              <option>Teaching & learning</option>
              <option>Community events</option>
              <option>Content & translation</option>
              <option>Design & technology</option>
              <option>Other seva opportunities</option>
            </select>
          </label>
          <button className="button" type="submit">
            Become a Volunteer <Send size={16} />
          </button>
          <p className="form-status" role="status">
            {received ? (
              <>
                <Check size={17} />
                Demo registration received.
              </>
            ) : (
              "Presentation only. No information is sent or stored."
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
