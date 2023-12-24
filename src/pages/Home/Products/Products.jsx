import img1 from '../../../assets/images/products/1.png';
import img2 from '../../../assets/images/products/2.png';
import img3 from '../../../assets/images/products/3.png';
import img4 from '../../../assets/images/products/4.png';
import img5 from '../../../assets/images/products/5.png';
import img6 from '../../../assets/images/products/6.png';
import { FaStar } from 'react-icons/fa';
const Products = () => {
  return (
    <div>
      <div className="text-center space-y-2">
        <h4 className="text-[#FF3811] font-semibold">Popular Products</h4>
        <h3 className="text-5xl font-semibold">Browse Our Products</h3>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 bg-slate-100 pt-10">
            <img src={img1} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-orange-400 flex gap-2">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </p>
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-[#FF3811]">Price: $20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 bg-slate-100 pt-10">
            <img src={img2} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-orange-400 flex gap-2">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </p>
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-[#FF3811]">Price: $20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 bg-slate-100 pt-10">
            <img src={img3} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-orange-400 flex gap-2">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </p>
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-[#FF3811]">Price: $20</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 bg-slate-100 pt-10">
            <img src={img4} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-orange-400 flex gap-2">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </p>
            <h2 className="card-title">Cools Led Ligh</h2>
            <p className="text-[#FF3811]">Price: $20</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 bg-slate-100 pt-10">
            <img src={img5} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-orange-400 flex gap-2">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </p>
            <h2 className="card-title">Cools Led Ligh</h2>
            <p className="text-[#FF3811]">Price: $20</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 bg-slate-100 pt-10">
            <img src={img6} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-orange-400 flex gap-2">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </p>
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-[#FF3811]">Price: $20</p>
          </div>
        </div>
      </div>
      <div className="my-5 text-center">
        <button className="btn btn-outline btn-secondary">More Products</button>
      </div>
    </div>
  );
};

export default Products;
