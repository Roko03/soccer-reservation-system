"use client";
import getUser from "@/lib/getUser";
import styles from "./LandingPageSection.module.scss";
import { useEffect, useState } from "react";
import HeaderComponent from "../../header/HeaderComponent";
import LandingCardsComponent from "../landing-cards/LandingCardsComponent";

const LandingPageSection = () => {
  const [currentUser, setCurrentUser] = useState<RegisterUser>({
    username: "",
    email: "",
    password: "",
  });

  const getCurrentUser = async () => {
    setCurrentUser(await getUser());
    return;
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <HeaderComponent {...currentUser} />
      <section className={styles.landing_container}>
        <LandingCardsComponent />
      </section>
    </>
  );
};

export default LandingPageSection;
