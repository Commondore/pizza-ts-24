import Pizza from "@components/Pizza/Pizza";
import { useState } from "react";

import styles from "./style.module.css";
import Controls from "@components/Controls";
import Modal from "@shared/UI/Modal/Modal";
import OrderInfo from "@components/Order/OrderInfo";
import {
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const PizzaBuilder = () => {
  const { ings, total } = useSelector(
    (store: RootState) => store.pizza
  );

  const [purchasing, setPurchasing] = useState(false);

  const navigate = useNavigate();

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

  const isPurchasable = () => {
    const count = Object.keys(ings).reduce(
      (acc, ingName) => {
        return acc + ings[ingName].count;
      },
      0
    );

    return count > 0;
  };

  const orderCancelled = () => setPurchasing(false);

  const orderContinued = () => {
    const params = Object.keys(ings).reduce(
      (acc: any, ingName) => {
        if (ings[ingName].count > 0) {
          acc[ingName] = ings[ingName].count;
        }
        return acc;
      },
      {}
    );

    navigate({
      pathname: "/checkout",
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div className={styles.pizzaWrap}>
      <Modal isVisible={purchasing} close={orderCancelled}>
        <OrderInfo
          ings={ings}
          price={total}
          cancel={orderCancelled}
          continued={orderContinued}
        />
      </Modal>
      <Pizza ings={filtredIngredients()} />
      <Controls
        ings={ings}
        add={addIngredient}
        remove={removeIngredient}
        total={total}
        purchasable={isPurchasable()}
        purchasing={() => setPurchasing(true)}
      />
    </div>
  );
};

export default PizzaBuilder;
