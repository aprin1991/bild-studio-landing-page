import PageTitle from "components/page-title";
import React from "react";
import MetaTags from "react-meta-tags";
function About() {
  return (
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
    </div>
  );
}

export default About;
