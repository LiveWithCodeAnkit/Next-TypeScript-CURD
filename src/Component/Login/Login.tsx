"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useLogin } from "./hook/useLogin";
import { useAuth } from "@/store/auth";

const Login = () => {
  const { initialValues, handleLogin, loginSchema } = useLogin();
  const {auth} = useAuth();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        <Form>
          <div className="flex justify-center items-start text-center p-20">
            <div className="flex flex-col items-start gap-6 bg-blue-400 p-10 text-lg font-medium text-yellow-100 rounded-lg">
              <h1 className="font-extrabold text-3xl">Login</h1>
              <label>Email</label>
              <Field
                type="text"
                name="email"
                id="email"
                className="h-10 rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
              <label>Password</label>
              <Field
                type="text"
                name="password"
                id="password"
                className="h-10 rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
              <button
                type="submit"
                className="bg-slate-500 p-3 rounded-md text-yellow-100"
              >
                Login
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
