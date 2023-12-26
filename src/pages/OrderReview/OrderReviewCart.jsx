const OrderReviewCart = ({ book, handlerDelete, handlerUpdate }) => {
  const { _id, email, productName, date, img, price, status } = book;
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
        {status ? (
          <button className="btn btn-outline btn-info">Approved</button>
        ) : (
          <div className="flex gap-3">
            <button className="btn btn-outline cursor-default  btn-error">
              Pending
            </button>
            <button
              onClick={() => handlerUpdate(_id)}
              className="btn btn-secondary"
            >
              Please Approve
            </button>
          </div>
        )}
      </th>
    </tr>
  );
};

export default OrderReviewCart;
