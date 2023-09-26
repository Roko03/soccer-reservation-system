"use client";
import Link from "next-intl/link";
import styles from "./HeaderComponent.module.scss";
import Image from "next/image";
import { usePathname } from "next-intl/client";

const HeaderComponent: React.FC<RegisterUser> = ({ email }) => {
  const path = usePathname();
  console.log(email);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href={"/"} className={styles.logo}>
          <h1>Logo</h1>
        </Link>
        <ul className={styles.links}>
          <Link href={path} locale="en">
            <p>En.</p>
          </Link>
          <Link href={path} locale="hr">
            <p>Hr.</p>
          </Link>
        </ul>
        <Link href={"/profile"} className={styles.profile}>
          <Image src={"/profile.svg"} width={32} height={32} alt="profile" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
