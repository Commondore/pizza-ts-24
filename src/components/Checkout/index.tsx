import styles from "./style.module.css";
import CheckoutSummary from "@components/Checkout/CheckoutSummary";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { transformIngs } from "@store/reducers/selectors";

export interface IIngs {
  [key: string]: number;
}

const Checkout = () => {
  const ings = useSelector(transformIngs);

  const navigate = useNavigate();

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
