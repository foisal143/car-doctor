import React from 'react';

const FacilityCart = ({ fac }) => {
  return (
    <div className="bg-slate-100 space-y-2 border-t-2 border-[#FF3811] rounded-md p-2">
      <h3 className="text-2xl font-semibold">{fac.name}</h3>
      <p>{fac.details}</p>
    </div>
  );
};

export default FacilityCart;
