import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  foods: undefined,
  loading: false,
  food: undefined,
  error: "",
};
const getNewFoods = (id, foods) => {
  let foodList = [];

  foodList = foods.filter((food) => id !== food._id);

  return foodList;
};
const foodSlice = createSlice({
  name: "Foods",
  initialState,
  reducers: {
    foodRequest: (state) => {
      state.loading = true;
    },
    foodSuccess: (state, action) => {
      state.foods = action.payload.foods;
      state.loading = false;
    },
    addFoodSuccess: (state, action) => {
      state.foods.push(action.payload.food);
      state.loading = false;
    },
    deleteFoodSuccess: (state, action) => {
      state.foods = getNewFoods(action.payload, current(state.foods));
      state.loading = false;
    },
    getFoodByIdSuccess: (state, action) => {
      state.food = action.payload.food;
      state.loading = false;
    },
    foodFail: (state, action) => {
      state.foods = undefined;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  foodRequest,
  foodSuccess,
  foodFail,
  getFoodByIdSuccess,
  addFoodSuccess,
  deleteFoodSuccess,
} = foodSlice.actions;

export default foodSlice.reducer;
