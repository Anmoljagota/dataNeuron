import { configureStore } from "@reduxjs/toolkit";
import Data from "./slices/Crud.slice";
const store = configureStore({
  reducer: {
    Data,
  },
});

export default store;
