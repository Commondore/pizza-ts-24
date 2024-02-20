import { IOrderRequest } from "@interfaces/request";

export interface IOrder extends IOrderRequest {}

export interface IOrders {
  [key: UniqID]: IOrder;
}

export type UniqID = string;
