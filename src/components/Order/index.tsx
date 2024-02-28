import {
  fetchOrderByCustomer,
  fetchOrders,
} from "@api/request";
import OrderItem from "@components/Order/OrderItem";
import { UniqID } from "@interfaces/orders";
import { Customer, Ingredients } from "@interfaces/request";
import Loader from "@shared/UI/Loader/Loader";
import { useEffect, useState } from "react";

import styles from "./style.module.css";

export interface Order {
  id: UniqID;
  ingredients: Ingredients;
  customer: Customer;
}

const Orders = () => {
  // [{id: UniqID, customer, ingredient}]
  const [orders, setOrders] = useState<Order[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders()
      .then((data) => {
        setOrders(() => {
          return Object.keys(data).map((key) => {
            return {
              id: key,
              ingredients: data[key].ingredients,
              customer: data[key].customer,
            };
          });
        });
      })
      .finally(() => {
        setLoading(false);
      });

    // fetchOrderByID("-Nr-5jLsRxZm8JlVU2NF").then((order) => {
    //   console.log(order);
    // });
    fetchOrderByCustomer("Вопольский Виктор").then(
      (data) => {
        console.log(data);
      }
    );
  }, []);

  if (loading) return <Loader />;

  return (
    <ul className={styles.list}>
      {orders?.map((order, index) => {
        return (
          <OrderItem
            key={order.id}
            number={index + 1}
            order={order}
          />
        );
      })}
    </ul>
  );
};

export default Orders;
