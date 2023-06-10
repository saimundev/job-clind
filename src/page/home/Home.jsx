import React, { useEffect, useState } from "react";
import { useCreateProdectMutation } from "../../store/services/prodectApi";
import { toast } from "react-hot-toast";

const Home = () => {
  const [prodect, setProdect] = useState("");
  const [createProdect, { isLoading, isSuccess, error }] =
    useCreateProdectMutation();


  useEffect(() => {
    isSuccess && toast.success("Prodect Create Successfull");
  }, [isSuccess]);

  useEffect(() => {
    error && toast.error(error?.data?.message);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProdect({ name: prodect });

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
              Prodect Name:
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
            {isLoading ? "Pending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
