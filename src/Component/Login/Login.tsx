import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-start text-center p-20">
        <div className="flex flex-col items-start gap-6 bg-blue-400 p-10 text-lg font-medium text-yellow-100 rounded-lg">
          <h1 className="font-extrabold text-3xl">Login</h1>
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="h-10 rounded-md"
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            id="password"
            className="h-10 rounded-md"
          />
          <button
            className="bg-slate-500 p-3 rounded-md text-yellow-100"
            type="submit"
          >
            <label>Login</label>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
