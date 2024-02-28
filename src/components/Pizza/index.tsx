import Pizza from "@components/Pizza/Pizza";
import { useState } from "react";

import styles from "./style.module.css";
import Controls from "@components/Controls";
import Modal from "@shared/UI/Modal/Modal";
import OrderInfo from "@components/Order/OrderInfo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import {
  addIng,
  removeIng,
} from "@store/reducers/pizza.reducer";

const PizzaBuilder = () => {
  const { ings, total } = useSelector(
    (store: RootState) => store.pizza
  );
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const filtredIngredients = () => {
    return Object.keys(ings).filter((ingName) => {
      return ings[ingName].count > 0;
    });
  };

  const addIngredient = (type: string) => {
    dispatch(addIng(type));
  };

  const removeIngredient = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: string
  ) => {
    e.stopPropagation();
    dispatch(removeIng(type));
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
    navigate("/checkout");
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
