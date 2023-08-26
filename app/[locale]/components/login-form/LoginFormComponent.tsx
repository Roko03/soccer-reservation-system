"use client";
import { useTranslations } from "next-intl";
import styles from "./LoginFormComponent.module.scss";

const LoginFormComponent = () => {
  const t = useTranslations("Index");
  return (
    <form className={styles.login_form}>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder={t("password")} />
    </form>
  );
};

export default LoginFormComponent;
