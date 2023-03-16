//Create redux slice and adding action to Categories

import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import emptyImage from 'assets/empty.webp';


import category1 from "assets/images/carousel/category1.jpg";
import category2 from "assets/images/carousel/category2.jpg";
import category3 from "assets/images/carousel/category3.jpg";
import category4 from "assets/images/carousel/category4.webp";
import category5 from "assets/images/carousel/category5.webp";


//create mock data for categories

const categoriesMock = [
  {
    id: 1,
    name: "Category 1",
    description: "201 Rewards",
    image: category1,
    url: "https://www.google.com",
  },
  {
    id: 2,
    name: "Category 2",
    description: "201 Rewards",
    image: category2,
    url: "https://www.google.com",
  },
  {
    id: 3,
    name: "Category 3",
    description: "201 Rewards",
    image: category3,
    url: "https://www.google.com",
  },
  {
    id: 4,
    name: "Category 4",
    description: "201 Rewards",
    image: category4,
    url: "https://www.google.com",
  },
  {
    id: 5,
    name: "Category 5",
    description: "201 Rewards",
    image: category5,
    url: "https://www.google.com",
  },
];

const initialState: CategoriesState = {
  categories: null,
  current: null,
  isLoading: false,
  error: null,
};

//Create type Category

export type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
};

export type CategoriesState = {
  categories: Category[] | null;
  current: Category | null | undefined;
  isLoading: boolean;
  error: string | null;
};

//Create slice

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    assignCurrent: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      const current = (state?.categories || [] as Category[]).find((partner) => partner.id === action.payload);
      state.current = current;
    },
    getCategoriesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getCategoriesSuccess, getCategoriesFailure, assignCurrent } = categoriesSlice.actions;

//Adding typescript actions for slice to featuredSlice.ts assignable to parameter of type 'AnyAction'
export const getCategories = (retry: number = 0) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(startLoading());
        const partners = await getCategoriesApi();
        dispatch(getCategoriesSuccess(partners));
    } catch (err: any) {
        if (retry > 2) {
        dispatch(getCategoriesFailure(err.toString()));
        } else {
        await delay(1000);
        dispatch(getCategories(retry + 1));
        }
    }
};


//create function getPartnersApi for axios request
export const getCategoriesApi = async () => {
  //return mock data
  return categoriesMock;

  //const response = await axios.get('/games/partners');
  //return response.data;
};


//Add action select current
export const selectCategory = (id: number) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(startLoading());
    dispatch(assignCurrent(id));
  } catch (err: any) {
    dispatch(getCategoriesFailure(err.toString()));
  }
};


const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));


//////////////////////////////////////////////////////////////////////////////////////


export const getCategoriesMock = () => async (dispatch: Dispatch<any>) => {
  try {
      dispatch(startLoading());
      dispatch(getCategoriesSuccess(categoriesMock));
  } catch (err: any) {
      dispatch(getCategoriesFailure(err.toString()));
  }
};


export default categoriesSlice.reducer;
