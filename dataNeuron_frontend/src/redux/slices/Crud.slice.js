import { createSlice } from "@reduxjs/toolkit";
import { AddData, GetData, UpdateData, count } from "./action";
const initialState = {
  loading: false,
  error: false,
  message: null,
  data: [],
  Apicounts: {},
};

const Data = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(AddData.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(AddData.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.message = "something wrong";
    });

    //GET DATA FROM API
    builder.addCase(GetData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(GetData.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.message = "something wrong";
    });

    // UPDATE DATA
    builder.addCase(UpdateData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(UpdateData.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.message = "something wrong";
    });

    //COUNT API DETAILS

    builder.addCase(count.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(count.fulfilled, (state, action) => {
      state.loading = false;
      state.Apicounts = action.payload;
    });
    builder.addCase(count.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.message = "something wrong";
    });
  },
});

export default Data.reducer;
