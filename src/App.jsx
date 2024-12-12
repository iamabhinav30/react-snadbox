import { useState } from 'react'
import './App.css'
import FormComponent from './components/FormComponent';
import { TaskProvider } from './components/TaskProvider/TaskProvider';
import TaskForm from './components/TaskProvider/TaskForm';
import TaskFilters from './components/TaskProvider/TaskFilters';
import TaskList from './components/TaskProvider/TaskList';

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <>

      <TaskProvider>
        <div>
          <h3> Task Manager</h3>
          <TaskForm />
          <TaskFilters onFilterChange={setFilter} />
          <TaskList filter={filter} />
        </div>
        </TaskProvider>
    </>
  )
}

export default App
