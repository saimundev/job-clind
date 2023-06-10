import React, { useEffect, useState } from "react";
import {
  useGetSingleProdectQuery,
  useUpdateProdectMutation,
} from "../../store/services/prodectApi";
import { toast } from "react-hot-toast";
import { useParams,useNavigate } from "react-router-dom";


const Edit = () => {
  const { id } = useParams();
  const [prodect, setProdect] = useState("");

  const { data } = useGetSingleProdectQuery(id);
  const [updateProdect, { isLoading, isSuccess, error }] =
  useUpdateProdectMutation();
  const navigate = useNavigate();

    useEffect(()=>{
        setProdect(data?.name)
    },[id,data])

  useEffect(() => {
    if(isSuccess){
        toast.success("Prodect Update Successfull")
        navigate("/view")
    }
  }, [isSuccess]);

  useEffect(() => {
    error && toast.error(error?.data?.message);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = {
        name: prodect
    }
    await updateProdect({ updateData,id });

    //clear input
    setProdect("");
  };
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 border border-gray-300 p-4"
        >
          <div className="">
            <label htmlFor="" className="text-gray-500 text-sm font-medium">
              Update Prodect:
            </label>
            <input
              type="text"
              className="w-full p-2 rounded mt-1 border border-gray-300 outline-none"
              placeholder="Enter Your Prodect Name"
              name=""
              onChange={(e) => setProdect(e.target.value)}
              value={prodect}
              id=""
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-500 text-white p-2 mt-5 rounded"
          >
            {isLoading ? "Pending..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
