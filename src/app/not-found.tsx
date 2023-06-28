import Navbar from "@/Component/Header/Navbar";
import React from "react";
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start text-center p-20">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-3xl">404 ! Page Not Found </h1>
          <button className="bg-red-400">Click me </button>
        </div>
      </div>
    </>
  );
};

export default Error;
