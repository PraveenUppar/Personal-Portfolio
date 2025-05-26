import { GridBackgroundDemo } from "../app/components/Backgound/GridBackground";
import About from "./components/About/About";
import AchievementsSection from "./components/Achievements/Achievements";
import EducationPage from "./components/Education/Education";
import ExperienceSection from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import ProjectsSection from "./components/Projects/ProjectSection";
import SkillsSection from "./components/Skills/SkillsSection";
import { cn } from "../app/lib/utlis" 


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GridBackgroundDemo />
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow">
          <About />
          <EducationPage />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
