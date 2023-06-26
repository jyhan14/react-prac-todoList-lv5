import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todoModule from "../modules/todo";

const rootReducer = combineReducers({
  todoReducer: todoModule.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof rootReducer>;
