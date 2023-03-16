//Create redux slice and adding action to partners

import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

import emptyImageBottom from "assets/card-bottom.webp";
import { CardVariant, CardVariantType } from "src/components/cards/variants";

import partner1 from "assets/images/carousel/partner1.jpg";
import partner2 from "assets/images/carousel/partner2.jpg";
import partner3 from "assets/images/carousel/partner3.jpg";
import partner4 from "assets/images/carousel/partner4.jpg";
import partner5 from "assets/images/carousel/partner5.jpg";
import partner6 from "assets/images/carousel/partner6.jpg";

//create mock data for partners
const partnersMock = [
  {
    id: 1,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner1,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 2,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner2,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 3,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner3,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 4,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner4,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 5,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner5,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 6,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner6,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 7,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner1,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 8,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner2,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 9,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner3,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 10,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner4,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 11,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner5,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 12,
    name: "Partner 1",
    description: "Partner 1 description",
    image: partner6,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  }
];

/* const partnersMock = [
  {
    id: 200,
    name: "Exclusive Room Rates",
    description: "ARIA",
    image: destination,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.reward,
    coins: 3456789,
  },
  {
    id: 4,
    name: "Uniquely Vegas",
    description: "Partner 4 description",
    image: dummy1,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.collection,
  },
  {
    id: 2,
    name: "Casino",
    description: "201 Rewards",
    image: category,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.category,
  },
  {
    id: 2,
    name: "Las Vegas",
    description: "Entertainment Capital of the world",
    image: destination,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.destination,
  },
  {
    id: 200,
    name: "Tier 7",
    description: "New ARIA Resort & Casino Reward Purchase available!",
    image: emptyImage,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.tier,
  },
  {
    id: 200,
    name: "Available Now!",
    description: "New ARIA Resort & Casino Reward Purchase available!",
    image: emptyImage,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.available,
  },
  {
    id: 200,
    name: "Available Soon!",
    description: "New ARIA Resort & Casino Reward Purchase available!",
    image: emptyImage,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.availableSon,
  },
  {
    id: 100,
    name: "0 - 4K",
    description: "Partner 4 description",
    image: texture1,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.price,
  },
  {
    id: 1,
    name: "Partner 1",
    description: "Partner 1 description",
    image: emptyImage,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.partner,
  },
  {
    id: 2,
    name: "Partner 2",
    description: "Partner 2 description",
    image: category,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.category,
  },
  {
    id: 3,
    name: "Destination",
    description: "Partner 3 description",
    image: emptyImage,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.destination,
  },
  {
    id: 5,
    name: "Partner 5",
    description: "Partner 5 description",
    image: texture1,
    imageDesc: emptyImageBottom,
    url: "https://www.google.com",
    variant: CardVariant.price,
  },
]; */

const initialState: PartnersState = {
  partners: null,
  current: null,
  isLoading: false,
  error: null,
};

//Create type Partner

export type Partner = {
  id: number;
  name: string;
  description: string;
  image: string;
  imageDesc: string;
  url: string;
  variant?: CardVariantType | undefined;
  coins?: number;
};

export type PartnersState = {
  partners: Partner[] | null;
  current: Partner | null | undefined;
  isLoading: boolean;
  error: string | null;
};

//Create slice

export const parnertsSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getPartnerSuccess: (state, action: PayloadAction<Partner[]>) => {
      state.isLoading = false;
      state.partners = action.payload;
    },

    assignCurrent: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      const current = (state?.partners || [] as Partner[]).find((partner) => partner.id === action.payload);
      state.current = current;
    },

    getPartnerFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getPartnerSuccess, getPartnerFailure, assignCurrent } = parnertsSlice.actions;

//Adding actions for slice to featuredSlice.ts
export const getPartners = (retry: number = 0) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(startLoading());
    const partners = await getPartnersApi();
    dispatch(getPartnerSuccess(partners));
  } catch (err: any) {
    if (retry > 2) {
      dispatch(getPartnerFailure(err.toString()));
    } else {
      await delay(1000);
      dispatch(getPartners(retry + 1));
    }
  }
};

//create function getPartnersApi for axios request
export const getPartnersApi = async () => {
  //return mock data
  return partnersMock;

  //const response = await axios.get('/games/partners');
  //return response.data;
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));


//Add action select current
export const selectPartner = (id: number) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(startLoading());
    dispatch(assignCurrent(id));
  } catch (err: any) {
    dispatch(getPartnerFailure(err.toString()));
  }
};

/////////////////////////////////////////////////////////////// MOCK DATA ///////////////////////////////////////////////////////////////

export const getPartnersMock =
  (retry: number = 0) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch(startLoading());
      dispatch(getPartnerSuccess(partnersMock));
    } catch (err: any) {
      dispatch(getPartnerFailure(err.toString()));
    }
  };

export default parnertsSlice.reducer;
