import React, { useEffect } from "react";
import {
  useDeleteOrderMutation,
  useGetOrderQuery,
} from "../../store/services/prodectApi";
import Container from "../../components/Container";
import Loding from "../../components/Loding";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const OrderList = () => {
  const { data, isLoading, isError } = useGetOrderQuery();
  const [deleteOrder, { isSuccess }] = useDeleteOrderMutation();

  useEffect(() => {
    isSuccess && toast.success("Delete Successfull");
  }, [isSuccess]);

  const handleDelete = async (id) => {
    
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteOrder(id);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  };
   
  return (
    <div className="">
      <Container>
        <h1 className="mt-20 text-center font-semibold text-2xl mb-6">
          Order List
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
              <th className="text-center p-3 bg-gray-300">Details</th>
              <th className="text-center p-3 bg-gray-300">Edit</th>
              <th className="text-center p-3 bg-gray-300">Delete</th>
            </tr>

            {isError ? (
              <div className="text-red-500 font-semibold">
                Something went wrong
              </div>
            ) : data?.length > 0 ? (
              data?.map((item) => (
                <tr className="border border-gray-300 text-center">
                  <td className="p-3 text-md font-medium">{item._id}</td>
                  <td className="p-3 text-md font-medium">{item.name}</td>
                  <td className="p-3 text-md font-medium">{item.email}</td>
                  <td className="p-3 text-md font-medium">
                    <Link
                      to={`/orderdetails/${item._id}`}
                      className="bg-blue-500 px-6 py-2 text-white rounded"
                    >
                      Details
                    </Link>
                  </td>
                  <td className="p-3 text-md font-medium">
                    <Link
                      to={`/edit-order/${item._id}`}
                      className="bg-green-500 px-6 py-2 text-white rounded"
                    >
                      Edit
                    </Link>
                  </td>

                  <td
                    className="p-3 text-md font-medium"
                    onClick={() => handleDelete(item._id)}
                  >
                    <button
                      
                      className="bg-red-500 px-6 py-2 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <div className="text-center font-bold font-xl">No Data Found</div>
            )}
          </table>
        )}
      </Container>
    </div>
  );
};

export default OrderList;
