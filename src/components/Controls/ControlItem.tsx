import styles from "./style.module.css";

interface ControlItemProps {
  ing: string;
  name: string;
  count: number;
  add: () => void;
  remove: (e: any) => void;
}

const ControlItem = ({
  ing,
  name,
  count,
  add,
  remove,
}: ControlItemProps) => {
  return (
    <div
      role="button"
      className={styles.controlItem}
      onClick={add}
    >
      <img
        className={styles.image}
        src={`/img/${ing}-icon.png`}
        alt=""
      />
      <h3>{name}</h3>
      {!!count && (
        <div onClick={remove} className={styles.count}>
          {count}
        </div>
      )}
    </div>
  );
};

export default ControlItem;
