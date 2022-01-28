import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";

export const selectUI= (state: RootState) => state.ui;

export const stateMsg = createSelector(selectUI, (state) => state.error);

export const successMsg = createSelector(selectUI, (state) => state.success);

export const isLoading = createSelector(selectUI, (state) => state.loading);

export const getCategories = createSelector(selectUI, (state) => state);
