"use client";
import { useEffect, useState } from "react";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, exploreItems } from "@/data/demo";
import { Logo, Modal } from "./ui";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [hindi, setHindi] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="language-button"
              aria-label="Toggle language preview"
              onClick={() => setHindi(!hindi)}
            >
              {hindi ? "हिन्दी" : "EN"}
              <span>⌄</span>
            </button>
            <button
              className="icon-button"
              aria-label="Search Jain Wisdom"
              onClick={() => setSearch(true)}
            >
              <Search size={20} />
            </button>
            <a className="button nav-cta" href="#explore">
              Explore Wisdom <ArrowUpRight size={16} />
            </a>
            <button
              className="icon-button menu-button"
              aria-label="Open navigation"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      {hindi && (
        <div className="language-notice" role="status">
          हिन्दी selected · Full translations are planned for the future
          platform.
        </div>
      )}
      {open && (
        <Modal title="Explore Jain Wisdom" onClose={() => setOpen(false)}>
          <nav className="mobile-nav">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        </Modal>
      )}
      {search && (
        <Modal
          title="Find your next discovery"
          onClose={() => {
            setSearch(false);
            setQuery("");
          }}
        >
          <label className="search-input">
            <Search size={20} />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories, tirths, audio…"
              aria-label="Search demo content"
            />
            {query && (
              <button
                aria-label="Clear search"
                className="icon-button"
                onClick={() => setQuery("")}
              >
                <X size={16} />
              </button>
            )}
          </label>
          <p className="muted small">Explore the demo collections</p>
          <div className="search-results">
            {exploreItems
              .filter((item) =>
                `${item.title} ${item.description}`
                  .toLowerCase()
                  .includes(query.toLowerCase()),
              )
              .map((item) => (
                <a
                  key={item.title}
                  href={`#${item.target}`}
                  onClick={() => setSearch(false)}
                >
                  <span>
                    <b>{item.title}</b>
                    <small>{item.description}</small>
                  </span>
                  <ArrowUpRight size={20} />
                </a>
              ))}
            {!exploreItems.some((item) =>
              `${item.title} ${item.description}`
                .toLowerCase()
                .includes(query.toLowerCase()),
            ) && <p>No collections found. Try “Tirth” or “Stories”.</p>}
          </div>
        </Modal>
      )}
    </>
  );
}
