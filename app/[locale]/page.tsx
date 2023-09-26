import getStadiums from "@/lib/getStadiums";
import LandingPageSection from "./components/landing/landing-page/LandingPageSection";
import styles from "./page.module.scss";

export default async function Home() {
  const stadiums: Stadium[] = await getStadiums();

  return (
    <main className={styles.main}>
      <LandingPageSection stadiums={stadiums} />
    </main>
  );
}
