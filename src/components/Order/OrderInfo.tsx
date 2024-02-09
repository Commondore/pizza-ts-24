import { IIngList } from "@components/Pizza";
import Button from "@shared/UI/Button/Button";

import styles from "./style.module.css";

interface OrderInfoProps {
  ings: IIngList;
  price: number;
  cancel: () => void;
  continued: () => void;
}

const OrderInfo = ({
  ings,
  price,
  cancel,
  continued,
}: OrderInfoProps) => {
  const list = Object.keys(ings).map((ingName) => {
    return (
      <li key={ingName}>
        <span style={{ textTransform: "capitalize" }}>
          {ingName}:
        </span>
        <span
          style={{ color: "tomato", fontWeight: "bold" }}
        >
          {ings[ingName].count}
        </span>
      </li>
    );
  });

  return (
    <div className={styles.orderInfo}>
      <h3 className={styles.title}>Ваш заказ</h3>
      <p className={styles.desc}>
        Ваша пицца состоит из следующих ингридиентов
      </p>
      <ul className={styles.orderInfoList}>{list}</ul>
      <div className={styles.orderInfoPrice}>
        Цена заказа: <strong>{price}</strong> сом
      </div>
      <div className={styles.orderInfoActions}>
        <Button
          click={cancel}
          color={"danger"}
          type="button"
        >
          отмена
        </Button>
        <Button click={continued} color={"success"}>
          продолжить
        </Button>
      </div>
    </div>
  );
};

export default OrderInfo;
