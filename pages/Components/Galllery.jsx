"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="sm:-my-24 -my-0  sm:py-[90px] py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-10">
          <h2 className="sm:text-4xl text-3xl font-bold text-black mb-2   ">
            Our Gallery
          </h2>
          <p className="sm:text-lg text-base text-gray-600">
            Explore the essence of beauty in our gallery intimate space.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
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
          className="swiper-container">
          {/* Swiper Slide 1 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img1.jpg"
                alt="Bathroom"
                onClick={() => openImage("/images/img1.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bathroom
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper Slide 2 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img2.jpg"
                alt="Bedroom"
                onClick={() => openImage("/images/img2.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img3.jpg"
                alt="Balcony"
                onClick={() => openImage("/images/img3.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img4.jpg"
                alt="Bedroom"
                onClick={() => openImage("/images/img4.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img5.jpg"
                alt="Balcony"
                onClick={() => openImage("/images/img5.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Balcony
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img6.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img6.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Toilet
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img8.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img8.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Reception
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img9.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img9.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Balcony
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img10.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img10.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Property
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img11.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img11.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Parking Space
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Full-screen"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
