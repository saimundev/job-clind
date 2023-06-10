import React, { useEffect } from "react";
import Container from "../../components/Container";
import {
  useDeleteProdectMutation,
  useGetProdectQuery,
} from "../../store/services/prodectApi";
import Loding from "../../components/Loding";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const View = () => {
  const { data, isLoading, isError } = useGetProdectQuery();
  const [deleteItem, { isSuccess, error }] = useDeleteProdectMutation();

  useEffect(() => {
    isSuccess && toast.success("Delete Successfull");
  }, [isSuccess]);

  useEffect(() => {
    error && toast.error("Something went wrong");
  }, [error]);

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
      await deleteItem(id);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  };

  return (
    <div>
      <Container>
        <h1 className="mt-20 text-center font-semibold text-2xl mb-6">
          Prodect List
        </h1>
        {isLoading ?  (
          <div className="flex justify-center mt-10">
            <Loding />
          </div>
        ) : (
          <table className="w-full rounded">
            <tr className="border border-gray-300">
              <th className="text-center p-3 bg-gray-300">Name</th>
              <th className="text-center p-3 bg-gray-300">View</th>
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
                  <td className="p-3 text-md font-medium">{item.name}</td>
                  <td>
                    <Link to={`/view/${item._id}`}>
                      <button className="bg-blue-500 px-6 py-1 text-white rounded">
                        View
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/edit/${item._id}`}>
                      <button className="bg-green-500 px-6 py-1 text-white rounded">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 px-6 py-1 text-white rounded"
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

export default View;
