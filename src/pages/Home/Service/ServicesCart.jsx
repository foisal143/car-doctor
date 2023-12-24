import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const ServicesCart = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="space-y-3 shadow-md  p-3 rounded-md">
      <img className="rounded-md" src={img} alt="" />
      <h3 className="text-3xl font-semibold">{title}</h3>
      <div className="text-[#FF3811] flex justify-between items-center">
        <p>Price: ${price}</p>
        <button>
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default ServicesCart;
