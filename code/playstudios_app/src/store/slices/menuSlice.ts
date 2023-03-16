// Create redux slice and adding action to user
//
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

const initialState: MenuState = {
  active: 0,
  isLoading: false,
  error: null,
};

export type MenuState = {
  active: number | null | undefined | 0;
  isLoading: boolean;
  error: string | null;
};

//Create slice

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getSuccess: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      state.active = action.payload;
    },
    getFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getSuccess, getFailure } = menuSlice.actions;

//Create action slice, set logged to true
export const setActiveMenu = (active: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(getSuccess(active));
  } catch (error: any) {
    dispatch(getFailure(error));
  }
};

export default menuSlice.reducer;
