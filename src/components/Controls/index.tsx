import { IIngList } from "@components/Pizza";
import TotalPrice from "@components/Controls/TotalPrice";
import ConstrolsList from "@components/Controls/ConstrolsList";

import styles from "./style.module.css";

interface ControlsProps {
  ings: IIngList;
  add: (type: string) => void;
  remove: (e: any, type: string) => void;
  total: number;
  purchasable: boolean;
  purchasing: () => void;
}

const Controls = ({
  ings,
  add,
  remove,
  total,
  purchasable,
  purchasing,
}: ControlsProps) => {
  return (
    <div>
      <h1 className={styles.title}>Выберите ингредиент</h1>
      <ConstrolsList
        ings={ings}
        add={add}
        remove={remove}
      />
      <TotalPrice total={total} />

      <div className={styles.pizzaOrder}>
        <button
          className={styles.pizzaOrderBtn}
          disabled={!purchasable}
          onClick={purchasing}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default Controls;
