import React from "react";
import Link from "next/link";
import { menus } from "../constant/menus";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around p-6 bg-blue-500 text-xl">
        <h1 className="font-extrabold text-3xl text-yellow-100">
          Portfolio.in
        </h1>
        <nav>
          <ul className="flex items-center gap-5 text-2xl text-yellow-100 font-semibold">
            {menus.map((items) => (
              <li key={items.id}>
                <Link href={items.path} className="hover:text-gray-600">
                  {items.tittle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
