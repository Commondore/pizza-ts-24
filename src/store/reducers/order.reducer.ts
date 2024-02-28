import {
  fetchOrderByCustomer,
  fetchOrders,
} from "@api/request";
import { IOrders, UniqID } from "@interfaces/orders";
import { Customer, Ingredients } from "@interfaces/request";
import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export interface Order {
  id: UniqID;
  ingredients: Ingredients;
  customer: Customer;
}

interface orderStateType {
  orders: Order[];
  loading: boolean;
  errors: any;
}

export const getOrders = createAsyncThunk<IOrders>(
  "fetch/orders",
  async (_, { rejectWithValue }) => {
    try {
      const orders = await fetchOrders();

      if (!orders) {
        throw new Error("Ошибка запроса");
      }
      return orders;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getOrderByCustomer = createAsyncThunk(
  "order/customer",
  async (name: string, { rejectWithValue }) => {
    try {
      const order = await fetchOrderByCustomer(name);
      if (!order) {
        throw new Error("Заказа нет");
      }
      return order;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState: orderStateType = {
  orders: [],
  loading: true,
  errors: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });

    builder.addCase(
      getOrders.fulfilled,
      (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.orders = Object.keys(action.payload).map(
            (uniqID) => {
              return {
                id: uniqID,
                customer: action.payload[uniqID].customer,
                ingredients:
                  action.payload[uniqID].ingredients,
              };
            }
          );
        }
      }
    );

    builder.addCase(
      getOrderByCustomer.fulfilled,
      (state, action) => {
        console.log(action);
      }
    );
  },
});

export default orderSlice.reducer;
