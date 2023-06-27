"use client";
import React, { useState, useEffect,useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();

  const [isValid3, setIsValid] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("UserLogin");
    localStorage.setItem("Authenticate", "false");
 
    router.push("/pp");
  };

  const isValid = useMemo(() => {
    console.log("i am nav bar ds");
    const isValid1 = localStorage.getItem("Authenticate") === "true";
    setIsValid(isValid1);
    return isValid3
  }, [isValid3]);



 

  return (
    <>
      <div className="flex justify-around p-6 bg-blue-500 text-xl">
        <h1 className="font-extrabold text-3xl text-yellow-100">
          Portfolio.in
        </h1>
        <nav>
          <ul className="flex items-center gap-5 text-2xl text-yellow-100 font-semibold">
            {/* {menus.map((items) => (
              <li key={items.id}>
                <Link href={items.path} className="hover:text-gray-600">
                  {items.tittle}
                </Link>
              </li>
            ))} */}
            {!isValid && (
              <li>
                <Link href="/register" className="hover:text-gray-600">
                  Register
                </Link>
              </li>
            )}
            {!isValid && (
              <li>
                <Link href="/login" className="hover:text-gray-600">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        {isValid && (
          <button
            className="font-Pacifico text-xl rounded-lg hover:text-white w-auto p-2 bg-[#7b9194]"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
