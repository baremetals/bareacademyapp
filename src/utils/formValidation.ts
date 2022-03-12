import * as Yup from "yup";


export const getRegisterValidationSchema = () => {
  return Yup.object().shape({
    fullName: Yup.string().required("Full name is Required!"),
    username: Yup.string().required("Username is Required!"),
    email: Yup.string().required("Email is Required!"),
    password: Yup.string().required("Password is Required!"),
  });
};

export const getLoginValidationSchema = () => {
  return Yup.object().shape({
    usernameOrEmail: Yup.string().required("Username or Email is Required!"),
    password: Yup.string().required("Password is Required!"),
  });
};

export const getForgotPasswordValidationSchema = () => {
  return Yup.object().shape({
    usernameOrEmail: Yup.string().required("Username or Email is Required!"),
  });
};

export const getConfirmEmailValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().required("Email is Required!"),
  });
};

export const getResetPasswordValidationSchema = () => {
  return Yup.object().shape({
    newPassword: Yup.string().required("Password is Required!"),
    confirmPassword: Yup.string().test(
      "passwords-match",
      "Passwords must match",
      function (value) {
        // eslint-disable-next-line no-invalid-this
        return this.parent.newPassword === value;
      }
    ),
    // .oneOf([Yup.ref('newPassword'), null], "Passwords must match")
  });
};

export const getChangePasswordValidationSchema = () => {
  return Yup.object().shape({
    currentPassword: Yup.string().required("Password is Required!"),

    newPassword: Yup.string()
      .required("Password is Required!")
      .test("passwords-not-matching", "Your new passwords must not be the same as existing password", function (value) {
        // eslint-disable-next-line no-invalid-this
        return this.parent.currentPassword !== value;
      })
      .min(6, "Password must be atleast 6 characters"),

    confirmPassword: Yup.string()
      .required("Password is Required!")
      .test("passwords-match", "Passwords must match", function (value) {
        // eslint-disable-next-line no-invalid-this
        return this.parent.newPassword === value;
      })
      .min(6, "Password must be atleast 6 characters"),
  });
};

export const getProfileDetailsValidationSchema = () => {
  return Yup.object().shape({
    // fullName: Yup.string().min(3, "Minimum of 3 characters required!"),
    // username: Yup.string().min(3, "Minimum of 3 characters required!"),
    email: Yup.string().email("Please provide a valid email address!"),
  });
};