import { useState } from "react";
import styles from "./style.module.css";
import CheckoutSummary from "@components/Checkout/CheckoutSummary";

export interface IIngs {
  [key: string]: number;
}

const Checkout = () => {
  const [ings, setIngs] = useState<IIngs>({
    cheese: 1,
    sausage: 1,
    olives: 0,
    mushrooms: 1,
  });
  const filtredIngredients = () => {
    return Object.keys(ings).filter((ingName) => {
      return ings[ingName] > 0;
    });
  };
  return (
    <div className={styles.checkout}>
      <CheckoutSummary ings={filtredIngredients()} />
    </div>
  );
};

export default Checkout;
