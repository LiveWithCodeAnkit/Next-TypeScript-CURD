import React from "react";
import { useLogged } from "./helper/useLogged";

interface dataItem {
  phone: any;
  id: string;
  name: string;
  gender: string;
  dob: string;
  hobby: any[];
}

const ViewInfo = () => {
  const storedData = useLogged();
  const array = [storedData];
  return (
    <>
      <>
        <div>
          <h1>Welcome to</h1>
          <ul>
            {array.map((dataItem: dataItem,index) => (
              <li key={index}>
                <p>Name: {dataItem.name}</p>
                <p>Gender: {dataItem.gender}</p>
                <p>Phone: {dataItem.phone}</p>
                <p>DOB: {dataItem.dob}</p>
                <p>Hobby: {dataItem.hobby}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    </>
  );
};

export default ViewInfo;
