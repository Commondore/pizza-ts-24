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
    olives: { name: "Оливки", count: 0, price: 20 },
    cheese: { name: "Сыр", count: 0, price: 25 },
    sausage: { name: "Колбаса", count: 0, price: 50 },
    mushrooms: { name: "Грибы", count: 0, price: 40 },
  });

  const [total, setTotal] = useState(50);

  const filtredIngredients = () => {
    return Object.keys(ings).filter((ingName) => {
      return ings[ingName].count > 0;
    });
  };

  const addIngredient = (type: string) => {
    setIngs((ings) => {
      return {
        ...ings,
        [type]: {
          ...ings[type],
          count: ings[type].count + 1,
        },
      };
    });

    setTotal((total) => {
      return total + ings[type].price;
    });
  };

  const removeIngredient = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: string
  ) => {
    e.stopPropagation();
    setIngs((ings) => {
      return {
        ...ings,
        [type]: {
          ...ings[type],
          count: 0,
        },
      };
    });

    setTotal((total) => {
      return total - ings[type].price * ings[type].count;
    });
  };

  return (
    <div className={styles.pizzaWrap}>
      <Pizza ings={filtredIngredients()} />
      <Controls
        ings={ings}
        add={addIngredient}
        remove={removeIngredient}
        total={total}
      />
    </div>
  );
};

export default PizzaBuilder;
