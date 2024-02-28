import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

export interface IIngregient {
  name: string;
  count: number;
  price: number;
}

export interface IIngList {
  [key: string]: IIngregient;
}

interface pizzaStateType {
  ings: IIngList;
  total: number;
}

const initialState: pizzaStateType = {
  ings: {
    olives: { name: "Оливки", count: 0, price: 20 },
    cheese: { name: "Сыр", count: 0, price: 25 },
    sausage: { name: "Колбаса", count: 0, price: 50 },
    mushrooms: { name: "Грибы", count: 0, price: 40 },
  },
  total: 50,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addIng: (state, action: PayloadAction<string>) => {
      const currentIng = state.ings[action.payload];
      currentIng.count++;
      state.total += currentIng.price;
    },
    removeIng: (state, action: PayloadAction<string>) => {
      const currentIng = state.ings[action.payload];
      state.total -= currentIng.price * currentIng.count;
      currentIng.count = 0;
    },
  },
});

export const { addIng, removeIng } = pizzaSlice.actions;

export default pizzaSlice.reducer;
