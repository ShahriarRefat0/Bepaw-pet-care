import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const vetsData = [
  {
    name: "Lily Brown",
    role: "Veterinarian",
    img: "https://shthemes.net/demosd/pepito/wp-content/uploads/2025/03/01-3.jpg",
    social: {
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      x: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Emma Davis",
    role: "Pet Groomer",
    img: "https://shthemes.net/demosd/pepito/wp-content/uploads/2025/03/04-3.jpg",
    social: {
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      x: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Sophia Green",
    role: "Animal Trainer",
    img: "https://shthemes.net/demosd/pepito/wp-content/uploads/2025/03/03-3.jpg",
    social: {
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      x: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Olivia Carter",
    role: "Nutrition Specialist",
    img: "https://shthemes.net/demosd/pepito/wp-content/uploads/2025/03/02-3.jpg",
    social: {
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      x: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

const Vats = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <div data-aos="fade-down">
        <h1 className="md:text-5xl text-3xl text-center pb-6 font-semibold">
          Meet Our Expert Vets
        </h1>
        <p className="text-gray-500 text-lg pb-10 text-center">
          Experienced, Caring, and Always Here for Your Pets
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {vetsData.map((vet, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="flex flex-col items-center bg-white  overflow-hidden"
          >
            <div className="relative w-full overflow-hidden rounded-3xl group">
              <img
                src={vet.img}
                alt={vet.name}
                className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Social Icons */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white p-2 rounded-full shadow-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={vet.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href={vet.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href={vet.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-400 transition"
                >
                  <FaXTwitter size={18} />
                </a>
                <a
                  href={vet.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>

            <div className="text-center p-6">
              <h2 className="text-2xl text-gray-800 font-semibold">
                {vet.name}
              </h2>
              <p className="text-gray-500">{vet.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vats;
