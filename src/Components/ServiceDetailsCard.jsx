import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';



const ServiceDetailsCard = ({ service }) => {
  // console.log(service);
  const {
    serviceName,
    category,
    image,
    description,
    slotsAvailable,
    rating,
    price,
    providerEmail,
    providerName,
  } = service || {};



  const handleBookNow = (e) => {
    e.preventDefault()
    // console.log('clicked')
    const form = e.target;
    toast.success("Service booked successfully")
  form.reset()
}

  return (
    <>
      <div className="w-11/12 mx-auto py-12 text-gray-500  mt-10">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-130 object-cover rounded-2xl"
        />
        <div className="p-8 space-y-3">
          <h1 className="text-3xl font-bold text-[#F8721F]">{serviceName}</h1>
          <p className="text-gray-400">{description}</p>

          <div className="grid grid-cols-1 text-pop sm:grid-cols-2 gap-4 mt-4">
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Provider:</strong> {providerName}
            </p>
            <p>
              <strong>Email:</strong> {providerEmail}
            </p>
            <p>
              <strong>Rating:</strong> {rating}
            </p>
            <p>
              <strong>Price:</strong> ${price}
            </p>

            <p>
              <strong>Slots Available:</strong> ${slotsAvailable}
            </p>
          </div>

          <Link
            to="/"
            className="inline-block mt-6 bg-[#F8721F] text-white py-2 px-6 rounded-lg hover:bg-[#d95d0d] transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      <div className="bg-base-300 px-6 md:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
          {/* Text Section */}
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-700">
              Book a <span className="text-[#F8721F]">Service</span> for Your
              Pet
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Schedule grooming, check-ups, and other pet services easily and
              keep your furry friends happy and healthy.
            </p>
          </div>

          <form onSubmit={handleBookNow} className="w-full md:max-w-lg">
            <fieldset className="fieldset rounded-2xl border border-gray-300 p-6 md:p-8 flex flex-col gap-6 bg-white/10 backdrop-blur-md">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1">
                  <label className="label text-gray-700">Name</label>
                  <input
                    required
                    type="text"
                    className="input rounded-full w-full"
                    placeholder="Name"
                  />
                </div>

                <div className="flex-1">
                  <label className="label text-gray-700">Email</label>
                  <input
                    required
                    type="email"
                    className="input rounded-full w-full"
                    placeholder="Email"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn mt-4 rounded-full w-full md:w-auto px-12 bg-[#F8721F] text-white font-semibold hover:bg-white hover:text-[#F8721F] border border-[#F8721F] transition-all duration-300"
              >
                Book Now
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsCard;