"use client";
import { useTranslations } from "next-intl";
import DialogComponent from "../../dialog/DialogComponent";
import RegistrationForm from "../../registration-form/RegistrationForm";
import styles from "./AuthenticationModalComponent.module.scss";
import Image from "next/image";

interface AuthenticationModalComponentProps {
  closeDialog: () => void;
}

const AuthenticationModalComponent: React.FC<
  AuthenticationModalComponentProps
> = ({ closeDialog }) => {
  const t = useTranslations("Index");
  return (
    <DialogComponent closeDialog={closeDialog}>
      <div className={styles.authentication_modal}>
        <Image
          src={"/close.svg"}
          alt="close"
          width={36}
          height={36}
          className={styles.close_button}
          onClick={closeDialog}
        />
        <h2>{t("registerTitle")}</h2>
        <RegistrationForm />
      </div>
    </DialogComponent>
  );
};

export default AuthenticationModalComponent;
