"use client";
import { RegistrationSteps_Reducer } from "@/store/reducers/RegistrationSteps";
import { RegistrationInformation_Reducer } from "@/store/reducers/RegistrationInformation";
import { Loader_Reducer } from "@/store/reducers/Loader";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const allReducers = combineReducers({
  RegistrationSteps: RegistrationSteps_Reducer,
  RegistrationInformation: RegistrationInformation_Reducer,
  Loader: Loader_Reducer,
});

const store = configureStore({
  reducer: allReducers,
  devTools: true,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
