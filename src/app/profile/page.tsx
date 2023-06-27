"use client";
import Login from '@/Component/Login/Login';
import ViewInfo from '@/Component/Profile/ViewInfo'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [storedData, setStoredData] = useState<any[]>([]);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const data = localStorage.getItem("UserLogin");
      if (data) {
        const parsedData = JSON.parse(data);
        setStoredData(parsedData);
        console.log(storedData);
      }
    }
  }, []);
  const array = [storedData];
  return (
    <>
    {
      storedData?<ViewInfo/>:<Login/>
    }
     
    </>
  )
}

export default page
