import React, { use, useEffectEvent, useState } from 'react';
import ServiceCard from '../Components/ServiceCard';
import { ServDataContext } from '../Context/ServDataContext';
import { LuArrowDownUp } from "react-icons/lu";


const AllServices = () => {
  const { servData } = use(ServDataContext);


  const [sortedData, setSortedData] = useState([...servData]);
  useEffectEvent(() => {
    setSortedData([...servData]); // fresh copy
  }, []);


  const handleSortData = (sortType) => {
    if (sortType === 'lowToHigh') {
      const sorted = [...sortedData].sort((a, b) => a.price - b.price);
      setSortedData(sorted);
    }
    if (sortType === 'hightToLow') {
      const sorted = [...sortedData].sort((a, b) => b.price - a.price);
      setSortedData(sorted)
    }
  }

  return (
    <div data-aos="fade-up" className="w-11/12 mx-auto mb-15 md:p-10 p-0">

      <h1 className="md:text-5xl text-3xl text-center pb-6 font-semibold">
        Our All Services
      </h1>

      <p className="text-gray-500 text-lg pb-10 text-center">
        Trusted Pet Care You Can Count On
      </p>

      {/* Sort Dropdown */}
      <div className="mb-5">
        <details className="dropdown">
          <summary className="btn m-1 flex items-center gap-2">
            Sort <LuArrowDownUp />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
            <li><button onClick={() => handleSortData("lowToHigh")}>💲 Price: Low → High</button></li>
            <li><button onClick={() => handleSortData("hightToLow")}>💲 Price: High → Low</button></li>
          </ul>
        </details>
      </div>

      {/* Service Grid */}
      <section
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {sortedData.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </section>

    </div>
  );
};

export default AllServices;
