"use client";
import getUser from "@/lib/getUser";
import styles from "./LandingPageSection.module.scss";
import { useEffect, useState } from "react";

const LandingPageSection = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const getCurrentUser = async () => {
    setCurrentUser(await getUser());
    return;
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <section>
      <h1>Ej</h1>
    </section>
  );
};

export default LandingPageSection;
