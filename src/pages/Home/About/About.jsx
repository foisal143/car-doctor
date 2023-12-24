import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg';
import img2 from '../../../assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div className="flex my-12 flex-col lg:flex-row mb-24 gap-5 justify-between items-center">
      <div className="w-1/2 relative">
        <img className=" lg:w-3/4 rounded-md h-[473px]" src={img1} alt="" />
        <img
          src={img2}
          alt=""
          className=" lg:w-1/2 border-8 border-white rounded-md absolute h-[332px] right-24 top-52"
        />
      </div>
      <div className="w-1/2 space-y-8">
        <h4 className="text-[#FF3811]">About Us</h4>
        <h2 className="text-5xl font-bold">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
        <button className="btn-coustom hover:text-black hover:border-black">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
