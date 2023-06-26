
import { useRouter } from 'next/navigation';
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
    console.log("handleRegistration", values);

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
      id,
      ...values,
    };

    const updatedInfo = [...storedInfo, registrationEntry];
    localStorage.setItem("UserRegister", JSON.stringify(updatedInfo));
    resetForm();
    Success("Registration Successful");
    router.push(`/profile/${id}`);
   
  };

  return {
    initialValues,
    handleSubmit: handleRegistration,
    schema: registerSchema,
  };
};
