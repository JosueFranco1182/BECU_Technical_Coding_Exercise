import React from 'react';

const TaskList = ({ tasks, onToggleTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleTask(task.id)}
                    />
                    <span
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            marginLeft: '10px',
                        }}
                    >
                        {task.name}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
