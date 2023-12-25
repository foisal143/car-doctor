import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="my-32 ">
      <div className="text-center space-y-2">
        <h4 className="text-[#FF3811] font-semibold">Service</h4>
        <h3 className="text-5xl font-semibold">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(service => (
          <ServicesCart key={service._id} service={service}></ServicesCart>
        ))}
      </div>
      <div className="my-5 text-center">
        <button className="btn btn-outline btn-secondary">More Service</button>
      </div>
    </div>
  );
};

export default Service;
