import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <div className="bg-indigo-500 fixed w-full top-0">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">AppWare</div>
          <div className="flex gap-5">
            <Link
              to="/"
              className="inline-block py-4 px-2 text-white text-sm font-semibold"
            >
              Home
            </Link>
            <Link
              to="/view"
              className="inline-block py-4 px-2 text-white text-sm font-semibold"
            >
              View Item
            </Link>
            <Link
              to="/order"
              className="inline-block py-4 px-2 text-white text-sm font-semibold"
            >
              Order
            </Link>
            <Link
              to="/orderList"
              className="inline-block py-4 px-2 text-white text-sm font-semibold"
            >
              Order List
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
