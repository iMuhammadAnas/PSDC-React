import { useState, type ChangeEvent, type FormEvent } from 'react'
import './todo.css'

type TodoType = {
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { text: 'Go to gym', completed: false },
    { text: 'Wash Car', completed: false },
    { text: 'Go Market', completed: false }
  ])

  const [newTask, setNewTask] = useState('')
  const [editingTask, setEditingTask] = useState<string | null>(null)

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!newTask.trim()) {
      alert('Please fill input field :)')
      return
    }

    if (editingTask !== null) {
      const updatedTodos = todos.map(todo =>
        todo.text === editingTask ? { ...todo, text: newTask } : todo
      )
      setTodos(updatedTodos)
      setEditingTask(null)
    } else {
      const newTodo: TodoType = {
        text: newTask,
        completed: false
      }
      setTodos([newTodo, ...todos])
    }

    setNewTask('')
  }

  const handleDeleteTodo = (text: string) => {
    const delTodo = todos.filter((todo) => todo.text !== text)
    setTodos(delTodo)

    if (editingTask === text) {
      setEditingTask(null)
      setNewTask('')
    }
  }

  const handleEditTodo = (text: string) => {
    setNewTask(text)
    setEditingTask(text)
  }

  const handleCompleteTodo = (text: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.text === text ? { ...todo, completed: true } : todo
    )
    setTodos(updatedTodos)
  }

  return (
    <div className="todo-container">
      <h2 className="newsletter-heading">Todo</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="task">What do you want to do?</label>
        <input type="text" id="task" name="task" value={newTask} onChange={handleNewTask} required />
        <button type="submit">{editingTask ? 'Update' : 'Submit'}</button>
      </form>
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} style={{ color: todo.completed ? 'green' : 'black', textDecoration: todo.completed ? 'line-through' : 'none'  }} >
              {todo.text} <button onClick={() => handleCompleteTodo(todo.text)}> Complete </button> <button onClick={() => handleEditTodo(todo.text)}> Edit </button> <button onClick={() => handleDeleteTodo(todo.text)}> Delete </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any todos</p>
      )}
    </div>
  )
}

export default Todo
