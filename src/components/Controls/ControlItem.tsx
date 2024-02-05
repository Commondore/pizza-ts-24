import styles from "./style.module.css";

interface ControlItemProps {
  ing: string;
  name: string;
  count: number;
}

const ControlItem = ({
  ing,
  name,
  count,
}: ControlItemProps) => {
  return (
    <div className={styles.controlItem}>
      <img
        className={styles.image}
        src={`/img/${ing}-icon.png`}
        alt=""
      />
      <h3>{name}</h3>
      {!!count && (
        <div className={styles.count}>{count}</div>
      )}
    </div>
  );
};

export default ControlItem;
