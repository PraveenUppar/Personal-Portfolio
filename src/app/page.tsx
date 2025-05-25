import About from "./components/About/About";
import AchievementsSection from "./components/Achievements/Achievements";
import EducationPage from "./components/Education/Education";
import ExperienceSection from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import ProjectsSection from "./components/Projects/ProjectSection";
import SkillsSection from "./components/Skills/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow">
        <About></About>
        <EducationPage></EducationPage>
        <SkillsSection></SkillsSection>
        <ProjectsSection></ProjectsSection>
        <ExperienceSection></ExperienceSection>
        <AchievementsSection></AchievementsSection>
      </main>
      <Footer></Footer>
    </div>
  );
}
