import { useState, type FormEvent } from 'react'
import './todo.css'

// Define the shape of a todo item
type TodoItem = {
  text: string;
  completed: boolean;
};

const Todo = () => {
  // State for the list of todos
  const [todos, setTodos] = useState<TodoItem[]>([
    { text: 'Go to gym', completed: false },
    { text: 'Wash Car', completed: false },
    { text: 'Go Market', completed: false }
  ]);
  // State for the new task input field
  const [newTask, setNewTask] = useState<string>('');

  // State for editing: which todo is being edited and its text
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');

  // Handle adding a new todo
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTask.trim()) {
      alert('please fill input field :)');
      return;
    }

    // Add new todo to the top of the list
    setTodos([{ text: newTask, completed: false }, ...todos]);
    setNewTask('');
  };

  // Handle deleting a todo by its text
  const handleDeleteTodo = (text: string) => {
    const delTodo = todos.filter((todo) => todo.text !== text);
    setTodos(delTodo);
  };

  // Start editing a todo
  const handleStartEdit = (index: number, text: string) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  // Update the editing text as user types
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(e.target.value);
  };

  // Save the edited todo
  const handleEditSave = (index: number) => {
    if (editingText.trim()) {
      const updatedTodos = todos.map((todo, idx) =>
        idx === index ? { ...todo, text: editingText.trim() } : todo
      );
      setTodos(updatedTodos);
      setEditingIndex(null);
      setEditingText('');
    }
  };

  // Cancel editing
  const handleEditCancel = () => {
    setEditingIndex(null);
    setEditingText('');
  };

  // Toggle completed state for a todo
  const handleCompleteTodo = (key: number) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === key) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2 className="newsletter-heading">Todo</h2>
      {/* Form to add a new todo */}
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="todo-input">What do you want to do?</label>
        <input
          id="todo-input"
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
      </form>
      {/* List of todos */}
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, key) => (
            <li key={key}>
              {/* If editing, show input and save/cancel buttons */}
              {editingIndex === key ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={handleEditChange}
                    placeholder="Edit todo"
                  />
                  <button type="button" onClick={() => handleEditSave(key)}>Save</button>
                  <button type="button" onClick={handleEditCancel}>Cancel</button>
                </>
              ) : (
                <>
                  {/* Show todo text, completed state, and action buttons */}
                  <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                  <input
                    type="checkbox"
                    id={`check_${key}`}
                    checked={todo.completed}
                    onChange={() => handleCompleteTodo(key)}
                    title={`Mark "${todo.text}" as completed`}
                  />
                  <button type="button" onClick={() => handleStartEdit(key, todo.text)}>Edit</button>
                  <button type="button" onClick={() => handleDeleteTodo(todo.text)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        // Message if no todos
        <p>You dont have any todos</p>
      )}
    </div>
  );
}

export default Todo