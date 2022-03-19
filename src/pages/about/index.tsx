import Container from "components/container";
import PageTitle from "components/page-title";
import AnimatedPage from "components/page-transition/AnimatedPage";
import React from "react";
import MetaTags from "react-meta-tags";
import Services from "./components/Services";
const About = () => {
  return (
    <AnimatedPage>
      <div>
        <MetaTags>
          <title>About</title>
          <meta name="description" content="Some description." />
          <link rel="canonical" href={`/`} />
          <meta id="og-title" property="og:title" content="About" />

          <meta itemProp="name" content={"About Page"} />

          <meta property="og:description" content="Some description." />
          <meta name="twitter:title" content={"Twitter."} />
          <meta name="twitter:description" content={"Some description."} />
        </MetaTags>

        <PageTitle title="About my business" />
        <Container classes="about-container">
          <div className="flex gap-5 top-about">
            <div className="w-5/12">
              <img
                className="w-full h-auto"
                src="/assets/images/about.png"
                alt="about us"
                loading="lazy"
                width={380}
                height={260}
              />
            </div>
            <div className="w-7/12 px-2 text-secondary text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu erat lacus, vel congue mauris. Fusce velit
                justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
                non urna mi, quis tincidunt eros. Nullam tellus turpis,
                fringilla sit amet congue ut, luctus a nulla. Donec sit amet
                sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
                pellentesque arcu a elit congue lacinia.
              </p>
              <br />
              <p className="mt-2">
                Nullam tellus turpis, fringilla sit amet congue ut, luctus a
                nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
                facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu erat lacus, vel congue mauris. Fusce velit
                justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
                non urna mi, quis tincidunt eros. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 px-2 text-secondary text-sm mb-12">
            <div className="">
              <h3 className="capitalize novecento text-2xl  mb-6">
                Mission Statement
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu erat lacus, vel congue mauris. Fusce velit
                justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
                non urna mi, quis tincidunt eros. Nullam tellus turpis,
                fringilla sit amet congue ut, luctus a nulla. Donec sit amet
                sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
                pellentesque arcu a elit congue lacinia.
              </p>
            </div>
            <div className="px-2">
              <h3 className="capitalize novecento text-2xl  mb-6">Fun FActs</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu erat lacus, vel congue mauris. Fusce velit
                justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
                non urna mi, quis tincidunt eros. Nullam tellus turpis,
                fringilla sit amet congue ut, luctus a nulla. Donec sit amet
                sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
                pellentesque arcu a elit congue lacinia.
              </p>
            </div>
          </div>
        </Container>
        <Services />
      </div>
    </AnimatedPage>
  );
};

export default About;
