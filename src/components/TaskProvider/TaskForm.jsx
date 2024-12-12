import { useCallback, useRef } from "react";
import { useTasks } from "./TaskProvider"

const TaskForm = () => {
    // acccess the dispatch function from taskContext
    const { dispatch } = useTasks();

    // use useRef to directly access the input DOM element without React re-rendering it
    // - to simplify input handling
    // - useRef is efficient to accessing the value of an uncontrollled input
    const inputRef = useRef(null);

    // Memorized function to add a new task, avoiding unnecessary re-creation of a function when the parent comonent re-renders
    //  - useCallback ensured the function reference stays stable and doesn't trigger re-renders
    const addTask = useCallback(() => {
        const taskText = inputRef.current.value;

        if (taskText.trim()) {
            // dispatch an action to add the new task
            dispatch({
                type: 'ADD_TASK',
                payload: { id: Date.now(), text: taskText, completed: false }
            });

            console.log({ type: 'ADD_TASK', payload: { id: Date.now(), text: taskText, completed: false } });
            inputRef.current.value = '';
        }
    }, [dispatch]); // dependencies for useCallback (recreated only if dispatch changes)

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter task" />

            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default TaskForm;