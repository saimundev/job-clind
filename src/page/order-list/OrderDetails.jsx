import React from "react";
import { useParams } from "react-router-dom";
import { useOrderDetailsQuery } from "../../store/services/prodectApi";
import { Link } from "react-router-dom";
import Loding from "../../components/Loding";
import Container from "../../components/Container";
import { BsArrowRightShort } from "react-icons/bs";

const OrderDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOrderDetailsQuery(id);
  return (
    <div>
      <Container>
        <h1 className="mt-20 text-center font-semibold text-2xl mb-6">
          Order Details
        </h1>
        {isLoading ? (
          <div className="flex justify-center mt-10">
            <Loding />
          </div>
        ) : (
          <table className="w-full rounded">
            <tr className="border border-gray-300">
              <th className="text-center p-3 bg-gray-300">User Id</th>
              <th className="text-center p-3 bg-gray-300">name</th>
              <th className="text-center p-3 bg-gray-300">email</th>
              <th className="text-center p-3 bg-gray-300">Order Prodect</th>
            </tr>

            {isError ? (
              <div className="text-red-500 font-semibold">
                Something went wrong
              </div>
            ) : (
              <tr className="border border-gray-300 text-center">
                <td className="p-3 text-md font-medium">{data?._id}</td>
                <td className="p-3 text-md font-medium">{data?.name}</td>
                <td className="p-3 text-md font-medium">{data?.email}</td>
                <td className="p-3 text-md font-medium">
                  {data?.order?.map((item) => (
                    <span className="flex gap-4 items-center ">
                      <BsArrowRightShort size={22} /> {item}
                    </span>
                  ))}
                </td>
              </tr>
            )}
          </table>
        )}

        <Link
          to="/orderList"
          className="text-red-500 underline mt-4 inline-block font-semibold"
        >
          Go Back
        </Link>
      </Container>
    </div>
  );
};

export default OrderDetails;
