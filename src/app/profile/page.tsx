"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/Component/Header/Navbar";
import Login from "@/Component/Login/Login";
import ViewInfo from "@/Component/Profile/ViewInfo";

const Page: React.FC = () => {
  const [storedData, setStoredData] = useState<any[]>([]);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const data = localStorage.getItem("UserLogin");
      if (data) {
        const parsedData = JSON.parse(data);
        setStoredData(parsedData);
        console.log(parsedData);
      }
    }
  }, []);

  return (
    <>
      {storedData ? (
        <>
          <Navbar />
          <ViewInfo />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Page;
