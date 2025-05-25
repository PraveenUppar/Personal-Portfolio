import About from "./components/About/About";
import EducationPage from "./components/Education/Page";
import Navbar from "./components/Header/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <EducationPage></EducationPage>
    </div>
  );
}
