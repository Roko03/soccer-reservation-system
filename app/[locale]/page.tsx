import LandingPageSection from "./components/landing/landing-page/LandingPageSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPageSection />
    </main>
  );
}
