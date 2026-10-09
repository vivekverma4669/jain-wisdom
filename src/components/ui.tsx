"use client";
import {
  ArrowUpRight,
  AudioLines,
  BookOpen,
  CalendarDays,
  Landmark,
  MapPin,
  Sparkles,
  Users,
  Flower2,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";
export const iconMap = {
  lotus: Flower2,
  book: BookOpen,
  temple: Landmark,
  audio: AudioLines,
  calendar: CalendarDays,
  sparkles: Sparkles,
  museum: Landmark,
  people: Users,
};
export function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Jain Wisdom home">
      <span className="brand-mark">
        <span />
      </span>
      <span>
        Jain<span className="wordmark-light"> Wisdom</span>
        <small>DISCOVER · LEARN · CONNECT</small>
      </span>
    </a>
  );
}
export function LinkButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a href={href} className={`button ${secondary ? "secondary" : ""}`}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  link?: { href: string; text: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {link && (
        <a className="text-link" href={link.href}>
          {link.text}
          <ArrowUpRight size={17} />
        </a>
      )}
    </div>
  );
}
export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      dialog?.close();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="modal"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-top">
        <h3>{title}</h3>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X />
        </button>
      </div>
      {children}
    </dialog>
  );
}
export function TempleArt({
  variant = "mountain",
}: {
  variant?: "mountain" | "hill";
}) {
  return (
    <div
      className={`temple-art landscape-${variant}`}
      role="img"
      aria-label="Illustrative sacred landscape, not a photograph of the destination"
    >
      <div className="sun" />
      <div className="mountain back" />
      <div className="mountain front" />
      <div className="temple">
        <div className="spire" />
        <div className="temple-roof" />
        <div className="temple-base">
          <i />
          <i />
          <i />
        </div>
      </div>
      <span className="art-label">ILLUSTRATIVE LANDSCAPE</span>
    </div>
  );
}
export function PhoneMockup({ alternate = false }: { alternate?: boolean }) {
  return (
    <div className={`phone ${alternate ? "alternate" : ""}`}>
      <div className="phone-island" />
      <div className="phone-status">
        9:41 <span>▮▮▮ &nbsp;▰</span>
      </div>
      <div className="phone-header">
        <span className="brand-mark">
          <span />
        </span>
        <b>Jain Wisdom</b>
        <span className="mini-avatar">J</span>
      </div>
      <p className="phone-greeting">A little wisdom, every day.</p>
      <h3>{alternate ? "Make time for yourself." : "Begin within."}</h3>
      <div className="phone-wisdom">
        <span>✧ &nbsp; DAILY WISDOM</span>
        <Flower2 size={42} strokeWidth={1} />
        <p>
          {alternate
            ? "Pause. Breathe. Reflect."
            : "Small moments. Meaningful reflections."}
        </p>
        <small>Sample daily wisdom</small>
      </div>
      <div className="phone-section">
        {alternate ? "Your mindful playlist" : "Explore your path"}{" "}
        <ArrowUpRight size={14} />
      </div>
      <div className="phone-grid">
        {(alternate
          ? [
              [AudioLines, "Audio"],
              [BookOpen, "Stories"],
              [Flower2, "Bhavna"],
              [Sparkles, "Quiz"],
            ]
          : [
              [Landmark, "Tirth Guide"],
              [BookOpen, "Learn"],
              [AudioLines, "Bhajan"],
              [Sparkles, "Quiz"],
            ]
        ).map(([Icon, label]) => {
          const C = Icon as typeof MapPin;
          return (
            <div key={String(label)}>
              <C size={21} />
              <span>{String(label)}</span>
            </div>
          );
        })}
      </div>
      <div className="phone-bottom">
        <span>
          ⌂<small>Home</small>
        </span>
        <BookOpen size={18} />
        <AudioLines size={18} />
        <Users size={18} />
      </div>
    </div>
  );
}
