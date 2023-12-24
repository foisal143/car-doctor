import img1 from '../../../assets/images/team/1.jpg';
import img2 from '../../../assets/images/team/2.jpg';
import img3 from '../../../assets/images/team/3.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Team = () => {
  return (
    <div className="mb-12">
      <div className="text-center space-y-2">
        <h4 className="text-[#FF3811] font-semibold">Team</h4>
        <h3 className="text-5xl font-semibold">Meet Our Team</h3>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={img1} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <p className="flex items-center gap-3">
              <span className="w-10 h-10 flex justify-center items-center bg-blue-900 rounded-full text-white">
                {' '}
                <FaFacebook></FaFacebook>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-blue-300 rounded-full text-white">
                {' '}
                <FaTwitter></FaTwitter>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-blue-600 rounded-full text-white">
                {' '}
                <FaLinkedin></FaLinkedin>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-red-500 rounded-full text-white">
                {' '}
                <FaInstagram></FaInstagram>
              </span>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={img2} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <p className="flex items-center gap-3">
              <span className="w-10 h-10 flex justify-center items-center bg-blue-900 rounded-full text-white">
                {' '}
                <FaFacebook></FaFacebook>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-blue-300 rounded-full text-white">
                {' '}
                <FaTwitter></FaTwitter>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-blue-600 rounded-full text-white">
                {' '}
                <FaLinkedin></FaLinkedin>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-red-500 rounded-full text-white">
                {' '}
                <FaInstagram></FaInstagram>
              </span>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={img3} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <p className="flex items-center gap-3">
              <span className="w-10 h-10 flex justify-center items-center bg-blue-900 rounded-full text-white">
                {' '}
                <FaFacebook></FaFacebook>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-blue-300 rounded-full text-white">
                {' '}
                <FaTwitter></FaTwitter>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-blue-600 rounded-full text-white">
                {' '}
                <FaLinkedin></FaLinkedin>
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-red-500 rounded-full text-white">
                {' '}
                <FaInstagram></FaInstagram>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
