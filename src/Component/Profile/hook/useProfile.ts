import { useParams, useRouter } from "next/navigation";
import { profileSchema } from "../schema/profileSchema";
import { useToastMessages } from "@/Component/Register/hook/useToastMessages";

export const useProfile = () => {
  const params = useParams();
  const router = useRouter();
  const { Success, Warn } = useToastMessages();
  const storedData = localStorage.getItem("UserRegister");
  const storedInfo = storedData ? JSON.parse(storedData) : [];
  const registrationInfo = storedInfo.find(
    (data: any) => data.id === params.profile
  );

  const initialValues: any = {
    name: registrationInfo ? registrationInfo.name : "",
    gender: registrationInfo ? registrationInfo.gender : "",
    phone: registrationInfo ? registrationInfo.phone : "",
    hobby: registrationInfo ? registrationInfo.hobby : "",
    hq: registrationInfo ? registrationInfo.hq : "",
    dob: registrationInfo ? registrationInfo.dob : "",
    profileImg: "",
  };

  const handleProfile = (values: any, { resetForm }: any) => {
    const storedData = localStorage.getItem("UserRegister");
    const storedInfo = storedData ? JSON.parse(storedData) : [];
    const registrationInfo = storedInfo.find(
      (data: any) => data.id === params.profile
    );
    const registrationEntry = { ...registrationInfo, ...values };
    const updatedDataBase = storedInfo.filter(
      (data: any) => data.id !== params.profile
    );
    const updatedInfo = [...updatedDataBase, registrationEntry];
    localStorage.setItem("UserRegister", JSON.stringify(updatedInfo));
    resetForm();
    Success("Profile Completed Successful !");
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };
  return {
    initialValues,
    handleSubmit: handleProfile,
    schema: profileSchema,
  };
};
