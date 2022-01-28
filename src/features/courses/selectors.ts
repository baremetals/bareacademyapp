import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";

export const selectCourse = (state: RootState) => state.courses;

export const theCourses = createSelector(selectCourse, (state) => state.courses);

export const loading = createSelector(selectCourse, (state) => state.loading);
