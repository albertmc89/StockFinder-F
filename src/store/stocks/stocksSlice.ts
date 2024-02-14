import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StocksState } from "../types";
import { Stock } from "../../types";

const initialStocksState: StocksState = {
  stocks: [],
};

const stocksSlice = createSlice({
  name: "stocks",
  initialState: initialStocksState,
  reducers: {
    loadStocks: (
      currentStocksState,
      action: PayloadAction<Stock[]>,
    ): StocksState => ({
      ...currentStocksState,
      stocks: action.payload,
    }),
  },
});

export const stocksReducer = stocksSlice.reducer;
export const { loadStocks: loadStocksActionCreator } = stocksSlice.actions;
