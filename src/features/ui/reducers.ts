import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Category from "models/Category";


 type uiState = {
   category: Category | null;
   loading: boolean;
   error: string;
   success: string;
 };
const initialState: uiState = {
  category: null,
  loading: false,
  error: "",
  success: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        category: action.payload,
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setError: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        success: action.payload,
      };
    },
  },
});

export const { setLoading, setError, setSuccess, setCategory } = uiSlice.actions;

export default uiSlice.reducer;
