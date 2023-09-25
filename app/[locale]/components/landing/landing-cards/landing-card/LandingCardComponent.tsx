import Link from "next-intl/link";
import Image from "next/image";
import styles from "./LandingCardComponent.module.scss";

const LandingCardComponent: React.FC<Stadium> = ({
  id,
  name,
  location,
  imageUrl,
}) => {
  return (
    <Link href={`/pitch/${id}`} className={styles.landing_card}>
      <div className={styles.landing_card__description}>
        <h2>{name}</h2>
        <span className={styles.location}>
          <Image src={"/location.svg"} alt="location" width={18} height={18} />
          <p>{location}</p>
        </span>
      </div>
      <Image
        src={imageUrl}
        fill
        alt="image"
        className={styles.landing_card__image}
      />
    </Link>
  );
};

export default LandingCardComponent;
