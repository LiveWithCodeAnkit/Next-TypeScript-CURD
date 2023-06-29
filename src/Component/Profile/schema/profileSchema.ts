import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validFileExtensions = { image: ["jpg", "gif", "png", "jpeg", "svg"] };
export const profileSchema = Yup.object().shape({
  name: Yup.string()
    .max(40, "Max 40 size")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .required("Name Required !"),

  gender: Yup.string().required("A radio option is required"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Required !").min(10),

  hobby: Yup.array().min(1).of(Yup.string().required("required Hobby")).required("Rq Hobby"),

  hq: Yup.string().required("HQ Required"),
  dob:Yup.date().required("Plz Enter valid Data !").nullable()
  .default(undefined),

  profileImg: Yup.mixed().required("Profile Pic Required"),
 
});
