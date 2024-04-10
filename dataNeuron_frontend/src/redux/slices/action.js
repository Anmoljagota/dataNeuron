import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//API REQ TO ADD THE DATA

const AddData = createAsyncThunk("add/data", async (employedata) => {
  try {
    const data = await axios.post(`https://dataneuron-backend-3.onrender.com/add`, employedata);
    return data.data;
  } catch (err) {
    console.log(err, "err");
  }
});

const GetData = createAsyncThunk("get/data", async () => {
  try {
    const data = await axios.get(`https://dataneuron-backend-3.onrender.com`);
    return data.data;
  } catch (err) {
    console.log(err, "err");
  }
});

//API REQUEST TO UPDATE THE DATA
const UpdateData = createAsyncThunk("update/data", async ({ id, data }) => {
  try {
    const update = await axios.patch(
      `https://dataneuron-backend-3.onrender.com/update/${id}`,
      data
    );
    return update.data;
  } catch (err) {
    console.log(err, "err");
  }
});

//API REQ FOR GET THE DATA OF HOW MANY TIME ADDED OR UPDATED THE DATA
const count = createAsyncThunk("count/data", async () => {
  try {
    const countdata = await axios.get(`https://dataneuron-backend-3.onrender.com/count`);
    return countdata.data;
  } catch (err) {
    console.log(err, "err");
  }
});

export { AddData, GetData, UpdateData, count };
