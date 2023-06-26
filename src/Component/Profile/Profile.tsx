"use client";
import { useParams } from "next/navigation";
import React from "react";

const Profile = () => {
  const params = useParams();

  const storedData = localStorage.getItem("UserRegister");

  const storedInfo = storedData ? JSON.parse(storedData) : [];

  const registrationInfo = storedInfo.find(
    (data: any) => data.id === params.profile
  );
  console.log(registrationInfo);

  return (
    <>
      <div className="flex justify-center items-start text-center p-20">
        <div className="flex flex-col items-start gap-6 bg-blue-400 p-10 text-lg font-medium text-yellow-100 rounded-lg">
          <h1 className="font-extrabold text-3xl">{registrationInfo.email}</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
