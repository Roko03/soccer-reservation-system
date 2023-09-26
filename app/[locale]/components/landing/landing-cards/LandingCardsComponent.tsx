import styles from "./LandingCardsComponent.module.scss";
import LandingCardComponent from "./landing-card/LandingCardComponent";

interface LandingCardsComponentProps {
  stadiums: Stadium[];
}

const LandingCardsComponent: React.FC<LandingCardsComponentProps> = ({
  stadiums,
}) => {
  return (
    <div className={styles.ladning_cards}>
      {stadiums.map((stadium, index) => {
        return <LandingCardComponent {...stadium} key={index} />;
      })}
    </div>
  );
};

export default LandingCardsComponent;
