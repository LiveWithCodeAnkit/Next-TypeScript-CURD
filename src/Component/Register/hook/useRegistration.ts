"use-client";
import { useRouter } from "next/navigation";
import { registerSchema } from "../schema/registerSchema";
import { useToastMessages } from "./useToastMessages";


interface RegistrationFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const useRegistration = () => {
  const router = useRouter();

  const { Success, Warn } = useToastMessages();
  const initialValues: RegistrationFormData = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const handleRegistration = (
    values: RegistrationFormData,
    { resetForm }: any
  ) => {
    const storedData = localStorage.getItem("UserRegister");

    const storedInfo = storedData ? JSON.parse(storedData) : [];

    const isEmailExists = storedInfo.some(
      (entry: RegistrationFormData) => entry.email === values.email
    );
    if (isEmailExists) {
      Warn("Email All Ready Exits !s");
      return;
    }

    const id = new Date().getTime().toString();

    const registrationEntry = {
      id: new Date().getTime().toString(),
      ...values,
    };

    const updatedInfo = [...storedInfo, registrationEntry];
    localStorage.setItem("UserRegister", JSON.stringify(updatedInfo));

    Success("Registration Successful");

    setTimeout(() => {
      router.push(`/profile/${id}`);
    }, 1000);
  };

  return {
    initialValues,
    handleSubmit: handleRegistration,
    schema: registerSchema,
  };
};
