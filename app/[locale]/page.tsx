import AuthenticationPageSection from "./components/authentication/authentication-page/AuthenticationPageSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <AuthenticationPageSection />
    </main>
  );
}
