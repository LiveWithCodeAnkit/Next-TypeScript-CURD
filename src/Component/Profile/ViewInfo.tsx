import React from "react";
import { useRouter } from "next/navigation";
import { useLogged } from "./helper/useLogged";

type dataItem = {
  phone: any;
  id: string;
  name: string;
  gender: string;
  dob: string;
  hobby: string[];
  hq: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  profileImg: string;
};

const ViewInfo = () => {
  const router = useRouter();
  const storedData: any = useLogged();

  return (
    <>
      <div className="flex justify-center items-center w-auto p-48">
        <div className=" flex flex-col text-xl gap-5">
          <h1>Welcome to</h1>
          <ul>
            <li className="flex flex-col gap-3">
              <p>Name: {storedData.name}</p>
              <p>Gender: {storedData.gender}</p>
              <p>Phone: {storedData.phone}</p>
              <p>DOB: {storedData.dob}</p>
              {storedData.hobby && Array.isArray(storedData.hobby) && (
                <p>Hobby: {storedData.hobby.join(", ")}</p>
              )}
              <p>Highest Qualification: {storedData.hq}</p>
              <p>Email: {storedData.email}</p>
            </li>
          </ul>
          <button
            className="bg-blue-600 p-3 rounded-lg text-white font-extrabold"
            onClick={() => router.push(`/profile/${storedData.id}`)}
          >
            Update Your Data !
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewInfo;
