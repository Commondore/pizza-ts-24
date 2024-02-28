import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "@store/reducers/order.reducer";
import pizzaReducer from "@store/reducers/pizza.reducer";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    order: orderReducer,
  },
});
