"use client";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useParams } from "next/navigation";
import { useProfile } from "./hook/useProfile";

const Profile = () => {
  const params = useParams();
  const { initialValues, handleSubmit, schema } = useProfile();
  const storedData = localStorage.getItem("UserRegister");

  const storedInfo = storedData ? JSON.parse(storedData) : [];

  const registrationInfo = storedInfo.find(
    (data: any) => data.id === params.profile
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
         
          <div className="flex justify-center items-start text-center p-20">
            <div className=" flex flex-col items-start gap-6 bg-blue-400 p-10 text-lg font-medium text-yellow-100 rounded-lg">
              <h1 className="font-extrabold text-3xl">
                Complete Your Profile 😎
              </h1>
              <div className="flex gap-3">
                <div className="flex gap-2 justify-center items-center">
                  <label>Name</label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="h-10 rounded-md text-black p-2 border-2 border-black"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <label>Gender</label>
                  <Field type="radio" name="gender" id="gender" value="male" />
                  Male
                  <Field
                    type="radio"
                    name="gender"
                    id="gender"
                    value="female"
                  />
                  Female
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-orange-700"
                />
              </div>
              <div className="flex gap-3 justify-center items-start">
                <div className="flex gap-2 justify-center items-center">
                  <label>Phone</label>
                  <Field
                    type="text"
                    className="h-10 rounded-md text-black p-2 border-2 border-black"
                    name="phone"
                    id="phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
                <div className="flex   gap-2 justify-start items-start">
                  <label>Hobby</label>
                  <div className="flex flex-col justify-center items-start">
                    <div className="flex justify-center items-center gap-2">
                      <Field
                        type="checkbox"
                        name="hobby"
                        id="hobby"
                        value="Study"
                      />
                      <label>Study</label>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <Field
                        type="checkbox"
                        name="hobby"
                        id="hobby"
                        value="Code"
                      />
                      <label>Code</label>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <Field
                        type="checkbox"
                        name="hobby"
                        id="hobby"
                        value="Nothing"
                      />
                      <label>Nothing</label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="hobby"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex gap-2 justify-center items-center">
                  <label>Higher Qualification</label>
                  <Field
                    as="select"
                    className=" text-black w-44 h-10 border-2 border-black "
                    id="hq"
                    name="hq"
                  >
                    <option value="">Select !</option>
                    <option value="Master">Master</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Diploma">Diploma</option>
                  </Field>
                  <ErrorMessage
                    name="hq"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <label>Date Of birth</label>
                  <Field
                    type="date"
                    name="dob"
                    id="dob"
                    className="text-black border-2 border-black"
                  />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex gap-2 justify-center items-center">
                  <label>Profile Pic</label>
                  <Field
                    type="file"
                    name="profileImg"
                    id="profileImg"
                    className="border-2 border-black w-auto"
                  />
                  <ErrorMessage
                    name="profileImg"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
                <label>Email</label>
                <div className="flex flex-col text-start">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 rounded-md text-black p-2 border-2 border-black"
                    disabled
                    value={registrationInfo.email}
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-start gap-4">
                <button
                  className="bg-slate-500 p-3 rounded-md text-yellow-100"
                  type="submit"
                >
                  Submit
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

export default Profile;
