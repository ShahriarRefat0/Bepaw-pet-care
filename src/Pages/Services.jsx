import React, { use } from 'react';
import ServiceCard from '../Components/ServiceCard';
import { ServDataContext } from '../Context/ServDataContext';

;

const Services = () => {
  const { servData } = use(ServDataContext)
  // console.log(servData)


  return (
    <div className="w-11/12 mx-auto my-15 md:p-10 p-0">
      <div data-aos="fade-down">
        <h1
          data-aos="fade-down"
          className="md:text-5xl text-3xl text-center pb-6 font-semibold"
        >
          {" "}
          Our Services
        </h1>
        <p className="text-gray-500 text-lg  pb-10 text-center">
          Trusted Pet Care You Can Count On
        </p>
      </div>
      <section
        data-aos="fade-up"
        
        className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
      >
        {servData.map((service) => (
          <ServiceCard key={service.serviceId} service={service}></ServiceCard>
        ))}
      </section>
    </div>
  );
};

export default Services;