"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import Image from "next/image";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className=" sm:py-20 py-12 h-screen  ">
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
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img1.jpg"
                alt="Bathroom"
                onClick={() => openImage("/images/img1.jpg")}
                width={800}
                height={600}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bathroom
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper Slide 2 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img2.jpg"
                alt="Bedroom"
                onClick={() => openImage("/images/img2.jpg")}
                width={800}
                height={600}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img3.jpg"
                alt="Balcony"
                onClick={() => openImage("/images/img3.jpg")}
                width={800}
                height={600}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img4.jpg"
                alt="Bedroom"
                onClick={() => openImage("/images/img4.jpg")}
                width={800}
                height={600}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img5.jpg"
                alt="Balcony"
                onClick={() => openImage("/images/img5.jpg")}
                width={800}
                height={600}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Balcony
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img6.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img6.jpg")}
                width={800}
                height={600}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Toilet
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img8.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img8.jpg")}
                width={800}
                height={600}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Reception
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img9.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img9.jpg")}
                width={800}
                height={600}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Balcony
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img10.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img10.jpg")}
                width={800}
                height={600}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Property
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img12.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img12.jpg")}
                width={800}
                height={600}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Interior
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img13.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img13.jpg")}
                width={800}
                height={600}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Passage
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <Image
                className="w-full h-96 object-cover cursor-pointer"
                src="/images/img11.jpg"
                alt="Toilet"
                onClick={() => openImage("/images/img11.jpg")}
                width={800}
                height={600}
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
          <Image
            src={selectedImage}
            alt="Full-screen"
            className="max-w-full max-h-full"
            width={1920}
            height={1080}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
