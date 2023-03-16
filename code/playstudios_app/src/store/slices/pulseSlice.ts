//Create redux slice and adding action to Categories

import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

const initialState: PulsesState = {
  pulses: [],
};

//Create type Category

export type Pulse = {
  id: string;
  color?: string | null;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type PulsesState = {
  pulses: Pulse[];
};

//Create slice

export const pulseSlice = createSlice({
  name: "pulses",
  initialState,
  reducers: {
    //add pulse to state
    addPulse: (state, action: PayloadAction<Pulse>) => {
      state.pulses?.push(action.payload);
    },

    //remove pulse from state and return new state
    removePulse: (state, action: PayloadAction<Pulse>) => {
      return {
        ...state,
        pulses: state.pulses?.filter((pulse) => pulse.id !== action.payload.id),
      };
    },
  },
});

export const { addPulse, removePulse } = pulseSlice.actions;

//Adding typescript actions for slice to pulseSlice.ts return pulses
export const pushPulse = (pulse: Pulse) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(addPulse(pulse));
  } catch (err: any) {
    console.log(err);
  }
};

//Adding typescript removePulse for slice to pulseSlice.ts return pulses
export const removePulseAction =
  (pulse: Pulse) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(removePulse(pulse));
    } catch (err: any) {
      console.log(err);
    }
  };

export default pulseSlice.reducer;
