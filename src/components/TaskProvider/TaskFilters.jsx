import { useState } from "react"

// onFilterChange : callback passed from parent to inform the parent about the filter change
const TaskFilters = ({ onFilterChange }) => {
    // state to track the current filter
    const [filter, setFilter] = useState('all');

    const handleFilterChanges = (newFilter) => {
        setFilter(newFilter);
        onFilterChange(newFilter);
    }
    return (
        <div>
            <button onClick={() => handleFilterChanges('all')}
                disabled={filter === 'all'}>All</button>

            <button onClick={() => handleFilterChanges('completed')}
                disabled={filter === 'completed'}>Completed</button>
                
            <button onClick={() => handleFilterChanges('pending')}
                disabled={filter === 'pending'}>Pending</button>
        </div>
    )
}

export default TaskFilters;