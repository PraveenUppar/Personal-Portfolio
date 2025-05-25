import About from "./components/About/About";
import EducationPage from "./components/Education/Education";
import Navbar from "./components/Header/Navbar";
import ProjectsSection from "./components/Projects/ProjectSection";
import SkillsSection from "./components/Skills/SkillsSection";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <EducationPage></EducationPage>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
