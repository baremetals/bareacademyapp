import { createSelector } from "@reduxjs/toolkit";
import  { RootState }  from "../../app/rootReducer";


export const selectAuth = (state: RootState) => state.auth;

export const authenticatedUser = createSelector(selectAuth, (state) => state.authenticated); 


export const isLoading = createSelector(
  selectAuth,
  (state) => state.loading
);

export const isUser = createSelector(
  selectAuth,
  (state) => state
);