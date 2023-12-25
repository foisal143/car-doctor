import { useLoaderData } from 'react-router-dom';
import baner from '../../assets/images/banner/4.jpg';
import logo from '../../assets/logo.svg';
import FacilityCart from './FacilityCart';
import { FaArrowRight } from 'react-icons/fa';
const ServicesDetails = () => {
  const service = useLoaderData();
  const { img, title, price, description, facility } = service;
  return (
    <div className="my-12">
      <div className="relative overflow-hidden">
        <img className="h-[300px] w-full rounded-xl" src={baner} alt="" />
        <div className="w-full text-white top-0 h-full absolute justify-center items-center rounded-xl  bg-gradient-to-r from-black via-black/50 to-transparent">
          <h3 className="text-5xl mt-32 ms-24  font-bold">Service Details</h3>
        </div>
        <div className="w-[296px]  absolute bottom-0 left-[40%] z-10 mx-auto">
          <p className="p-2 z-10    text-center text-white bg-[#FF3811]">
            Home/Service Details
          </p>
        </div>
      </div>
      <div className="my-20 flex justify-between gap-8">
        <div className="w-2/3 space-y-5">
          <img className="w-full rounded-xl" src={img} alt="" />
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-[#737373]">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {facility.map(fac => (
              <FacilityCart key={fac.name} fac={fac}></FacilityCart>
            ))}
          </div>
          <p className="text-[#737373]">{description}</p>
        </div>
        {/* checkout section  */}
        <div className="w-1/3 space-y-5">
          <div className="p-3 space-y-3 rounded-xl bg-slate-100">
            <h3 className="text-2xl font-bold">Services</h3>
            <div className="bg-white  p-3 rounded-md flex items-center justify-between">
              <h3 className="font-semibold">Engine Repair</h3>{' '}
              <span className="text-[#FF3811]">
                <FaArrowRight></FaArrowRight>
              </span>
            </div>
            <div className="bg-white  p-3 rounded-md flex items-center justify-between">
              <h3 className="font-semibold">Automatic Services</h3>{' '}
              <span className="text-[#FF3811]">
                <FaArrowRight></FaArrowRight>
              </span>
            </div>
            <div className="bg-white  p-3 rounded-md flex items-center justify-between">
              <h3 className="font-semibold">Engine Oil Change</h3>{' '}
              <span className="text-[#FF3811]">
                <FaArrowRight></FaArrowRight>
              </span>
            </div>
            <div className="bg-white  p-3 rounded-md flex items-center justify-between">
              <h3 className="font-semibold">Battery Charge</h3>{' '}
              <span className="text-[#FF3811]">
                <FaArrowRight></FaArrowRight>
              </span>
            </div>
          </div>
          {/* download section */}
          <div className="bg-black  py-5 space-y-3 text-white p-3 rounded-xl">
            <h3 className="text-2xl font-semibold">Download</h3>
            <div className="p-3 flex items-center justify-between border rounded-md border-[#FF3811]">
              <h4 className="font-semibold">Our Brochure</h4>{' '}
              <span className="text-[#FF3811]">
                <FaArrowRight></FaArrowRight>
              </span>
            </div>
            <div className="p-3 flex items-center justify-between border rounded-md border-[#FF3811]">
              <h4 className="font-semibold">Our Brochure</h4>{' '}
              <span className="text-[#FF3811]">
                <FaArrowRight></FaArrowRight>
              </span>
            </div>
          </div>
          {/* get a quote section */}
          <div className="bg-black rounded-xl pb-20 p-3 text-center space-y-3 text-white py-5">
            <img className="w-20 h-20 mx-auto" src={logo} alt="" />
            <h3 className="font-semibold text-2xl">
              Need Help? We Are Here <br /> To Help You
            </h3>
            <div className="w-10/12 relative pb-12 py-5 px-2 rounded-xl mx-auto text-black bg-white">
              <p className="font-bold text-2xl">
                <span className="text-[#FF3811]">Car Doctor</span> Special
              </p>
              <p className="text-xl font-semibold">
                Save up to <span className="text-[#FF3811]">60% off</span>
              </p>
              <button className="btn-coustom right-16 -bottom-4 hover:bg-black absolute">
                Get A Quote
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-5xl font-bold">Price ${price}</h3>
            <button className="btn-coustom w-full hover:bg-black">
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
