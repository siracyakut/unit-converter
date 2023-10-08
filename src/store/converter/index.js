import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "rem",
  pxValue: 10,
  remValue: 0,
  effect: false,
  rootSize: 16,
};

const converter = createSlice({
  name: "converter",
  initialState,
  reducers: {
    _setMode: (state, action) => {
      state.mode = action.payload;
    },
    _setPx: (state, action) => {
      state.pxValue = action.payload;
    },
    _setRem: (state, action) => {
      state.remValue = action.payload;
    },
    _setEffect: (state, action) => {
      state.effect = action.payload;
    },
    _setRootSize: (state, action) => {
      state.rootSize = action.payload;
    },
  },
});

export const { _setMode, _setPx, _setRem, _setEffect, _setRootSize } =
  converter.actions;
export default converter.reducer;
