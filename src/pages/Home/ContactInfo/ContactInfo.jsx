import { FaCalendar, FaPhone } from 'react-icons/fa';
import { CiLocationArrow1 } from 'react-icons/ci';
const ContactInfo = () => {
  return (
    <div className="bg-black h-[250px] rounded-md px-5 mb-20 text-white flex justify-between items-center gap-10">
      <div className="flex gap-5 items-center">
        <span className="text-xl">
          <FaCalendar></FaCalendar>
        </span>
        <div>
          <h5>We are open monday-friday</h5>
          <p className="text-xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <span className="text-xl">
          <FaPhone></FaPhone>
        </span>
        <div>
          <h5>Have a question?</h5>
          <p className="text-xl font-bold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <span className="text-xl">
          <CiLocationArrow1></CiLocationArrow1>
        </span>
        <div>
          <h5>Need a repair? our address</h5>
          <p className="text-xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
