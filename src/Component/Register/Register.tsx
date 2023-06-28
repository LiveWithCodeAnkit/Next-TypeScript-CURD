"use client";
import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useRegistration } from "./hook/useRegistration";

const Register = () => {
  const { initialValues, handleSubmit, schema } = useRegistration();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex justify-center items-start text-center p-20">
            <div className="flex flex-col items-start gap-6 bg-blue-400 p-10 text-lg font-medium text-yellow-100 rounded-lg">
              <h1 className="font-extrabold text-3xl">Registration</h1>
              <label>Email</label>
              <div className="flex flex-col text-start">
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="h-10 rounded-md text-black p-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-orange-700"
                />
              </div>

              <label>Password</label>
              <div className="flex flex-col text-start">
                <Field
                  type="text"
                  name="password"
                  id="password"
                  className="h-10 rounded-md text-black p-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-orange-700"
                />
              </div>
              <label>Confirm Password</label>
              <div className="flex flex-col text-start">
                <Field
                  type="text"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  className="h-10 rounded-md text-black p-2"
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  component="div"
                  className="text-orange-700"
                />
              </div>
              <div className="flex flex-wrap justify-center items-start gap-4">
                <button
                  className="bg-slate-500 p-3 rounded-md text-yellow-100"
                  type="submit"
                >
                  Register
                </button>

                <button
                  className="bg-slate-500 p-3 rounded-md text-yellow-100"
                  type="reset"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
