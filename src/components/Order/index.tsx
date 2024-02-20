import { fetchOrders } from "@api/request";
import { useEffect } from "react";

const Orders = () => {
  useEffect(() => {
    fetchOrders().then((data) => {
      console.log(data);
    });
  }, []);
  return <div>Orders</div>;
};

export default Orders;
