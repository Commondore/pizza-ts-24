import { IOrders } from "@interfaces/orders";
import { IOrderRequest } from "@interfaces/request";
import ky from "ky";

const firebase = ky.create({
  prefixUrl: import.meta.env.VITE_FIREBASE,
});

export const postOrder = (order: IOrderRequest) => {
  return firebase.post("orders.json", { json: order });
};

export const fetchOrders = (): Promise<IOrders> => {
  return firebase.get("orders.json").json();
};
