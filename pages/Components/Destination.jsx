import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const DestinationsNearby = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="h-screen sm:py-24 py-20 px-4 sm:px-16 pt-44 sm:pt-0">
      <div className="w-full mx-auto">
        <div className="mb-12 text-center">
          <h4 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Destinations Nearby
          </h4>
          <p className="text-base sm:text-lg text-gray-600">
            Explore the most popular nearby attractions
          </p>
        </div>

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={20}
          loop={true}
          className="swiper-container mb-10">
          {[
            {
              src: "/images/card-1.webp",
              alt: "Mahakal Temple",
              title: "Mahakaleshwar Jyotirlinga",
            },
            {
              src: "/images/card-2.webp",
              alt: "Harsidhi Mata Mandir",
              title: "Harsidhi Mata Mandir",
            },
            {
              src: "/images/card-3.webp",
              alt: "Mahakal Lok",
              title: "Mahakal Lok",
            },

            {
              src: "/images/card-5.webp",
              alt: "Ram Ghat",
              title: "Ram Ghat",
            },
            {
              src: "/images/card-6.webp",
              alt: "Kal Bharav Mandir",
              title: "Kal Bharav Mandir",
            },
            {
              src: "/images/card-7.webp",
              alt: "Isckon Temple",
              title: "Isckon Temple",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide-content">
                <img
                  src={slide.src}
                  loading="lazy"
                  alt={slide.alt}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="text-center mt-4 font-semibold text-gray-700">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DestinationsNearby;
