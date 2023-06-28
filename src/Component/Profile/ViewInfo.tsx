import React from "react";
import { useLogged } from "./helper/useLogged";

interface dataItem {
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
}

const ViewInfo = () => {
  const storedData: any = useLogged();

  return (
    <>
      <div>
        <h1>Welcome to</h1>
        <ul>
          <li>
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
      </div>
    </>
  );
};

export default ViewInfo;
