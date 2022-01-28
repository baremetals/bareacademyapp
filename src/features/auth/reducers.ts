import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "models/User";

const isBrowser = typeof window !== "undefined";

const initialState: AuthState = {
  user: null,
  // me: {},
  authenticated: isBrowser && !!localStorage.getItem("maguyvathegreat"),
  loading: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    signOutUser: (state) => {
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false,
      };
    },
  },
});

export const { setUser, setLoading, signOutUser } =
  authSlice.actions;

export default authSlice.reducer;