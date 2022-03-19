import React from "react";
import About from "./components/About";
import HeroHeader from "./components/HeroHeader";
import ProjectsSlider from "./components/ProjectsSlider";
import MetaTags from "react-meta-tags";
import AnimatedPage from "components/page-transition/AnimatedPage";
const Home: React.FC = () => {
  return (
    <AnimatedPage>
      <div>
        <MetaTags>
          <title>Home</title>
          <meta name="description" content="Some description." />
          <link rel="canonical" href={`/`} />
          <meta id="og-title" property="og:title" content="MyApp" />

          <meta itemProp="name" content={"Home Page"} />

          <meta property="og:description" content="Some description." />
          <meta name="twitter:title" content={"Twitter."} />
          <meta name="twitter:description" content={"Some description."} />
        </MetaTags>

        <HeroHeader />
        <About />
        <ProjectsSlider />
      </div>
    </AnimatedPage>
  );
};

export default Home;
