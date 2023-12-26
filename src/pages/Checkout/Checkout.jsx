import { useContext } from 'react';
import baner from '../../assets/images/banner/4.jpg';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { img, title, price } = service;

  const handlerCheckout = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const productName = form.product.value;
    const date = form.number.value;
    const message = form.message.value;

    const customar = {
      name,
      email,
      productName,
      date,
      message,
      img,
      price,
    };
    fetch('http://localhost:5000/booked', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(customar),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success('Checkout success!');
        form.reset();
      });
  };
  return (
    <div className="my-12">
      <div className="relative overflow-hidden">
        <img className="h-[300px] w-full rounded-xl" src={baner} alt="" />
        <div className="w-full text-white top-0 h-full absolute justify-center items-center rounded-xl  bg-gradient-to-r from-black via-black/50 to-transparent">
          <h3 className="text-5xl mt-32 ms-24  font-bold">Checkout</h3>
        </div>
        <div className="w-[296px]  absolute bottom-0 left-[40%] z-10 mx-auto">
          <p className="p-2 z-10    text-center text-white bg-[#FF3811]">
            Home/Service Details
          </p>
        </div>
      </div>
      {/* form  */}
      <div className="hero mt-20 py-10 bg-slate-100">
        <div className="hero-content w-full lg:px-12 flex-col ">
          <div className="card px-5   w-full   ">
            <form
              onSubmit={handlerCheckout}
              className="card-body space-y-5 bg-transparent"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <input
                    type="date"
                    name="number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Product Name"
                    defaultValue={title}
                    name="product"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <textarea
                  type="text"
                  name="message"
                  placeholder="your message"
                  className="input h-32 input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn-coustom w-full hover:bg-black">
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
