import { configureStore } from "@reduxjs/toolkit";
import editReducer from "../features/todo/todoSlice.js"
import { todoDataApi } from "../services/todoDataApi.js";

export const store = configureStore({
    reducer: {
        edit: editReducer,
        [todoDataApi.reducerPath]: todoDataApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoDataApi.middleware)
});