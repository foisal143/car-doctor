import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServicesCart = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="space-y-3 shadow-md  p-3 rounded-md">
      <img className="rounded-md h-2/3 w-full" src={img} alt="" />
      <h3 className="text-3xl font-semibold">{title}</h3>
      <div className="text-[#FF3811] flex justify-between items-center">
        <p>Price: ${price}</p>
        <Link to={`/${_id}`}>
          <button>
            <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCart;
