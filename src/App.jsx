import ButtonGradient from "./assets/svg/ButtonGradient";
import Aboutme from "./components/Aboutme";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Certification from "./components/Certification";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Hightlights from "./components/Highlights";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Aboutme />
        <Projects />
        <Hightlights />
        <Techstack />
        <Certification />
        <Socials />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
