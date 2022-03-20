import { RippleButton } from "components";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

function Custom404() {
  return (
    <div className="h-64 flexBox flex-col">
      <MetaTags>
        <title>404-not found page</title>
        <meta name="description" content="404-not found page" />
        <link rel="canonical" href={`/404`} />
        <meta id="og-title" property="og:title" content="About" />
        <meta itemProp="name" content={"404-not found page"} />
        <meta property="og:description" content="404-not found page" />
        <meta name="twitter:title" content={"Twitter."} />
        <meta name="twitter:description" content={"404-not found page"} />
      </MetaTags>
      <div className="font-bold text-slate-800 text-center mb-4">
        Sorry We Can't Find It.
      </div>
      <Link to="/">
        <RippleButton
          classes={`text-white bg-green bg-indigo-500 block  px-10 py-2 text-white `}
        >
          Home
        </RippleButton>
      </Link>
    </div>
  );
}

export default Custom404;
