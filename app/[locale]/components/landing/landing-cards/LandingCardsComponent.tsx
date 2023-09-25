import styles from "./LandingCardsComponent.module.scss";
import LandingCardComponent from "./landing-card/LandingCardComponent";

const LandingCardsComponent = () => {
  const array: Stadium[] = [
    {
      id: "i3249jsfsmg9qraw",
      name: "Teren Kafic",
      location: "Solin",
      imageUrl: "/background.jpg",
    },
  ];

  return (
    <div className={styles.ladning_cards}>
      {array.map((stadium, index) => {
        return <LandingCardComponent {...stadium} key={index} />;
      })}
    </div>
  );
};

export default LandingCardsComponent;
