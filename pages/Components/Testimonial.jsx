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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the experiences of those who've stayed with us
            </p>
          </div>

          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="swiper-container">
            {TestimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 h-[300px] flex flex-col">
                  <div className="p-8 flex flex-col justify-between h-full">
                    <div className="text-gray-600 italic mb-5 flex-grow overflow-y-auto">
                      "{data.content}"
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={`https://ui-avatars.com/api/?name=${data.name}&background=random`}
                          alt={data.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900">
                          {data.name}
                        </div>
                        <div className="text-gray-500">{data.role}</div>
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
