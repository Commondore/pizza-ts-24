import Pizza from "@components/Pizza/Pizza";
import { useState } from "react";

import styles from "./style.module.css";
import Controls from "@components/Controls";

export interface IIngregient {
  name: string;
  count: number;
  price: number;
}

export interface IIngList {
  [key: string]: IIngregient;
}

const PizzaBuilder = () => {
  const [ings, setIngs] = useState<IIngList>({
    olives: { name: "Оливки", count: 1, price: 20 },
    cheese: { name: "Сыр", count: 1, price: 25 },
    sausage: { name: "Колбаса", count: 0, price: 50 },
    mushrooms: { name: "Грибы", count: 0, price: 40 },
  });

  const filtredIngredients = () => {
    return Object.keys(ings).filter((ingName) => {
      return ings[ingName].count > 0;
    });
  };

  return (
    <div className={styles.pizzaWrap}>
      <Pizza ings={filtredIngredients()} />
      <Controls ings={ings} />
    </div>
  );
};

export default PizzaBuilder;
