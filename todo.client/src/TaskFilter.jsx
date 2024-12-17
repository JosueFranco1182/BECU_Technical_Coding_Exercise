import React from 'react';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
    return (
        <div>
            <button
                onClick={() => onFilterChange('all')}
                style={{
                    fontWeight: currentFilter === 'all' ? 'bold' : 'normal',
                }}
            >
                All
            </button>
            <button
                onClick={() => onFilterChange('pending')}
                style={{
                    fontWeight: currentFilter === 'pending' ? 'bold' : 'normal',
                }}
            >
                Pending
            </button>
            <button
                onClick={() => onFilterChange('completed')}
                style={{
                    fontWeight: currentFilter === 'completed' ? 'bold' : 'normal',
                }}
            >
                Completed
            </button>
        </div>
    );
};

export default TaskFilter;
