import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProdectQuery } from "../../store/services/prodectApi";
import Loding from "../../components/Loding";

const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProdectQuery(id);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loding />
      </div>
    );
  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <h3 className="text-md font-medium">Prodect Id:{data?._id}</h3>
      <h1 className="text-lg font-semibold mt-1">Prodect Name:{data?.name}</h1>
      <Link to="/view"><button className="text-red-500 underline text-sm font-medium mt-4">GO Back</button></Link>
    </div>
  );
};

export default Details;
