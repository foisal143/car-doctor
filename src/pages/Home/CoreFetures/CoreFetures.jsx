import img1 from '../../../assets/icons/check.svg';
import img2 from '../../../assets/icons/deliveryt.svg';
import img3 from '../../../assets/icons/group.svg';
import img4 from '../../../assets/icons/person.svg';
import img5 from '../../../assets/icons/quote.svg';
import img6 from '../../../assets/icons/Wrench.svg';

const CoreFetures = () => {
  return (
    <div>
      <div className="text-center space-y-2">
        <h4 className="text-[#FF3811] font-semibold">Core Features</h4>
        <h3 className="text-5xl font-semibold">Why Choose Us</h3>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="my-12 flex justify-between gap-5 flex-wrap">
        <div>
          <img className="w-20 h-20 mx-auto" src={img3} alt="" />
          <h3 className="text-xl font-semibold">Expart Team</h3>
        </div>
        <div>
          <img className="w-20 h-20 mx-auto" src={img2} alt="" />
          <h3 className="text-xl font-semibold">Timely Delivery</h3>
        </div>
        <div>
          <img className="w-20 h-20 mx-auto" src={img4} alt="" />
          <h3 className="text-xl font-semibold">24/7 Support</h3>
        </div>
        <div>
          <img className="w-20 h-20 mx-auto" src={img6} alt="" />
          <h3 className="text-xl font-semibold">Best Equipements</h3>
        </div>
        <div>
          <img className="w-20 h-20 mx-auto" src={img1} alt="" />
          <h3 className="text-xl font-semibold">100% Garenty</h3>
        </div>
      </div>
    </div>
  );
};

export default CoreFetures;
