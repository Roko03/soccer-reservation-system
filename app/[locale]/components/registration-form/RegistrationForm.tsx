"use client";
import { useTranslations } from "next-intl";
import styles from "./RegistrationForm.module.scss";
import ButtonComponent from "../button/ButtonComponent";

const RegistrationForm = () => {
  const t = useTranslations("Index");
  return (
    <form className={styles.register_form}>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder={t("password")} />
      <input type="text" placeholder={t("repeatPassword")} />
      <ButtonComponent variant={"authentication"}>
        <p>{t("register")}</p>
      </ButtonComponent>
    </form>
  );
};

export default RegistrationForm;
