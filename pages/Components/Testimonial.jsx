import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Testimonial = () => {
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const TestimonialData = [
    {
      id: 1,
      // image: "/images/guest-1.jpg",
      content:
        "Our stay at this homestay was beyond amazing! The hosts were incredibly welcoming, and the ambiance made us feel at home. We loved waking up to the scenic views and peaceful environment every day.",
      name: "Ram Chaturvedi",
      role: "Guest from Lucknow",
    },
    {
      id: 2,
      // image: "/images/guest-2.jpg",
      content:
        "The homestay was perfect for our family vacation. The rooms were cozy, and the food was delicious. The kids especially enjoyed the garden and outdoor activities. Definitely coming back!",
      name: "Rajesh Kumar",
      role: "Family Guest",
    },
    {
      id: 3,
      // image: "/images/guest-3.jpg",
      content:
        "I had an unforgettable experience at this homestay. The personalized service, attention to detail, and the warmth of the hosts made all the difference. Highly recommend .",
      name: "Krish Gupta",
      role: "Solo Traveler",
    },
    {
      id: 4,
      // image: "/images/guest-4.jpg",
      content:
        "The perfect escape from city life! The homestay offered serene views, excellent hospitality, and a truly relaxing environment. It was exactly what we needed for our weekend retreat.",
      name: "Arjun Srivastav & Anjali Srivastav",
      role: "Couple from New Delhi",
    },
  ];

  return (
    <>
      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
              Guest Testimonials
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Hear what our guests have to say about their stay
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="swiper-container mb-10">
            {TestimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="swiper-slide-content">
                  <div className="w-full text-gray-600">
                    <div className="h-full rounded-xl border bg-white border-gray-300 shadow-lg">
                      <p className="leading-relaxed mb-4 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 pt-3 sm:pt-4 md:pt-5 text-gray-700">
                        {data.content}
                      </p>
                      <div className="inline-flex items-center bg-green-500/30 px-3 sm:px-4 md:px-5 pt-2 pb-2 sm:pb-3 rounded-b-xl w-full">
                        <span className="flex-grow flex flex-col pl-2 sm:pl-3 md:pl-4">
                          <span className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                            {data.name}
                          </span>
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {data.role}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
