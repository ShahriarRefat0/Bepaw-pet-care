import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/Q70hrtB4/fuzzy-rescue-e8-DXpv-Cvj-Y-unsplash.jpg",
      title: "Loving Care for Every Pet",
      desc: "We provide the best pet care and grooming services in your city.",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/Gf26DjFw/vitaly-gariev-A6-Uj-ZEgbrw-I-unsplash.jpg",
      title: "Happy Pets, Happy Owners",
      desc: "Your pets deserve comfort, love, and quality service.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1723844944367-9332e405fd6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1738",
      title: "Premium Pet Services in Dhaka",
      desc: "Trust our experts for grooming, training, and healthcare.",
    },
  ];

  return (
    <div
      data-aos="zoom-out"
      className="w-11/12 mx-auto mt-15 rounded-2xl "
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[350px] md:h-[500px] object-cover text-5xl font-bold font-poppins text-gray-800"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text with Framer Motion Animation */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
              >
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-3xl md:text-5xl font-bold mb-4 text-[#F8721F]"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="text-lg md:text-xl max-w-2xl "
                >
                  {slide.desc}
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
