export interface IOrderRequest {
  ingredients: Ingredients;
  customer: Customer;
}

interface Ingredients {
  [key: string]: number;
}

interface Customer {
  name: string;
  email: string;
  address: string;
  phone: string;
}
