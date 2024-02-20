import { Order } from "@components/Order";

import styles from "./style.module.css";

interface OrderItemProps {
  order: Order;
  number: number;
}

const OrderItem = ({ order, number }: OrderItemProps) => {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>
        Заказ <strong>#{number}</strong>
      </h3>
      <div className={styles.body}>
        <div className={styles.customer}>
          <h4 className="customer__title">
            Инфо о заказчике:
          </h4>
          <ul className={styles.customerList}>
            <li className={styles.customerItem}>
              Имя: <span>{order.customer.name}</span>
            </li>
            <li className={styles.customerItem}>
              Email: <span>{order.customer.email}</span>
            </li>
            <li className={styles.customerItem}>
              Адрес: <span>{order.customer.address}</span>
            </li>
            <li className={styles.customerItem}>
              Телефон: <span>{order.customer.phone}</span>
            </li>
          </ul>
        </div>
        <div className="ingredients">
          <h4 className="ingredients__title">
            Ингредиенты
          </h4>
          <ul className="ingredients__list">
            {Object.keys(order.ingredients).map(
              (ingName) => {
                return (
                  <li
                    key={ingName}
                    className="ingredients__item"
                  >
                    {ingName}:{" "}
                    <span>
                      {order.ingredients[ingName]}
                    </span>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
