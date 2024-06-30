import "./global.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import NavComponent from "./Components/NavComponent";
import HeroComponent from "./Components/HeroComponent";
import AboutComponent from "./Components/AboutComponent";
import SkillsComponent from "./Components/SkillsComponent";
import ProjectsComponent from "./Components/ProjectsComponent";
import CompaniesComponent from "./Components/CompaniesComponent";
import ComingSoonComponent from "./Components/ComingSoonComponent";
import ContactComponent from "./Components/ContactComponent";
import FooterComponent from "./Components/FooterComponent";
function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Web Portfolio - Ildi Dvorani</title>
          <meta
            name="description"
            content="Ildi Dvorani: Experienced Full Stack JavaScript Developer specialized in React. Explore my portfolio to 
            view my latest projects, skills, and let's collaborate to bring your vision to life."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#3498db" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            href="/assets/icons/ildidev-logo_144x144.png"
            type="image/png"
          />
        </Helmet>
      </HelmetProvider>
      <NavComponent></NavComponent>
      <HeroComponent></HeroComponent>
      <AboutComponent></AboutComponent>
      <SkillsComponent></SkillsComponent>
      <CompaniesComponent></CompaniesComponent>
      <ProjectsComponent className={`projects-component`}></ProjectsComponent>
      <ComingSoonComponent
        className={`comingSoon-component`}
      ></ComingSoonComponent>
      <ContactComponent></ContactComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
