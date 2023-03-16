// Create redux slice and adding action to user
//
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import controllerIcon from 'assets/gamepad_3.svg';
import axiosInstance from "src/utils/axios";
import { delay } from "src/utils/general";
import { userMock } from "../mocks/user";



const initialState: UserState = {
  user: {
    id: 1,
    name: "Edwin hernandez",
    lastName: "Doe",
    phone: "phone",
    email: "mail",
    coins: 764899889898,
    gamme: {
      id: 1,
      name: "Gamme 1",
      icon: controllerIcon,
    },
    theme: {
      background: "background",
      pulse: "pulse",
      pulseShadow: "pulseShadow",
    },
    logged: false,
  },
  isLoading: false,
  isEdited: false,
  error: null,
};

//Create type User

export type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  coins: number;
  gamme: Gamme;
  theme: Theme;
  logged: boolean | false;
};

export type Gamme = {
  id: number;
  name: string;
  icon: string;
};

export type Theme = {
  background: string;
  pulse: string;
  pulseShadow: string;
};

export type UserState = {
  user: User;
  isLoading: boolean;
  error: string | null;
  isEdited: boolean;
};

//Create slice

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = {...state.user, ...action.payload}
      state.isEdited = false;
    },
    setEdited: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.isEdited = action.payload;
    },
    getFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, getSuccess, getFailure, setEdited } = userSlice.actions;


//Create action slice, set logged to true
export const login = (user: User) => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(getSuccess(user));
  } catch (error : any) {
    dispatch(getFailure(error));
  }
};

//Create action get user data with retry
export const getUser = (retry: number = 0) => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoading());
    const user = await getUserApi();
    dispatch(getSuccess(user));
  } catch (err: any) {
    if (retry > 2) {
      dispatch(getSuccess(userMock));
      //dispatch(getFailure(err.toString()));
    } else {
      await delay(1000);
      dispatch(getUser(retry + 1) as any);
    }
  }
};

//define getUserApi for axios
export const getUserApi = async () => {
  const user = await axiosInstance.get("/users/1");
  return user.data;
};

//Add action setEdittedUser
export const setEdittedUser = (edited: boolean) => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(setEdited(edited));
  } catch (error : any) {
    dispatch(getFailure(error));
  }
};

//Add action updateUser with retry
export const updateUser = (user: User, retry: number = 0) => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoading());
    const userUpdated = await updateUserApi(user);
    dispatch(getSuccess(userUpdated));
  } catch (err: any) {
    if (retry > 2) {
      dispatch(getFailure(err.toString()));
    } else {
      await delay(1000);
      dispatch(updateUser(user, retry + 1) as any);
    }
  }
};

//define updateUserApi for axios
export const updateUserApi = async (user: User) => {
  //const userUpdated = await axiosInstance.put("/users/1", user);
  //return userUpdated.data;
  return user;
};


export default userSlice.reducer;
