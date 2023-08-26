import styles from "./AuthenticationPageSections.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LoginFormComponent from "../../login-form/LoginFormComponent";

const AuthenticationPageSection = () => {
  const t = useTranslations("Index");

  return (
    <section className={styles.landing_section}>
      <Image
        src={"/background.jpg"}
        alt="background-image"
        fill
        className={styles.landing_section__background}
      />
      <div className={styles.landing_section__filter}></div>
      <h3>{t("title")}</h3>
      <LoginFormComponent />
    </section>
  );
};

export default AuthenticationPageSection;
