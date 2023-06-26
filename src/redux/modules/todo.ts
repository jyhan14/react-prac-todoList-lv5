import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types";


interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: [
    {
      id: "",
      title: "",
      content: "",
      isDone:false,
    },
  ],
};

const todoModule = createSlice({
  name: "todoModule",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export default todoModule;
