import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';

const Slider = () => {
  return (
    <div className="carousel h-[600px] w-full">
      <div
        id="slide1"
        className="carousel-item rounded-xl overflow-hidden relative w-full"
      >
        <img src={img1} className="w-full " />
        <div className="absolute flex bottom-12 gap-5  z-10  right-12 ">
          <a href="#slide4" className="btn btn-circle bg-white/50">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle  bg-[#FF3811]">
            ❯
          </a>
        </div>
        <div className="h-full flex items-center px-12 lg:w-full text-white absolute top-0 via-black/50 left-0 bg-gradient-to-r from-black to-transparent">
          {' '}
          <div className="w-1/2 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5 items-center">
              <button className="px-8 duration-200 py-2 bg-[#FF3811] border-transparent border hover:border-white hover:bg-transparent text-white rounded-md">
                Discover
              </button>
              <button className="px-8 duration-200 py-2 hover:bg-[#FF3811] hover:border-transparent border border-white bg-transparent text-white rounded-md">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item rounded-xl overflow-hidden relative w-full"
      >
        <img src={img2} className="w-full" />
        <div className="absolute flex bottom-12 gap-5  z-10  right-12 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
        <div className="h-full flex items-center px-12 lg:w-full text-white absolute top-0 via-black/50 left-0 bg-gradient-to-r from-black to-transparent">
          {' '}
          <div className="w-1/2 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5 items-center">
              <button className="px-8 duration-200 py-2 bg-[#FF3811] border-transparent border hover:border-white hover:bg-transparent text-white rounded-md">
                Discover
              </button>
              <button className="px-8 duration-200 py-2 hover:bg-[#FF3811] hover:border-transparent border border-white bg-transparent text-white rounded-md">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item rounded-xl overflow-hidden relative w-full"
      >
        <img src={img3} className="w-full" />
        <div className="absolute flex bottom-12 gap-5  z-10  right-12 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
        <div className="h-full flex items-center px-12 lg:w-full text-white absolute top-0 via-black/50 left-0 bg-gradient-to-r from-black to-transparent">
          {' '}
          <div className="w-1/2 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5 items-center">
              <button className="px-8 duration-200 py-2 bg-[#FF3811] border-transparent border hover:border-white hover:bg-transparent text-white rounded-md">
                Discover
              </button>
              <button className="px-8 duration-200 py-2 hover:bg-[#FF3811] hover:border-transparent border border-white bg-transparent text-white rounded-md">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item rounded-xl overflow-hidden relative w-full"
      >
        <img src={img4} className="w-full" />
        <div className="absolute flex bottom-12 gap-5  z-10  right-12 ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
        <div className="h-full flex items-center px-12 lg:w-full text-white absolute top-0 via-black/50 left-0 bg-gradient-to-r from-black to-transparent">
          {' '}
          <div className="w-1/2 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5 items-center">
              <button className="px-8 duration-200 py-2 bg-[#FF3811] border-transparent border hover:border-white hover:bg-transparent text-white rounded-md">
                Discover
              </button>
              <button className="px-8 duration-200 py-2 hover:bg-[#FF3811] hover:border-transparent border border-white bg-transparent text-white rounded-md">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
