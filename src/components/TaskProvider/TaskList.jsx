import { useMemo } from "react";
import { useTasks } from "./TaskProvider"

const TaskList = ({ filter }) => {
    // access the task list and dispatch functino from taskCOntext
    const { tasks, dispatch } = useTasks();
    console.log(tasks);

    // use useMemo to optimize task filtering
    // - avoids recalculating the filtered task list unnnecessarily when unrelated part of the app re-render
    const filteredTasks = useMemo(() => {
        if (filter === 'completed')
            return tasks?.filter((task) => task.completed);
        if (filter === 'pending')
            return tasks?.filter((task) => !task.completed);
        return tasks; //all tasks
    }, [tasks, filter]); //recompute only when task or filter changes

    return (
        <ul>
            {filteredTasks?.map((task) => (
                <li key={task.id}>

                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                    </span>

                    <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
                        {task.completed ? 'Undo' : 'Completed'}
                    </button>

                </li>
            ))}
        </ul>
    )

}

export default TaskList;