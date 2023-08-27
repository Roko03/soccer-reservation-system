"use client";
import { useTranslations } from "next-intl";
import styles from "./LoginFormComponent.module.scss";
import ButtonComponent from "../button/ButtonComponent";

interface LoginFormComponentProps {
  setIsModalOpen: () => void;
}

const LoginFormComponent: React.FC<LoginFormComponentProps> = ({
  setIsModalOpen,
}) => {
  const t = useTranslations("Index");
  return (
    <form className={styles.login_form}>
      <h3>{t("loginTitle")}</h3>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder={t("password")} />
      <ButtonComponent variant={"authentication"}>
        <p>{t("login")}</p>
      </ButtonComponent>
      <p className={styles.create_account} onClick={setIsModalOpen}>
        {t("createNewAccount")}
      </p>
    </form>
  );
};

export default LoginFormComponent;
