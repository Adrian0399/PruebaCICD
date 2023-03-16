//Create redux slice and adding action to partners

import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

import destination from "images/bg-dummy-3.png";


import awardRedeemedIcon from 'assets/icons/award-redeemed.svg';
import awardGiftedIcon from 'assets/icons/award-gifted.svg';
import awardExpireIcon from 'assets/icons/award-expired.svg';
import awardCancelledIcon from 'assets/icons/award-cancelled.svg';

//Define enum for Award
export enum AwardType {
  redeemed = "redeemed",
  gifted = "gifted",
  expired = "expired",
  cancelled = "cancelled",
}

//create mock data for partners
const historyMock = [
  {
    id: 1,
    name: "Exclusive Room Rates",
    description: "ARIA",
    image: destination,
    award: AwardType.redeemed,
    awardText: 'Award Redeemed',
    awardIcon: awardRedeemedIcon
  },
  {
    id: 2,
    name: "Exclusive Room Rates",
    description: "ARIA",
    image: destination,
    award: AwardType.gifted,
    awardText: 'Award Gifted',
    awardIcon: awardGiftedIcon
  },
  {
    id: 3,
    name: "Exclusive Room Rates",
    description: "ARIA",
    image: destination,
    award: AwardType.expired,
    awardText: 'Award Expired',
    awardIcon: awardExpireIcon
  },
  {
    id: 4,
    name: "Exclusive Room Rates",
    description: "ARIA",
    image: destination,
    award: AwardType.cancelled,
    awardText: 'Award Cancelled',
    awardIcon: awardCancelledIcon
  },
];

const initialState: HistoriesState = {
  history: null,
  isLoading: false,
  error: null,
};

//Create type Partner

export type History = {
  id: number;
  name: string;
  description: string;
  image: string;
  award: AwardType;

  awardText: string;
  awardIcon: any;
};

export type HistoriesState = {
  history: History[] | null;
  isLoading: boolean;
  error: string | null;
};

//Create slice

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getHistorySuccess: (state, action: PayloadAction<History[]>) => {
      state.isLoading = false;
      state.history = action.payload;
    },
    getHistoryFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getHistorySuccess, getHistoryFailure } =
  historySlice.actions;

//Adding actions for slice to historySlice.ts with attempt to get data from API
export const getHistory = (retry: number = 0) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch(startLoading());
      dispatch(getHistorySuccess(historyMock));
    } catch (err: any) {
      dispatch(getHistoryFailure(err.toString()));
    }
};

export default historySlice.reducer;
