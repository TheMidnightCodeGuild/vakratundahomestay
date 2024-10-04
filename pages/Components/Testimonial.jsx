import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Testimonial = () => {
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
      <section className="py-[80px] sm:py-32 px-16">
        <div className="w-full mx-auto">
          <div className="mb-12 text-center">
            <h4 className="sm:text-4xl text-3xl font-bold text-black mb-2">
              Guest Testimonials
            </h4>
            <p className="sm:text-lg text-base text-gray-600">
              Hear what our guests have to say about their stay
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="swiper-container mb-10">
            {TestimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="swiper-slide-content">
                  <div className="w-full text-gray-600">
                    <div className="h-full rounded-xl border bg-white border-gray-300 shadow-lg">
                      <p className="leading-relaxed mb-6 text-[15px] px-5 pt-5 text-gray-700">
                        {data.content}
                      </p>
                      <div className="inline-flex items-center bg-green-500/30 px-5 pt-2 pb-[6px] rounded-b-xl w-full">
                        {/* <Image
                          src={data.image}
                          alt={data.name}
                          className="w-12 h-12 rounded-full object-cover object-center"
                          width={80}
                          height={100}
                        /> */}
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="font-semibold text-gray-800">
                            {data.name}
                          </span>
                          <span className="text-gray-600 text-sm">
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
