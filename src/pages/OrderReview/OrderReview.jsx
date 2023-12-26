import { useContext, useEffect, useState } from 'react';
import baner from '../../assets/images/banner/4.jpg';
import OrderReviewCart from './OrderReviewCart';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';

const OrderReview = () => {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/booked?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setBooked(data));
  }, [booked]);

  const handlerDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booked/${id}`, { method: 'DELETE' })
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaing = booked.filter(b => b._id !== id);

              setBooked(remaing);
            }
          })
          .catch(er => console.log(er.message));
      }
    });
  };

  const handlerUpdate = id => {
    console.log(id);
    fetch(`http://localhost:5000/booked/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: true }),
    })
      .then(data => {
        console.log(data);
        if (data.status === 200) {
          const remaing = booked.filter(b => b._id !== id);
          const updated = booked.find(b => b._id === id);
          const newData = [updated, ...remaing];
          console.log(newData);
          setBooked(newData);
        }
      })
      .catch(er => console.log(er.message));
  };
  return (
    <div className="my-12">
      <div className="relative overflow-hidden">
        <img className="h-[300px] w-full rounded-xl" src={baner} alt="" />
        <div className="w-full text-white top-0 h-full absolute justify-center items-center rounded-xl  bg-gradient-to-r from-black via-black/50 to-transparent">
          <h3 className="text-5xl mt-32 ms-24  font-bold">Order Summary</h3>
        </div>
        <div className="w-[296px]  absolute bottom-0 left-[40%] z-10 mx-auto">
          <p className="p-2 z-10    text-center text-white bg-[#FF3811]">
            Home/Service Details
          </p>
        </div>
      </div>
      <div className="mt-12  mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {booked ? (
                booked.map(book => (
                  <OrderReviewCart
                    handlerDelete={handlerDelete}
                    key={book._id}
                    book={book}
                    handlerUpdate={handlerUpdate}
                  ></OrderReviewCart>
                ))
              ) : (
                <h3 className="text-3xl font-semibold text-center mt-20">
                  No Order here
                </h3>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
