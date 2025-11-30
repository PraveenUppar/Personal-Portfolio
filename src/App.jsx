import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Benefits2 from "./components/Benefits2";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Pricing2 from "./components/Pricing2";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        {/* <Collaboration /> */}
        <Roadmap />
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
