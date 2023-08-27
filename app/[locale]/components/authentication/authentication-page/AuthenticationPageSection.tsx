"use client";
import styles from "./AuthenticationPageSections.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LoginFormComponent from "../../login-form/LoginFormComponent";
import { useState } from "react";
import AuthenticationModalComponent from "../authentication-modal/AuthenticationModalComponent";

const AuthenticationPageSection = () => {
  const t = useTranslations("Index");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeDialog = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={styles.landing_section}>
        <Image
          src={"/background.jpg"}
          alt="background-image"
          fill
          className={styles.landing_section__background}
        />
        <div className={styles.landing_section__filter}></div>
        <h3>{t("title")}</h3>
        <LoginFormComponent setIsModalOpen={() => setIsModalOpen(true)} />
      </section>
      {isModalOpen && (
        <AuthenticationModalComponent closeDialog={closeDialog} />
      )}
    </>
  );
};

export default AuthenticationPageSection;
