import Container from "components/container";
import PageTitle from "components/page-title";
import AnimatedPage from "components/page-transition/AnimatedPage";
import { useEffect } from "react";
import MetaTags from "react-meta-tags";
import ContactSidebar from "./components/ContactSidebar";
import Form from "./components/Form";
import MapBox from "./components/MapBox";
function Contact() {
  useEffect(() => {
    return () => {
      console.log("object exit");
      removeRecaptcha();
    };
  }, []);
  const removeRecaptcha = () => {
    const script = document.getElementById("recaptcha-key");

    if (script) {
      script.remove();
    }

    const recaptchaElems = document.getElementsByClassName("grecaptcha-badge");
    if (recaptchaElems.length) {
      recaptchaElems[0].remove();
    }
  };
  return (
    <AnimatedPage>
      <div>
        <MetaTags>
          <title>Contact</title>
          <meta name="description" content="Some description." />
          <link rel="canonical" href={`/contact`} />
          <meta id="og-title" property="og:title" content="Contact" />
          <meta itemProp="name" content={"About Page"} />
          <meta property="og:description" content="Some description Contact." />
          <meta name="twitter:title" content={"Twitter."} />
          <meta
            name="twitter:description"
            content={"Some description Contact page."}
          />
        </MetaTags>
        <PageTitle title="Got a Question or INquiry?" />
        <div className="mapBox">
          <MapBox />
        </div>
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start mt-7 mb-8">
            <div className="w-full lg:w-7/12">
              <h2 className="text-2xl text-secondary mb-4">Contact Form</h2>
              <p className="text-sm text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae
                dolor ut posuere.
              </p>
              <Form />
            </div>
            <ContactSidebar />
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
}

export default Contact;
