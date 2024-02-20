import { useEffect, useState } from "react";
import styles from "./style.module.css";
import CheckoutSummary from "@components/Checkout/CheckoutSummary";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export interface IIngs {
  [key: string]: number;
}

const Checkout = () => {
  const [ings, setIngs] = useState<IIngs>({
    cheese: 0,
    sausage: 0,
    olives: 0,
    mushrooms: 0,
  });
  const [params] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    setIngs((ings) => {
      const currentIngs: IIngs = {};

      for (const [ingName, count] of params.entries()) {
        currentIngs[ingName] = parseInt(count);
      }

      return {
        ...ings,
        ...currentIngs,
      };
    });

    // [['sausage', '1'], ['cheese', '2']]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancelOrder = () => navigate("/");

  const continueOrder = () =>
    navigate("/checkout/contact-data");

  return (
    <div className={styles.checkout}>
      <CheckoutSummary
        ings={ings}
        cancel={cancelOrder}
        continued={continueOrder}
      />
    </div>
  );
};

export default Checkout;
