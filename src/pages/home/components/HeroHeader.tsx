import { RippleButton } from "components";
import Container from "components/container";
import { AnimatePresence } from "framer-motion";
import { FC, useEffect } from "react";
import Aos from "aos";

const HeroHeader: FC = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 100,
    });
  }, []);

  return (
    <div className="relative mb-12 hero-header ">
      <div className="starburst-container absolute top-0 left-0 w-full">
        <section className="starburst starburst--both">
          <div></div>
        </section>
      </div>
      <Container classes="flex justify-start items-start">
        <AnimatePresence>
          <figure className="relative w-full">
            <div className="relative">
              <img
                data-aos-duration={600}
                data-aos="fade-up"
                src="/assets/images/mac.png"
                alt=""
                className="relative bottom-0 left-8 mac"
              />
              <img
                data-aos="flip-right"
                data-aos-duration={600}
                src="/assets/images/ipad.png"
                data-aos-delay={400}
                alt=""
                className="absolute right-32 bottom-0 ipad"
              />
              <img
                data-aos="fade-left"
                data-aos-duration={600}
                data-aos-delay={800}
                src="/assets/images/phone.png"
                alt=""
                className="absolute bottom-0 right-20 ipod"
              />
            </div>
            <figcaption className="px-4 md:px-24 flex flex-col mt-14 text-base">
              <p
                className="text-center hero-text"
                data-aos="fade-up"
                data-aos-duration={600}
                data-aos-delay={1200}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu eratiuy lacus, vel congue mauris. Fusce
                velitaria justo, faucibus eu.
              </p>
              <div
                className="mt-7"
                data-aos="fade-up"
                data-aos-duration={600}
                data-aos-delay={1400}
              >
                <RippleButton
                  classes={`btn text-white hero-btn bg-green bg-indigo-500 block mx-auto px-6 py-2 text-white `}
                >
                  Browse Portfolio
                </RippleButton>
              </div>
            </figcaption>
          </figure>
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default HeroHeader;
