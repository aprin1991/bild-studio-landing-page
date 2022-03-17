import React from "react";
import About from "./components/About";
import HeroHeader from "./components/HeroHeader";
import ProjectsSlider from "./components/ProjectsSlider";
import MetaTags from "react-meta-tags";
const Home: React.FC = () => {
  return (
    <div>
      <MetaTags>
        <title>Home Page</title>
        <meta
          id="meta-description"
          name="description"
          content="Some description."
        />
        <meta id="og-title" property="og:title" content="MyApp" />
      </MetaTags>
      <HeroHeader />
      <About />
      <ProjectsSlider />
    </div>
  );
};

export default Home;
