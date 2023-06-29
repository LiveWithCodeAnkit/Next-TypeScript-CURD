"use client";
import React, { useEffect, useState } from "react";

export const useLogged = () => {
  const [storedData, setStoredData] = useState<any[]>([]);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const data = localStorage.getItem("UserLogin");
      if (data) {
        const parsedData = JSON.parse(data);
        setStoredData(parsedData);
      }
    }
  }, []);

  return storedData
}

 
