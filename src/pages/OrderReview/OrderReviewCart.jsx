import React from 'react';

const OrderReviewCart = ({ book, handlerDelete }) => {
  const { _id, email, productName, date, img, price } = book;
  return (
    <tr>
      <th>
        <button
          onClick={() => handlerDelete(_id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex  gap-3">
          <div className="avatar">
            <div className="rounded-md w-20 h-20">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{productName}</div>
            <div className="text-sm opacity-50">${price}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{date && date}</td>
      <th>
        <button className="btn-coustom hover:bg-[#FF3811]">Pending</button>
      </th>
    </tr>
  );
};

export default OrderReviewCart;
