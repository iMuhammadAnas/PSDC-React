import { useState, type ChangeEvent, type FormEvent } from 'react'
import './todo.css'

const Todo = () => {
  const [todos, setTodos] = useState(['Go to gym', 'Wash Car', 'Go Market'])

  const [newTask, setNewTask] = useState('')

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!newTask.trim()) {
        alert('please fill input field :)')
        return
    }

    setTodos([newTask, ...todos])

    setNewTask('')
  }

  const handleDeleteTodo = (text:string) => {
    const delTodo = todos.filter((todo) => todo !== text)

    setTodos(delTodo)
  }

//   edit functionality is today task


//   complete functionality is today task

  return (
    <div className="todo-container">
      <h2 className="newsletter-heading">Todo</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="email">What do you want to do?</label>
        <input type="text" id="email" name="email" value={newTask} onChange={handleNewTask} required />
        <button type="submit">Submit</button>
      </form>

      {todos.length>0 ? <ul className="todo-list ">
        {todos.map((todo, key) => (
          <li key={key}>{todo} <button onClick={() => {handleDeleteTodo(todo)}}>Edit</button> <button onClick={() => {handleDeleteTodo(todo)}}>Delete</button></li>
        ))}
      </ul> : <p>You dont have any todos</p>}
    </div>
  )
}

export default Todo
