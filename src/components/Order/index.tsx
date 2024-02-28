import OrderItem from "@components/Order/OrderItem";
import Loader from "@shared/UI/Loader/Loader";
import { useEffect } from "react";

import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store";
import {
  getOrderByCustomer,
  getOrders,
} from "@store/reducers/order.reducer";

const Orders = () => {
  const { orders, loading } = useSelector(
    (store: RootState) => store.order
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOrders());
    dispatch(getOrderByCustomer("Alex"));
  }, [dispatch]);

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
