import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Course from "models/Course";


type courseState = {
  courses: Course | null;
  loading: boolean;
};

const initialState: courseState = {
  courses: null,
  loading: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        courses: action.payload
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { setCourse, setLoading } = courseSlice.actions;

export default courseSlice.reducer;
