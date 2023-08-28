"use client";
import { useTranslations } from "next-intl";
import styles from "./RegistrationForm.module.scss";
import ButtonComponent from "../button/ButtonComponent";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import registerUser from "@/lib/registerUser";
import bcrypt from "bcryptjs";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<RegisterData>();
  const t = useTranslations("Index");
  const [passwordInputVisible, setPasswordInputVisible] = useState(false);
  const [repeatPasswordInputVisible, setRepeatPasswordInputVisible] =
    useState(false);

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user: RegisterUser = {
      username: data.username,
      email: data.email,
      password: hashedPassword,
    };

    registerUser(user);
    reset();
  };

  return (
    <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder={t("username")}
        {...register("username", { required: t("usernameError") })}
      />
      {errors.username && (
        <p className={styles.error}>{`${errors.username.message}`}</p>
      )}
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: t("emailError") })}
        autoComplete="username"
      />
      {errors.email && (
        <p className={styles.error}>{`${errors.email.message}`}</p>
      )}
      <div className={styles.password_input}>
        <input
          type={passwordInputVisible ? "text" : "password"}
          placeholder={t("password")}
          {...register("password", {
            required: t("passwordError"),
            minLength: {
              value: 6,
              message: t("passwordLength"),
            },
          })}
          autoComplete="new-password"
        />
        <div
          className={styles.password_input__icon}
          onClick={() => setPasswordInputVisible(!passwordInputVisible)}
        >
          {passwordInputVisible ? (
            <Image
              src={"/show-password.svg"}
              alt="show"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={"/hide-password.svg"}
              alt="hide"
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
      {errors.password && (
        <p className={styles.error}>{`${errors.password.message}`}</p>
      )}
      <div className={styles.repeat_password_input}>
        <input
          type={repeatPasswordInputVisible ? "text" : "password"}
          placeholder={t("repeatPassword")}
          {...register("repeatPassword", {
            required: t("repeatPasswordError"),
            validate: (value) =>
              value === getValues("password") || t("passwordNotMatch"),
          })}
          autoComplete="new-password"
        />
        <div
          className={styles.repeat_password_input__icon}
          onClick={() =>
            setRepeatPasswordInputVisible(!repeatPasswordInputVisible)
          }
        >
          {repeatPasswordInputVisible ? (
            <Image
              src={"/show-password.svg"}
              alt="show"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={"/hide-password.svg"}
              alt="hide"
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
      {errors.repeatPassword && (
        <p className={styles.error}>{`${errors.repeatPassword.message}`}</p>
      )}
      <ButtonComponent variant={"authentication"} isEnable={isSubmitting}>
        <p>{t("register")}</p>
      </ButtonComponent>
    </form>
  );
};

export default RegistrationForm;
