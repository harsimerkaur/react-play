import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["onion", "tomato"],
  gluten: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    addToppings: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
  },
});

console.log("pizzaSlice.actions", pizzaSlice.actions);
export const { toggleGluten, addToppings } = pizzaSlice.actions;

export default pizzaSlice.reducer;
