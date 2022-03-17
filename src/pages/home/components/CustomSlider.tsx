import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import toast from "components/toast";
import { arrowLeft, arrowRight, linkIcon } from "utilities/icons";
import map from "lodash/map";
// const products = [
//   {
//     img: "/assets/images/mock/pr1.png",
//     title: "Dolore magna",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr2.png",
//     title: "Eget est lorem",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr3.png",
//     title: "Tempus imperdiet",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr4.png",
//     title: "Mattis rhoncus",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr5.png",
//     title: "Odio ut enim",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr1.png",
//     title: "Dolore magna",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr2.png",
//     title: "Eget est lorem",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr3.png",
//     title: "Tempus imperdiet",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr4.png",
//     title: "Mattis rhoncus",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
//   {
//     img: "/assets/images/mock/pr5.png",
//     title: "Odio ut enim",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
//   },
// ];

function CustomSlider({ products }) {
  const [SliderInfo, setSliderInfo] = useState({ title: "", text: "" });
  const customSlider = useRef<Slider | null>(null);
  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // enable center mode
    centerPadding: "50px",
    pauseOnHover: true,
    beforeChange: (_, newIndex) => {
      setSliderInfo(products[newIndex]);
    },
  };
  useEffect(() => {
    if (products?.length) {
      setSliderInfo(products[0]);
    }
  }, [products]);

  const nextSlider = () => {
    customSlider?.current?.slickNext();
  };
  const prevSlider = () => {
    customSlider?.current?.slickPrev();
  };
  const handleImageHover = (e) => {
    const siblings = e.target
      .closest(".slick-track")
      .querySelectorAll(".img-card");
    const current = e.target.closest(".img-card");
    siblings.forEach((el) => {
      if (el !== current) el.classList.add("opacity-50");
    });
  };
  const handleImageBlur = (e) => {
    const siblings = e.target
      .closest(".slick-track")
      .querySelectorAll(".img-card");

    siblings.forEach((el) => {
      el.classList.remove("opacity-50");
    });
  };
  const copyLink = (title) => {
    navigator.clipboard.writeText(title);
    toast("success", "Successfully paste the link to the system clipboard");
  };
  return (
    <div className="custom-slider">
      <Slider {...config} ref={customSlider}>
        {map(products, (product) => {
          return (
            <div
              key={product?.id}
              className="img-card relative"
              onMouseOver={handleImageHover}
              onMouseOut={handleImageBlur}
            >
              <img className="img" src={product.img} alt={product.title} />
              <div
                className="copy-link"
                onClick={() => copyLink(product.title)}
              >
                {linkIcon}
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex justify-between items-center max-slider-desc mx-auto mt-14">
        <span onClick={nextSlider} className="cursor-pointer slider-arrow">
          {arrowLeft}
        </span>
        <div className="text-center px-16">
          <h6 className="text-lg text-secondary">{SliderInfo?.title}</h6>
          <p className="text-sm text-secondary">{SliderInfo?.text}</p>
        </div>
        <span onClick={prevSlider} className="cursor-pointer slider-arrow">
          {arrowRight}
        </span>
      </div>
    </div>
  );
}

export default CustomSlider;
