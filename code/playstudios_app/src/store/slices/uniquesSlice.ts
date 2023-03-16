//Create redux slice and adding action to uniques

import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import emptyImage from 'assets/empty.webp';


import unique1 from "assets/images/carousel/unique1.jpg";
import unique2 from "assets/images/carousel/unique2.jpg";
import unique3 from "assets/images/carousel/unique3.jpg";
import unique4 from "assets/images/carousel/unique4.jpg";
import unique5 from "assets/images/carousel/unique5.jpg";

//create mock data for uniques
const uniquesMock = [
  {
    id: 1,
    name: "Uniquely Vegas",
    description: "Price 1 description",
    image: unique1,
    url: "https://www.google.com",
  },
  {
    id: 2,
    name: "The Park",
    description: "Price 2 description",
    image: unique2,
    url: "https://www.google.com",
  },
  {
    id: 3,
    name: "Price 3",
    description: "Price 3 description",
    image: unique3,
    url: "https://www.google.com",
  },
  {
    id: 4,
    name: "Price 4",
    description: "Price 4 description",
    image: unique4,
    url: "https://www.google.com",
  },
  {
    id: 5,
    name: "Price 5",
    description: "Price 5 description",
    image: unique5,
    url: "https://www.google.com",
  },
];

const initialState: UniquesState = {
  uniques: null,
  isLoading: false,
  error: null,
};

//Create type unique

export type Unique = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
};

export type UniquesState = {
  uniques: Unique[] | null;
  isLoading: boolean;
  error: string | null;
};

//Create slice

export const uniquesSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getUniqueSuccess: (state, action: PayloadAction<Unique[]>) => {
      state.isLoading = false;
      state.uniques = action.payload;
    },
    getUniqueFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getUniqueSuccess, getUniqueFailure } =
  uniquesSlice.actions;

//Adding actions for slice to pricesSlice.ts
export const getUniques = (retry: number = 0) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(startLoading());
      const featured = await getUniquesAPi();
      dispatch(getUniqueSuccess(featured));
    } catch (err: any) {
      if (retry > 2) {
        dispatch(getUniqueFailure(err.toString()));
      } else {
        await delay(1000);
        dispatch(getUniques(retry + 1));
      }
    }
  };

//create function getPricesApi for axios request
export const getUniquesAPi = async () => {
  //return mock data
  return uniquesMock;

  //const response = await axios.get('/games/prices');
  //return response.data;
};

const delay = ( ms: number ) => new Promise((res) => setTimeout(res, ms));


/////////////////////////////////////////////////////////////// MOCK DATA ///////////////////////////////////////////////////////////////

export const getUniquesMock = () => async (dispatch: Dispatch< any >) => {
  try {
    dispatch(startLoading());
    dispatch(getUniqueSuccess(uniquesMock));
  } catch (err: any) {
    dispatch(getUniqueFailure(err.toString()));
  }
};

export default uniquesSlice.reducer;
