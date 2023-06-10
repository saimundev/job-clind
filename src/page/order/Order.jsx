import React, { useEffect, useState } from "react";
import {
  useCreateOrderMutation,
  useGetProdectQuery,
} from "../../store/services/prodectApi";
import Loding from "../../components/Loding";
import { toast } from "react-hot-toast";

const Order = () => {
  const [prodectValue, setProdectValue] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { data, isLoading } = useGetProdectQuery();
  const [createOrder, { isLoading: loding, isSuccess, error }] =
    useCreateOrderMutation();

  useEffect(() => {
    isSuccess && toast.success("Order Have been Created");
  }, [isSuccess]);

  useEffect(() => {
    error && toast.error(error?.data?.message);
  }, [error]);

  const handleProdect = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setProdectValue((prev) => [...prev, value]);
    } else {
      setProdectValue((prev) => [...prev.filter((pro) => pro !== value)]);
    }
  };

  const hamdleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      prodectValue,
    };

    await createOrder(data);


    //celar input
    setName("");
    setEmail("");
    setProdectValue([]);
  };

  return (
    <div className="">
      <h1 className="mt-20 text-center font-semibold text-2xl mb-6">
        Order Now
      </h1>
      <form onSubmit={hamdleSubmit} className="w-1/3 mx-auto">
        <div className="">
          <label htmlFor="" className="text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full border border-gray-300 rounded p-2 outline-none"
            placeholder="Enter Your Name"
            name=""
            id=""
          />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full border border-gray-300 rounded p-2 outline-none"
            placeholder="Enter Your Email"
            name=""
            id=""
          />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-md font-medium text-gray-700 block">
            Prodect:
          </label>

          {isLoading ? (
            <Loding />
          ) : data?.length > 0 ? (
            data?.map((item) => (
              <div className="flex gap-3 mt-1">
                <input
                  type="checkbox"
                  onChange={handleProdect}
                  value={item.name}
                  name=""
                  id=""
                />
                <span className="text-md font-medium">{item.name}</span>
              </div>
            ))
          ) : (
            "no data"
          )}
        </div>
        <button
          disabled={loding}
          className="bg-indigo-500 px-6 py-2 rounded text-white mt-6 block"
        >
          {loding ? "Pending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Order;
