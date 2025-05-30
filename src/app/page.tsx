import { GridBackgroundDemo } from "../app/components/Backgound/GridBackground";
import About from "./components/About/About";
import AchievementsSection from "./components/Achievements/Achievements";
import EducationPage from "./components/Education/Education";
import ExperienceSection from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import ProjectsSection from "./components/Projects/ProjectSection";
import SkillsSection from "./components/Skills/SkillsSection";
import { InfiniteMovingCardsDemo } from "./components/Comments/Comments";
// import { FeaturesSectionDemo } from "./components/Feature/Feature";
// import { Block } from "./components/Feature/Blocks";
// import { HeroParallaxDemo } from "./components/About/Parallax"
import {TimelineDemo} from "./components/Timeline/Timeline";
// import Srcoll from "./components/Animations/ScrollTextAnimation.jsx";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GridBackgroundDemo />
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow">
          <About />
          {/* <Srcoll /> */}
          <EducationPage />
          {/* <FeaturesSectionDemo /> */}
          <SkillsSection />
          {/* <HeroParallaxDemo /> */}
          <ProjectsSection />
          <TimelineDemo />
          <ExperienceSection />
          <AchievementsSection />
          <InfiniteMovingCardsDemo />
        </main>
        <Footer />
      </div>
    </div>
  );
}
