import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  ExploreGrid,
  TirthankarSection,
  DailyWisdom,
  TirthGuide,
} from "@/components/Discovery";
import {
  AudioSection,
  LearningSection,
  QuizDemo,
  CalendarPreview,
} from "@/components/Learning";
import {
  CommunitySection,
  BusinessDirectory,
  VolunteerSection,
} from "@/components/Community";
import {
  LanguageSection,
  AppShowcase,
  MembershipSection,
  FinalCTA,
  Footer,
} from "@/components/Platform";
import Reveal from "@/components/Reveal";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ExploreGrid />
        <TirthankarSection />
        <DailyWisdom />
        <TirthGuide />
        <AudioSection />
        <LearningSection />
        <QuizDemo />
        <CalendarPreview />
        <CommunitySection />
        <BusinessDirectory />
        <VolunteerSection />
        <LanguageSection />
        <AppShowcase />
        <MembershipSection />
        <FinalCTA />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
