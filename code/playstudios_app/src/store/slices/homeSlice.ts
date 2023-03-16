import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "src/utils/axios";

import { delay } from "src/utils/general";
import { homeMock } from "../mocks/home";

//create mock data for featured games

const initialState: HomeState = {
  Meta: null,
  Lanes: [],
  Message: null,
  ErrorMessage: null,
  isLoading : false,
  cache : false,
  error : null
};

export type HomeState = {
  Meta: Meta | null;
  Lanes: Lane[];
  Message: string | null;
  ErrorMessage: string | null;
  isLoading : boolean;
  cache : boolean;
  error : string | null;
};

export type Meta = {
  Order: number;
  Type: string;
  Featured: boolean;
  Title: string;
  Description: string | null;
  ImageURL: string | null;
  HeroImageURL: string | null;
  _id: string | null;
};

export type Lane = {
  Meta: Meta;
  Awards: Award[] | null;
  Sections: Section[] | null;
};

export type Award = {
  OfferID: number | null;
  TypeID: number | null;
  TypeSortOrder:  number | null;
  PartnerId: number | null;
  PropertyId: number | null;
  PartnerName: string;
  Title: string;
  SubTitle: string | null;
  SubTitle2: string | null;
  SnipeText: string;
  SnipeCategory: string | null;
  ImageURL : string,
  Featured: boolean | null,
  Quantity: number | null,
  Price: number | null,
  LocationName: string | null,
  Duration: number | null,
  PlayerLimit: number | null,
  UnlockLevel: number | null,
  ExpireTime: string | null,
  RequiredInfo: {
    Address: boolean | null,
    Email: boolean | null,
  } | null,
  PriceOverride: number | null,
  OutletName: string | null,
  PropertyName: string | null,
  DestinationId: number | null,
  CollectionId: number | null,
  LoyaltyProgramName: string | null,
  IgnorePartnerRedemptionRules: boolean | null,
  CanShowToUnqualified: boolean | null,
  MinVipTier: number | null,
  RedemptionType: string | null,
  ForwardLink: string | null,
  GalleryImageURL: string | null,
};

export type Section = {
  ID: string;
  Type: string;
  Title: string;
  SubTitle: string;
  LogoImageURL: string;
  CellImageURL: string;
};

//Create slice

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getSuccess: (state, action: PayloadAction<HomeState>) => {
      state.isLoading = false;
      state.cache = true;

      //state desctructuring to get data from API
      const { Meta, Lanes, Message, ErrorMessage } = action.payload;
      state.Meta = Meta;
      state.Lanes = Lanes;
      state.Message = Message;
      state.ErrorMessage = ErrorMessage;
    },
    invalidateCache: (state) => {
      state.isLoading = false;
      state.cache = false;
    },
    getFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getSuccess, getFailure, invalidateCache } = homeSlice.actions;

//Addign action get home data with retry
export const getHome = (retry: number = 0) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(startLoading());
    const home = await getHomeApi();
    dispatch(getSuccess(home));
  } catch (err: any) {
    if (retry > 2) {
      //dispatch(getFailure(err.toString()));
      dispatch(getSuccess(homeMock as HomeState));
    } else {
      await delay(1000);
      dispatch(getHome(retry + 1));
    }
  }
};

//define getHomeApi
const getHomeApi = async () => {
  const response = await axiosInstance.post("rewards/home");
  return response.data;
};


//Adding actions for slice, invalidate cache
export const cleanCache = () => async (dispatch: Dispatch<any>) => {
  dispatch(invalidateCache());
};


export default homeSlice.reducer;
