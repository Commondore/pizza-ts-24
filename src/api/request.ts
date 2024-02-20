import { IOrderRequest } from "@interfaces/request";
import ky from "ky";

const firebase = ky.create({
  prefixUrl: import.meta.env.VITE_FIREBASE,
});

export const postOrder = (order: IOrderRequest) => {
  return firebase.post("orders.json", { json: order });
};
