import ButtonGradient from "./assets/svg/ButtonGradient";
import Aboutme from "./components/Aboutme";
import Benefits2 from "./components/Benefits2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Pricing2 from "./components/Pricing2";
import Projects from "./components/Projects";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Aboutme />
        <Projects />
        <Pricing2 />
        <Services />
        <Pricing />
        <Benefits2 />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
