//Create redux slice and adding action to featured

import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import emptyImage from "assets/empty.webp";


import feature1 from "assets/images/carousel/feature1.jpg";
import feature2 from "assets/images/carousel/feature2.jpg";
import feature3 from "assets/images/carousel/feature3.jpg";
import feature4 from "assets/images/carousel/feature4.jpg";

//create mock data for featured games
const featuredMock = [
  {
    id: 1,
    name: "Hydrating Foot Paraffin",
    description:"Seasonal coffee roast crema, strong pumpkin spice con panna saucer turkish roast.",
    image: feature4,
    url: "https://www.google.com",
    featured: true,
    ribbon: "4 LEFT TODAY",
    coins: 3456789,
  },
  {
    id: 2,
    name: "Featured 2",
    description: "Featured 2 description",
    image: feature2,
    url: "https://www.google.com",
    featured: true,
    ribbon: null,
    coins: 3456789,
  },
  {
    id: 3,
    name: "Featured 3",
    description: "Featured 3 description",
    image: feature3,
    url: "https://www.google.com",
    featured: true,
    ribbon: null,
    coins: 3456789,
  },
  {
    id: 4,
    name: "Featured 4",
    description: "Featured 4 description",
    image: feature1,
    url: "https://www.google.com",
    featured: true,
    ribbon: "ribbon",
    coins: 3456789,
  },
  {
    id: 5,
    name: "Featured 5",
    description: "Featured 5 description",
    image: feature4,
    url: "https://www.google.com",
    featured: true,
    ribbon: "ribbon",
    coins: 3456789,
  },
  
];

const initialState: FeaturedState = {
  featureds: null,
  current: null,
  isLoading: false,
  cache: false,
  error: null,
};

//Create type Featured

export type Featured = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  featured: boolean;
  ribbon: string | null;
  coins: number | null;
};

export type FeaturedState = {
  featureds: Featured[] | null;
  current: Featured | null | undefined;
  isLoading: boolean;
  cache: boolean;
  error: string | null;
};

//Create slice

export const featuredSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getFeaturedSuccess: (state, action: PayloadAction<Featured[]>) => {
      state.isLoading = false;
      state.cache = true;
      state.featureds = action.payload;
    },
    assignCurrent: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      const current = (state?.featureds || [] as Featured[]).find((featured) => featured.id === action.payload);
      state.current = current;
    },

    invalidateCache: (state) => {
      state.isLoading = false;
      state.cache = false;
    },
    getFeaturedFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getFeaturedSuccess, assignCurrent, getFeaturedFailure, invalidateCache } = featuredSlice.actions;

//Adding actions for slice
export const getFeatured =(retry: number = 0) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(startLoading());
    const featureds = await getFeaturedsApi();
    //dispatch(getFeaturedSuccess(featuredMock));
  } catch (err: any) {
    if (retry > 2) {
      dispatch(getFeaturedSuccess(featuredMock));
      //dispatch(getFeaturedFailure(err.toString()));
    } else {
      await delay(1000);
      dispatch(getFeatured(retry + 1));
    }
  }
};

//Add action select feature current
export const selectFeatured = (id: number) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(startLoading());
    dispatch(assignCurrent(id));
  } catch (err: any) {
    dispatch(getFeaturedFailure(err.toString()));
  }
};


//Adding actions for slice, invalidate cache
export const cleanCache = () => async (dispatch: Dispatch<any>) => {
  dispatch(invalidateCache());
};

//create function getFeaturedGames for axios request
export const getFeaturedsApi = async () => {
  //return mock data
  //return featuredMock;

  const response = await axios.get("/games/featured");
  return response.data;
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

//Mocks actions
export const getFeaturedMock = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(startLoading());
    dispatch(getFeaturedSuccess(featuredMock));
  } catch (err: any) {
    dispatch(getFeaturedFailure(err.toString()));
  }
};

export default featuredSlice.reducer;
