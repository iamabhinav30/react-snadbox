import { useState } from "react"
import TaskFilters from "./TaskFilters"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import { TaskProvider } from "./TaskProvider"

const TaskHomeComponent = () => {
    const [filter, setFilter] = useState('all');

    return (
        <TaskProvider>
            <div>
                <h3> Task Manager</h3>
                <TaskForm />
                <TaskFilters onFilterChange={setFilter} />
                <TaskList filter={filter} />
            </div>
        </TaskProvider>
    )
}

export default TaskHomeComponent