import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const TodoList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskInput.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskInput,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskInput('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='todo-list'>
      <div className='todo-list__preview'>
        <h1>Список задач</h1>
        <div>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Введите задачу"
          />
          <button onClick={handleAddTask}>Добавить</button>
        </div>
      </div>
      
      <div className="tasks">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;