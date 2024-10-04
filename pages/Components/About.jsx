import React from "react";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="w-full bg-cover bg-center sm:py-28 py-32 ">
      <div className="w-full mx-auto">
        <div className="text-center mb-4">
          <h1 className="sm:text-4xl text-3xl font-bold text-black ">
            VAKRATUNDA HOMESTAY
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="sm:px-24 px-5">
            <p className="text-center sm:text-lg  text-base  text-gray-800 sm:hidden  ">
              Experience the warmth of Indian hospitality at Vakratunda Homestay
              in Ujjain.{" "}
            </p>
            <p className="text-center sm:text-lg text-base leading-relaxed text-gray-800 sm:block hidden">
              Experience the warmth of Indian hospitality at Vakratunda Homestay
              in Ujjain. Our cozy accommodations offer a perfect blend of modern
              comfort and traditional charm. Immerse yourself in the spiritual
              ambiance of this ancient city, known for its sacred Mahakaleshwar
              Temple. Whether you are a pilgrim or a curious traveler, our
              homestay serves as an ideal base to explore Ujjain&apos; rich
              history and vibrant culture. Enjoy home-cooked meals, personalized
              service, and insider tips to make your stay truly memorable. At
              Vakratunda Homestay, we are not just offering a place to stay – we
              are inviting you to become part of our family.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          <div className="text-center mb-10">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/ep.svg"
              className="mx-auto"
              alt="Environmentally Conscious"
              width={64}
              height={64}
            />
            <p className="text-black mt-4 font-semibold ">Eco-Friendly</p>
          </div>
          <div className="text-center">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/hf.svg"
              className="mx-auto"
              alt="Home Cooked Food"
              width={64}
              height={64}
            />
            <p className="text-black mt-4 font-semibold">Breakfast Included</p>
          </div>
          <div className="text-center">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/pl.svg"
              className="mx-auto"
              alt="Peaceful Locale"
              width={64}
              height={64}
            />
            <p className="text-black mt-4 font-semibold">Peaceful Locale</p>
          </div>
          <div className="text-center">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/ec.svg"
              className="mx-auto"
              alt="Warm Hospitality"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">Warm Hospitality</p>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-16 w-16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
            <p className="text-black mt-4 font-semibold">Free Wi-Fi</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/water.svg"
              className="mx-auto"
              alt="Warm Hospitality"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">RO+UV Water</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/car.svg"
              className="mx-auto"
              alt="Warm Hospitality"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">Free Pick & Drop</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/temple.svg"
              className="mx-auto"
              alt="Warm Hospitality"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              Free Mahakal Darshan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
