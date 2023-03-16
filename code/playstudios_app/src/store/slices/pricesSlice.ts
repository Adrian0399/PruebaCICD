//Create redux slice and adding action to prices

import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import texture1 from "assets/0-4k.svg";
//create mock data for prices
const pricesMock = [
  {
    id: 1,
    name: "0 - 4K",
    description: "Price 1 description",
    image: texture1,
    url: "https://www.google.com",
  },
  {
    id: 2,
    name: "0 - 4K",
    description: "Price 2 description",
    image: texture1,
    url: "https://www.google.com",
  },
  {
    id: 3,
    name: "0 - 4K",
    description: "Price 3 description",
    image: texture1,
    url: "https://www.google.com",
  },
  {
    id: 4,
    name: "0 - 4K",
    description: "Price 4 description",
    image: texture1,
    url: "https://www.google.com",
  },
  {
    id: 5,
    name: "0 - 4K",
    description: "Price 5 description",
    image: texture1,
    url: "https://www.google.com",
  },
];

const initialState: PricesState = {
  prices: null,
  isLoading: false,
  error: null,
};

//Create type Featured

export type Price = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
};

export type PricesState = {
  prices: Price[] | null;
  isLoading: boolean;
  error: string | null;
};

//Create slice

export const pricesSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getPriceSuccess: (state, action: PayloadAction<Price[]>) => {
      state.isLoading = false;
      state.prices = action.payload;
    },
    getPriceFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getPriceSuccess, getPriceFailure } =
  pricesSlice.actions;

//Adding actions for slice to pricesSlice.ts
export const getPrices = (retry: number = 0) => async (dispatch: Dispatch< any >) => {
    try {
      dispatch(startLoading());
      const featured = await getPricesAPi();
      dispatch(getPriceSuccess(featured));
    } catch (err: any) {
      if (retry > 2) {
        dispatch(getPriceFailure(err.toString()));
      } else {
        await delay(1000);
        dispatch(getPrices(retry + 1));
      }
    }
  };

//create function getPricesApi for axios request
export const getPricesAPi = async () => {
  //return mock data
  return pricesMock;

  //const response = await axios.get('/games/prices');
  //return response.data;
};

const delay = (ms : number) => new Promise((res) => setTimeout(res, ms));



/////////////////////////////////////////////////////////////// MOCK DATA ///////////////////////////////////////////////////////////////

export const getPricesMock = () => async (dispatch: Dispatch< any >) => {
  try {
    dispatch(startLoading());
    dispatch(getPriceSuccess(pricesMock));
  } catch (err: any) {
    dispatch(getPriceFailure(err.toString()));
  }
};

export default pricesSlice.reducer;
