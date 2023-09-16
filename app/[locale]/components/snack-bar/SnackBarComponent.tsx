import styles from "./SnackBarComponent.module.scss";

interface SnackBarComponentProps {
  children: React.ReactNode;
  onClick: () => void;
}

const SnackBarComponent: React.FC<SnackBarComponentProps> = ({
  children,
  onClick,
}) => {
  return (
    <div className={styles.snack_bar} onClick={onClick}>
      {children}
    </div>
  );
};

export default SnackBarComponent;
