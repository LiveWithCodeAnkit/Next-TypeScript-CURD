import React from 'react'

export const useLogged = () => {
    const storedData = localStorage.getItem("UserRegister");

    const storedInfo = storedData ? JSON.parse(storedData) : [];
    console.log(storedInfo);
    return storedInfo;
}

 
