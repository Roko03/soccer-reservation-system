"use client";
import getUser from "@/lib/getUser";
import styles from "./LandingPageSection.module.scss";
import { useEffect, useState } from "react";
import HeaderComponent from "../../header/HeaderComponent";

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
      <section>
        <h1>Ej</h1>
      </section>
    </>
  );
};

export default LandingPageSection;
