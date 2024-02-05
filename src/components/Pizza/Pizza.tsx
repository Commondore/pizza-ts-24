import Ingredient from "@components/Pizza/Ingredient";

import styles from "./style.module.css";

interface PizzaProps {
  ings: string[];
}

const Pizza = ({ ings }: PizzaProps) => {
  let list: React.ReactNode | React.ReactNode[] = (
    <h1 className={styles.title}>Добавьте ингредиент</h1>
  );

  if (ings.length) {
    list = ings.map((ingName) => <Ingredient key={ingName} type={ingName} />);
  }
  return <div className={styles.pizza}>{list}</div>;
};

export default Pizza;
