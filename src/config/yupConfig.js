import * as Yup from "yup";

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "Подтвердите пароль должен быть таким же, как Пароль.",
    params: {
      reference: ref.path
    },
    test: function(value) {
      return value === this.resolve(ref);
    }
  });
}
Yup.addMethod(Yup.string, "equalTo", equalTo);

export const GeneralInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Обязательное поле")
    .matches(/^[а-яА-Я]+$/, {
      message: "Пожалуйста, укажите правильное имя."
    }),
  lastName: Yup.string()
    .required("Обязательное поле")
    .matches(/^[а-яА-Я]+$/, {
      message: "Пожалуйста, укажите правильную фамилию."
    }),
  // city: Yup.string().required("Required"),
  // salary: Yup.number()
  //   .min(10, "Minimal salary is 10$")
  //   .max(100, "Maximum salary is 100$")
  //   .required("Обязательное поле"),
  // checkboxes: Yup.array().required("At least one service is required"),
  // dogSizes: Yup.array().required("At least one size is required"),
  email: Yup.string()
    .email("Пожалуйста, укажите действительный email.")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(8, "Пароль должен быть длиннее 8 символов")
    .required("Обязательное поле"),
  repeatPassword: Yup.string()
    .min(8, "Пароль должен быть длиннее 8 символов")
    .equalTo(Yup.ref("password"), "Пароли должны совпадать")
    .required("Обязательное поле"),
  role: Yup.string().required("Обязательное поле")
});

export const AddressSchema = Yup.object().shape({
  city: Yup.string().required("Обязательное поле"),
  location: Yup.string().required("Обязательное поле")
});

export const PaymentInfoSchema = Yup.object().shape({
  number: Yup.string().required("Обязательное поле"),
  month: Yup.number().required("Обязательное поле"),
  year: Yup.number().required("Обязательное поле"),
  cvc: Yup.number().required("Обязательное поле")
});

export const SearchSchema = Yup.object().shape({
  city: Yup.string().required("Required")
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please specify a valid email.")
    .required("Required")
});

export const ForgetSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please specify a valid email.")
    .required("Required")
});

export const ChangeSchema = Yup.object().shape({
  passwordOne: Yup.string().required("Required"),
  passwordTwo: Yup.string()
    .oneOf([Yup.ref("passwordOne"), null], "Passwords must similar")
    .required("Required"),
  newPassword: Yup.string()
    .min(8, "Must be longer than 8 characters")
    .required("Required")
});

export const InfoChangeSchema = Yup.object().shape({
  city: Yup.string().required("Required"),
  salary: Yup.number()
    .min(10, "Minimal salary is 10$")
    .max(100, "Maximum salary is 100$")
    .required("Required"),
  checkboxes: Yup.array().required("At least one service is required"),
  dogSizes: Yup.array().required("At least one size is required"),
  daysOfTheWeek: Yup.array().required("At least one size is required")
});
