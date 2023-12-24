import { FaStar } from 'react-icons/fa';
const Testimonial = () => {
  return (
    <div className="my-20">
      <div className="text-center space-y-2">
        <h4 className="text-[#FF3811] font-semibold">Testimonial</h4>
        <h3 className="text-5xl font-semibold">What Customer Says</h3>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid grid-cols-1 mt-12 lg:grid-cols-3 gap-10">
        <div className="space-y-3  ">
          <div className="flex items-center gap-5">
            <img
              className="w-20 h-20 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div>
              <h3 className="font-semibold text-xl">Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{' '}
          </p>
          <p className="flex text-orange-400 gap-3 items-center">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-5">
            <img
              className="w-20 h-20 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div>
              <h3 className="font-semibold text-xl">Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{' '}
          </p>
          <p className="flex text-orange-400 gap-3 items-center">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </p>
        </div>
        <div className="space-y-3 ">
          <div className="flex items-center gap-5">
            <img
              className="w-20 h-20 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div>
              <h3 className="font-semibold text-xl">Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{' '}
          </p>
          <p className="flex text-orange-400 gap-3 items-center">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
