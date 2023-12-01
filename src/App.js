import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks"; 

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
