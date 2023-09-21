"use client";
import { useTranslations } from "next-intl";
import styles from "./LoginFormComponent.module.scss";
import ButtonComponent from "../button/ButtonComponent";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import loginUser from "@/lib/loginUser";

interface LoginFormComponentProps {
  setIsModalOpen: () => void;
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginFormComponent: React.FC<LoginFormComponentProps> = ({
  setIsModalOpen,
}) => {
  const t = useTranslations("Index");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    console.log("Data", data);
    const resposne = await loginUser(data);
    console.log("Ej", resposne);
    if (!resposne) {
      console.log("Neuspjela prijava");
      reset();
      return;
    }

    console.log("Uspješno");
    reset();
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
      <h3>{t("loginTitle")}</h3>
      <input type="text" placeholder="Email" {...register("email")} />
      {errors.email && (
        <p className={styles.error}>{`${errors.email.message}`}</p>
      )}
      <input
        type="password"
        placeholder={t("password")}
        {...register("password")}
      />
      {errors.password && (
        <p className={styles.error}>{`${errors.password.message}`}</p>
      )}
      <ButtonComponent variant={"authentication"} isEnable={isSubmitting}>
        <p>{t("login")}</p>
      </ButtonComponent>
      <p className={styles.create_account} onClick={setIsModalOpen}>
        {t("createNewAccount")}
      </p>
    </form>
  );
};

export default LoginFormComponent;
