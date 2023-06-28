"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("UserLogin");
    localStorage.setItem("Authenticate", "false");
    router.push("/");
  };

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("Authenticate") === "true";
    setAuth(auth);
  }, []);

  return (
    <>
      <div className="flex justify-around p-6 bg-blue-500 text-xl">
        <h1 className="font-extrabold text-3xl text-yellow-100">
          Portfolio.in
        </h1>
        <nav>
          <ul className="flex items-center gap-5 text-2xl text-yellow-100 font-semibold">
            {!auth && (
              <li>
                <Link href="/register" className="hover:text-gray-600">
                  Register
                </Link>
              </li>
            )}
            {!auth && (
              <li>
                <Link href="/login" className="hover:text-gray-600">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        {auth && (
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
