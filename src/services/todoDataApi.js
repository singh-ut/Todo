import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoDataApi = createApi({
    reducerPath: "todoDataApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://todo-backend-mtln.onrender.com'}),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => 'api/todos',
            providesTags: ['Todos']
        }),
        getSingleTodo: builder.query({
            query: (id) => `api/todos/${id}`
        }),
        createTodo: builder.mutation({
            query: (newTodo) => ({
                url: 'api/todos',
                method: "POST",
                body: newTodo
            }),
            invalidatesTags: ["Todos"]
        }),
        updateTodo: builder.mutation({
            query: ({id, ...updatedTodo}) => ({
                url: `api/todos/${id}`,
                method: "PUT",
                body: updatedTodo
            }),
            invalidatesTags: ["Todos"]
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `api/todos/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Todos"]
        })
    })
})

export const {
    useGetAllTodosQuery,
    useGetSingleTodoQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = todoDataApi;