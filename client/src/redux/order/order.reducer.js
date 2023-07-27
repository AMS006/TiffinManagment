import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  orders: undefined,
  userOrders: undefined,
  loading: false,
  error: "",
};
const updateOrders = (orders, updatedOrder) => {
  const newOrders = orders.map((order) =>
    order._id === updatedOrder._id ? updatedOrder : order
  );
  return newOrders;
};

const orderSlice = createSlice({
  name: "Foods",
  initialState,
  reducers: {
    orderRequest: (state) => {
      state.loading = true;
    },
    orderSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload.orders;
    },
    updateOrderSuccess: (state, action) => {
      state.loading = false;
      state.orders = updateOrders(
        current(state.orders),
        action.payload.updatedOrder
      );
    },
    updateUserOrderSuccess: (state, action) => {
      state.loading = false;
      state.userOrders = updateOrders(
        current(state.userOrders),
        action.payload.updatedOrder
      );
    },
    addOrderSuccess: (state, action) => {
      state.loading = false;
    },
    userOrderSuccess: (state, action) => {
      state.loading = false;
      state.userOrders = action.payload.orders;
    },
    orderFail: (state, action) => {
      state.orders = undefined;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  orderRequest,
  orderFail,
  orderSuccess,
  addOrderSuccess,
  userOrderSuccess,
  updateOrderSuccess,
  updateUserOrderSuccess,
} = orderSlice.actions;

export default orderSlice.reducer;
