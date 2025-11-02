import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceDetailsCard from '../Components/ServiceDetailsCard';
import { ServDataContext } from '../Context/ServDataContext';

const ServiceDetails = () => {
  const [service, SetService] = useState();
  const { servData } = use(ServDataContext);
  const { id } = useParams();
  //console.log("di:", id, "data;", servData);

  useEffect(() => {
    const serDetails = servData.find((ser) => ser.serviceId == id);
    SetService(serDetails);
  }, [id, servData]);
  //console.log("filter data:",service);

  return (
    <div>
      <ServiceDetailsCard service={service}></ServiceDetailsCard>
    </div>
  );
};

export default ServiceDetails;