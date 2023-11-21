import { Carousel } from "flowbite-react";
import LinkBtn from "../../../../../components/shared/LinkBtn/LinkBtn";

function HeroComp() {
  const slides = [
    {
      slideTitle: "Tees & Tops",
      slideDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab id eum labore ipsam nulla iusto dolores neque voluptatibus fugiat.",
      slideImg: "./img/hero-bg.jpg",
      btnText: "Discover more",
      btlLink: "",
    },
    {
      slideTitle: "30% OFF",
      slideDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab id eum labore ipsam nulla iusto dolores neque voluptatibus fugiat.",
      slideImg: "./img/hero-bg.jpg",

      btnText: "Shop now",
      btlLink: "",
    },
  ];
  return (
    <>
      <div className="bg-slate-300 dark:bg-darkPrimary">
        {slides?.length > 1 ? (
          <Carousel className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            {slides?.map((slide, index) => {
              return (
                <div className="relative">
                  <img
                    src={slide.slideImg}
                    alt=""
                    className=" h-56 sm:h-64 xl:h-80 2xl:h-96 w-full"
                  />

                  <div className="px-8 md:px-0 md:w-4/5 mx-auto ">
                    <div
                      key={index}
                      className=" absolute top-2/4 transform -translate-y-2/4"
                    >
                      <h2 className="text-3xl md:text-5xl text-primary tracking-wide mb-2 md:mb-5">
                        {slide.slideTitle}
                      </h2>
                      <p className="text-xs font-Edu-nsw mb-4 md:mb-8 w-3/5 sm:w-2/5">
                        {slide.slideDesc}
                      </p>
                      <LinkBtn to={slide.btlLink} color="dark">
                        {slide.btnText}
                      </LinkBtn>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : (
          <div className="relative">
            {slides?.map((slide, index) => {
              return (
                <>
                  <img
                    src={slide.slideImg}
                    alt=""
                    className=" h-56 sm:h-64 xl:h-80 2xl:h-96 w-full"
                  />
                  <div className="px-8 md:px-0 md:w-4/5 mx-auto ">
                    <div
                      key={index}
                      className="absolute top-2/4 transform -translate-y-2/4"
                    >
                      <h2 className="text-3xl md:text-5xl text-primary tracking-wide mb-2 md:mb-5">
                        {slide.slideTitle}
                      </h2>
                      <p className="text-xs font-Edu-nsw mb-4 md:mb-8 w-3/5 sm:w-2/5">
                        {slide.slideDesc}
                      </p>
                      <LinkBtn to={slide.btlLink} color="dark">
                        {slide.btnText}
                      </LinkBtn>
                    </div>
                  </div>{" "}
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default HeroComp;
