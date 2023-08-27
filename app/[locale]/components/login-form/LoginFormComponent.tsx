"use client";
import { useTranslations } from "next-intl";
import styles from "./LoginFormComponent.module.scss";
import ButtonComponent from "../button/ButtonComponent";

const LoginFormComponent = () => {
  const t = useTranslations("Index");
  return (
    <form className={styles.login_form}>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder={t("password")} />
      <ButtonComponent variant={"authentication"}>
        <p>{t("login")}</p>
      </ButtonComponent>
    </form>
  );
};

export default LoginFormComponent;
