import { RippleButton } from "components";
import Container from "components/container";
import React from "react";

function HeroHeader() {
  return (
    <div className="relative mb-12 hero-header ">
      <div className="starburst-container absolute top-0 left-0 w-full">
        <section className="starburst starburst--both">
          <div></div>
        </section>
      </div>
      <Container classes="flex justify-start items-start">
        <figure className="relative w-full">
          <div className="relative">
            <img
              src="/assets/images/mac.png"
              alt=""
              className="relative bottom-0 left-8"
            />
            <img
              src="/assets/images/ipad.png"
              alt=""
              className="absolute right-32 bottom-0"
            />
            <img
              src="/assets/images/phone.png"
              alt=""
              className="absolute bottom-0 right-20"
            />
          </div>
          <figcaption className="px-24 flex flex-col mt-14 text-base">
            <p className="text-center hero-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria
              justo, faucibus eu.
            </p>
            <div className="mt-7">
              <RippleButton
                classes={`btn text-white hero-btn bg-green bg-indigo-500 block mx-auto px-6 py-2 text-white `}
              >
                Browse Portfolio
              </RippleButton>
            </div>
          </figcaption>
        </figure>
      </Container>
    </div>
  );
}

export default HeroHeader;
