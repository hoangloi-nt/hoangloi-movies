import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <span className="text-red-500 text-lg font-bold">404 ERROR</span>
      <span className="text-5xl font-bold">Page not found!</span>
      <Link to={"/"}>
        <Button className={"w-[200px] mt-8"}>Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
