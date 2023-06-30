"use-client";
import { useRouter } from "next/navigation";
import { loginSchema } from "../schema/loginSchema";
import { useToastMessages } from "@/Component/Register/hook/useToastMessages";
import { setCookie } from 'cookies-next';

export const useLogin = () => {
  const router = useRouter();
  const { Success, Warn } = useToastMessages();
    const initialValues = {
    email: "",
    password: "",
  };
    const handleLogin = (values: any, { resetForm }: any) => {
    const loggedUser = { ...values };
    const storedData = localStorage.getItem("UserRegister");
    const dataBase = storedData ? JSON.parse(storedData) : [];
    const validUser = dataBase.find(
      (record: any) =>
        record.email === loggedUser.email &&
        record.password === loggedUser.password
    );

    if (validUser !== undefined) {
      localStorage.setItem("UserLogin", JSON.stringify(validUser));
      localStorage.setItem("Authenticate", "true");
      Success("Login Successful");
      setCookie('Authenticate', 'true');
      setTimeout(() => {
        router.push('/profile');
      }, 1000);
    } else {
      Warn("Invalid Id PassWord");
    }
    resetForm();
  };

  return { initialValues, handleLogin, loginSchema };
}

