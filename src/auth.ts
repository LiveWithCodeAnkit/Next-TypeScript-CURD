import React from "react";

export const auth = () => {
    if (typeof window === "undefined") return null;
  const loggedIn = localStorage.getItem("Authenticate");
  if(!loggedIn){
    return false;
  }
  else{
    return true;
  }
  if (typeof window === "undefined") return loggedIn;
};
