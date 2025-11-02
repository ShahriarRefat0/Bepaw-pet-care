import React from "react";
import { GiCheckMark } from "react-icons/gi";

const CareTips = () => {
  return (
    <div className="w-11/12 mx-auto my-20 md:p-10 p-0">
      <div data-aos="fade-down">
        <h1 className="md:text-5xl text-3xl text-center pb-6 font-semibold">
          Winter Care Tips for Pets
        </h1>
        <p className="text-gray-500 text-lg  pb-10 text-center">
          How to Ensure Comfort and Health for Pets in Chilly Weather
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div
          data-aos="fade-up"
          className="bg-[#F6F2ED]    p-10 rounded-3xl flex justify-center items-center"
        >
          <img
            className="md:w-[900px] w-[550px] rounded-3xl "
            src="https://i.ibb.co.com/k7g1vgQ/anna-rosar-Bf-Pi-GCd-Lp-Bc-unsplash.jpg"
            alt=""
          />
        </div>

        <div className=" grid grid-rows-3 gap-8">
          <div
            data-aos="fade-up"
            className="relative bg-[#F6F2ED] px-10 py-8 rounded-3xl flex items-start gap-5"
          >
            <div className="mt-1">
              <GiCheckMark size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Keep Them Warm
              </h2>
              <p className="text-gray-500 mt-2">
                Provide a soft, cozy bed and warm blankets for your pet. Avoid
                letting them stay outside for long periods. Cold weather can
                easily cause hypothermia or illness.
              </p>
            </div>
            <div className="absolute top-0 right-0 bg-white rounded-bl-[30px] px-4 py-2 text-gray-800 text-3xl font-medium">
              01
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="relative bg-[#F6F2ED] px-10 py-8 rounded-3xl flex items-start gap-5"
          >
            <div className="mt-1">
              <GiCheckMark size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Moisturize Skin & Paws
              </h2>
              <p className="text-gray-500 mt-2">
                Winter air can dry out your pet’s skin and paw pads. Use
                pet-safe moisturizers or balms to protect them. Check paws after
                walks for cracks or irritation.
              </p>
            </div>
            <div className="absolute top-0 right-0 bg-white rounded-bl-[30px] px-4 py-2 text-gray-800 text-3xl font-medium">
              02
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="relative bg-[#F6F2ED] px-10 py-8 rounded-3xl flex items-start gap-5"
          >
            <div className="mt-1">
              <GiCheckMark size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Adjust Diet & Hydration
              </h2>
              <p className="text-gray-500 mt-2">
                Give your pet warm, nutritious meals during cold days. Ensure
                they have access to clean water at all times. A balanced diet
                helps them maintain energy and warmth.
              </p>
            </div>
            <div className="absolute top-0 right-0 bg-white rounded-bl-[30px] px-4 py-2 text-gray-800 text-3xl font-medium">
              03
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareTips;
