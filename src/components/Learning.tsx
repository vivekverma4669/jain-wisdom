"use client";
import { useState } from "react";
import {
  AudioLines,
  Play,
  Pause,
  Heart,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Check,
  RotateCcw,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { tracks, quizQuestions } from "@/data/demo";
import { SectionHeading, Modal } from "./ui";
export function AudioSection() {
  const [category, setCategory] = useState("Aarti");
  const [playing, setPlaying] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  return (
    <section id="audio" className="section soft-section">
      <div className="container audio-layout">
        <div className="audio-intro">
          <p className="eyebrow">
            <span />
            SOUND FOR THE SOUL
          </p>
          <h2>
            Listen.
            <br />
            <em>Reflect.</em>
            <br />
            Connect.
          </h2>
          <p>
            Find a moment of calm in a thoughtfully curated world of devotional
            audio.
          </p>
          <div className="audio-art">
            <AudioLines size={78} strokeWidth={1} />
            <span>YOUR MOMENT OF STILLNESS</span>
          </div>
        </div>
        <div className="audio-library">
          <div
            className="audio-tabs"
            role="group"
            aria-label="Audio categories"
          >
            {tracks.map((track) => (
              <button
                key={track.category}
                aria-pressed={category === track.category}
                className={category === track.category ? "selected" : ""}
                onClick={() => {
                  setCategory(track.category);
                  setPlaying(null);
                }}
              >
                {track.category}
              </button>
            ))}
          </div>
          <div className="audio-feature">
            <div className="album-art">
              <span>JAIN WISDOM</span>
              <AudioLines size={53} strokeWidth={1} />
              <span>A MINDFUL COLLECTION</span>
            </div>
            <div>
              <span className="demo-label">DEMO AUDIO COLLECTION</span>
              <h3>{category}</h3>
              <p>Make time for reflection.</p>
              <small>Player preview · No audio file</small>
            </div>
          </div>
          {[
            tracks.find((track) => track.category === category)!,
            {
              title: `${category}: the reflection edition`,
              category,
              duration: "05:36",
            },
          ].map((track, index) => (
            <div
              className={`track ${playing === track.title ? "is-playing" : ""}`}
              key={track.title}
            >
              <button
                className="track-play"
                aria-label={`${playing === track.title ? "Pause" : "Play"} ${track.title} demo`}
                onClick={() =>
                  setPlaying(playing === track.title ? null : track.title)
                }
              >
                {playing === track.title ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" />
                )}
              </button>
              <div className="track-info">
                <b>{track.title}</b>
                <span>{track.category} · Sample track</span>
                <div className="progress">
                  <i
                    style={{
                      width:
                        playing === track.title
                          ? "38%"
                          : index === 0
                            ? "18%"
                            : "0%",
                    }}
                  />
                </div>
              </div>
              <span className="duration">{track.duration}</span>
              <button
                className={`icon-button favorite ${favorites.includes(track.title) ? "active" : ""}`}
                aria-label={`Favorite ${track.title}`}
                aria-pressed={favorites.includes(track.title)}
                onClick={() =>
                  setFavorites(
                    favorites.includes(track.title)
                      ? favorites.filter((t) => t !== track.title)
                      : [...favorites, track.title],
                  )
                }
              >
                <Heart
                  size={19}
                  fill={
                    favorites.includes(track.title) ? "currentColor" : "none"
                  }
                />
              </button>
            </div>
          ))}
          <p className="small muted audio-footnote">
            A preview of the listening experience. Audio is not played in this
            demo.
          </p>
        </div>
      </div>
    </section>
  );
}
export function LearningSection() {
  const [chosen, setChosen] = useState<string | null>(null);
  return (
    <section id="learning" className="section container">
      <SectionHeading
        eyebrow="A LIFELONG JOURNEY"
        title="Learn Jainism at Every Age"
        description="Curiosity has no age. There’s a path for everyone."
      />
      <div className="learning-grid">
        {[
          {
            name: "Kids",
            age: "AGES 6–13",
            description: "Little discoveries. Big possibilities.",
            items: [
              "Simple stories",
              "Interactive learning",
              "Quizzes",
              "Jain values",
            ],
            icon: Sparkles,
          },
          {
            name: "Adults",
            age: "AGES 14+",
            description: "Go deeper. Grow at your own pace.",
            items: [
              "Teachings",
              "Jain philosophy",
              "History",
              "Spiritual content",
            ],
            icon: BookOpen,
          },
        ].map(({ name, age, description, items, icon: Icon }) => (
          <article className={`learning-card ${name.toLowerCase()}`} key={name}>
            <div>
              <span className="demo-label">{age}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <div className="learning-tags">
                {items.map((item) => (
                  <span key={item}>
                    <Check size={14} />
                    {item}
                  </span>
                ))}
              </div>
              <button className="text-link" onClick={() => setChosen(name)}>
                Start Learning <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="learning-visual">
              <div className="book-illustration">
                <Icon size={38} strokeWidth={1.2} />
                <span>
                  {name === "Kids"
                    ? "A LITTLE BOOK\nOF BIG VALUES"
                    : "A JOURNEY\nWITHIN"}
                </span>
              </div>
              <span className="book-spark">✧</span>
            </div>
          </article>
        ))}
      </div>
      {chosen && (
        <Modal
          title={`${chosen}: your learning journey`}
          onClose={() => setChosen(null)}
        >
          <span className="demo-label">SAMPLE LEARNING PATH</span>
          <div className="lesson-list">
            {[
              "Discover the collection",
              "Find a story to explore",
              "Reflect through a short quiz",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <b>{item}</b>
                <BookOpen size={19} />
              </div>
            ))}
          </div>
          <p className="muted">
            Reviewed lessons, books and learning resources will be added to the
            future platform.
          </p>
          <a href="#quiz" className="button" onClick={() => setChosen(null)}>
            Try the demo quiz
            <ArrowUpRight size={17} />
          </a>
        </Modal>
      )}
    </section>
  );
}
export function QuizDemo() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = quizQuestions[index];
  function reset() {
    setStarted(false);
    setIndex(0);
    setAnswer(null);
    setScore(0);
    setFinished(false);
  }
  function next() {
    const updated = score + (answer === question.answer ? 1 : 0);
    setScore(updated);
    if (index === quizQuestions.length - 1) setFinished(true);
    else {
      setIndex(index + 1);
      setAnswer(null);
    }
  }
  return (
    <section id="quiz" className="section container quiz-section">
      <div className="quiz-copy">
        <p className="eyebrow">
          <span />A LITTLE CHALLENGE, EVERY DAY
        </p>
        <h2>
          Test Your
          <br />
          <em>Jain Knowledge</em>
        </h2>
        <p>Keep your curiosity alive, one question at a time.</p>
        <div className="quiz-stats">
          <span>
            <b>5</b>Questions
          </span>
          <span>
            <b>2–3</b>Minutes
          </span>
          <span>
            <b>Instant</b>Score
          </span>
        </div>
        <p className="small muted">
          Presentation quiz: questions introduce platform features. Reviewed
          Jain knowledge quizzes are planned.
        </p>
      </div>
      <div className="quiz-card">
        {finished ? (
          <div className="quiz-result">
            <span className="result-icon">
              <Sparkles size={35} />
            </span>
            <p className="eyebrow">YOUR DEMO SCORE</p>
            <h3>
              {score}
              <span> / 5</span>
            </h3>
            <p>
              {score === 5
                ? "You know your way around Jain Wisdom!"
                : "A lovely start to your journey of discovery."}
            </p>
            <button className="button" onClick={reset}>
              <RotateCcw size={16} />
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="quiz-top">
              <span className="demo-label">
                {started ? "DAILY QUIZ DEMO" : "TRY A SAMPLE QUESTION"}
              </span>
              <span>{String(index + 1).padStart(2, "0")} / 05</span>
            </div>
            <div className="quiz-progress">
              <i style={{ width: `${(index + 1) * 20}%` }} />
            </div>
            <h3>{question.question}</h3>
            <div
              className="quiz-options"
              role="group"
              aria-label="Select an answer"
            >
              {question.options.map((option, i) => (
                <button
                  key={option}
                  aria-pressed={answer === i}
                  className={answer === i ? "selected" : ""}
                  onClick={() => setAnswer(i)}
                >
                  <span>{String.fromCharCode(65 + i)}</span>
                  {option}
                  {answer === i && <Check size={16} />}
                </button>
              ))}
            </div>
            <button
              className="button quiz-next"
              disabled={started && answer === null}
              onClick={() => {
                if (!started) setStarted(true);
                else next();
              }}
            >
              {!started
                ? "Start Daily Quiz"
                : index === 4
                  ? "See My Score"
                  : "Next Question"}
              <ArrowUpRight size={17} />
            </button>
            <span className="quiz-status" role="status">
              {!started && answer !== null
                ? "Answer selected. Start the quiz to continue."
                : started
                  ? "Choose an answer, then continue."
                  : "A small step towards a little more wisdom."}
            </span>
          </>
        )}
      </div>
    </section>
  );
}
export function CalendarPreview() {
  const [month, setMonth] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const months = ["October", "November", "December"];
  const days = month === 1 ? 30 : 31;
  const offset = [4, 0, 2][month];
  return (
    <section id="calendar" className="section soft-section">
      <div className="container calendar-layout">
        <div>
          <p className="eyebrow">
            <span />
            MOMENTS THAT MATTER
          </p>
          <h2>
            A more mindful
            <br />
            <em>Jain Calendar.</em>
          </h2>
          <p className="section-description">
            A future companion for meaningful dates, community gatherings and
            moments of reflection.
          </p>
          <div className="calendar-event">
            <span className="event-icon">
              <CalendarDays size={22} />
            </span>
            <div>
              <b>A day for reflection</b>
              <small>Sample event · {months[month]} 8</small>
            </div>
          </div>
          <div className="calendar-event">
            <span className="event-icon gold">
              <Sparkles size={22} />
            </span>
            <div>
              <b>Community learning circle</b>
              <small>Sample event · {months[month]} 21</small>
            </div>
          </div>
          <p className="small muted">
            All event dates are demo data, not religious dates.
          </p>
          <button className="text-link" onClick={() => setSelected(8)}>
            View Calendar <ArrowUpRight size={17} />
          </button>
        </div>
        <div className="calendar-card">
          <div className="calendar-top">
            <h3>
              {months[month]} <span>2026</span>
            </h3>
            <div>
              <button
                className="icon-button"
                disabled={month === 0}
                onClick={() => setMonth(month - 1)}
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="icon-button"
                disabled={month === 2}
                onClick={() => setMonth(month + 1)}
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="calendar-grid">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
              <span className="day-name" key={`day-${i}`}>
                {day}
              </span>
            ))}
            {Array.from({ length: offset }, (_, i) => (
              <span key={`blank-${i}`} />
            ))}
            {Array.from({ length: days }, (_, i) => (
              <button
                key={i}
                className={[8, 21].includes(i + 1) ? "event-day" : ""}
                onClick={() => setSelected(i + 1)}
                aria-label={`${months[month]} ${i + 1}${[8, 21].includes(i + 1) ? ", sample event" : ""}`}
              >
                {i + 1}
                {[8, 21].includes(i + 1) && <i />}
              </button>
            ))}
          </div>
          <div className="calendar-legend">
            <span /> Sample community event{" "}
            <span className="demo-label">DEMO CALENDAR</span>
          </div>
        </div>
      </div>
      {selected !== null && (
        <Modal
          title={`${months[month]} ${selected}, 2026`}
          onClose={() => setSelected(null)}
        >
          <span className="demo-label">SAMPLE CALENDAR DATA</span>
          <h4>
            {selected === 8
              ? "A day for reflection"
              : selected === 21
                ? "Community learning circle"
                : "A little room for a mindful moment"}
          </h4>
          <p className="muted">
            {[8, 21].includes(selected)
              ? "This is an illustrative community event, not a real scheduled event or religious observance."
              : "There are no sample events on this day. Religious dates will be added only after review."}
          </p>
        </Modal>
      )}
    </section>
  );
}
