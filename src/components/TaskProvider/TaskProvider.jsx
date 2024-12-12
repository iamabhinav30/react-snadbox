// Centralized state management
// Context and Reducer

import React, { createContext, useReducer } from "react";

// create a contet to hold task data and action
const TaskContext = createContext();
// Initial state for task list
const initialState = {
    tasks: []
}

// Reducer function to handle actions on the task list
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };

        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            }

        default:
            return state;
    }
}

// Context provider to wrap the app and share task status/actions
// context provider tat used Context API and useReducer to manage teh state of tasks
export const TaskProvider = ({ children }) => {
    // useReducer to manage task state and dispatch actions
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
            {/** Render the child components
                * Any componennt wrapped inside the TaskProvider can access and update the task list using useContext 
                - Eliminated the need to pass down props thought multiple levels (prop drilling)
                - Centralized the logic for adding and toggling the tasks
                */}
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => {
    const context = React.useContext(TaskContext);
    if (!context)
        throw new Error('useTasks must be used within taskProvider')

    return context;
};