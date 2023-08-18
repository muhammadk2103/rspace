import './TodoItem.css';

const TodoItem = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="todo-item">
      <span>{task.text}</span>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default TodoItem;