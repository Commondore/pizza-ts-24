import {
  IOrder,
  IOrders,
  UniqID,
} from "@interfaces/orders";
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

export const fetchOrderByID = (
  id: UniqID
): Promise<IOrder> => {
  return firebase.get(`orders/${id}.json`).json();
};

export const fetchOrderByCustomer = (name: string) => {
  return firebase
    .get(
      `orders.json?orderBy="customer/name"&equalTo="${name}"`
    )
    .json();
};
