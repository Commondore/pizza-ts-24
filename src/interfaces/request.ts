export interface IOrderRequest {
  ingredients: Ingredients;
  customer: Customer;
}

export interface Ingredients {
  [key: string]: number;
}

export interface Customer {
  name: string;
  email: string;
  address: string;
  phone: string;
}
