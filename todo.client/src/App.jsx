import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchTasks();
    }, []);

    async function fetchTasks() {
        const response = await fetch('todo');
        const data = await response.json();
        setTasks(data);
    }
    const toggleTask = async (id) => {

        const response = await fetch(`todo/${id}`, {
            method: 'PUT',
        });
        const updatedTask = await response.json();
        setTasks(
            tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const filteredTasks = () => {
        if (filter === 'all') return tasks;
        return tasks.filter((task) => task.completed === (filter === 'completed'));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
            <TaskList tasks={filteredTasks()} onToggleTask={toggleTask} />
        </div>
    );
};

export default App;