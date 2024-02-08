import styles from "./style.module.css";

interface TotalPriceProps {
  total: number;
}

const TotalPrice = ({ total }: TotalPriceProps) => {
  return (
    <div className={styles.pizzaPrice}>
      Общая стоимость: <span>{total} сом</span>
    </div>
  );
};

export default TotalPrice;
