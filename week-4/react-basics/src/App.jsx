import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([{ id: 1, title: 'Todo 1', description: 'Description 1' }
    , { id: 2, title: 'Todo 2', description: 'Description 2' },
  { id: 3, title: 'Todo 3', description: 'Description 3' }
])

  const addTodo = () => {
    const title = document.querySelector('input[name="title"]').value
    const description = document.querySelector('input[name="description"]').value

    setTodos([...todos, { id: todos.length + 1, title, description }])
  }


  return (
    <div className='container'>
      <h1 className='title'>Todo App</h1>

      <input className='input' type="text" name="title" />
      <input className='input' type="text" name="description" />
      <button className='button' onClick={addTodo} >Add Todo</button>

      <h2>Todo List</h2>
      <div className='grid'>
        {
          todos.map(todo => {
            return <Todo key={todo.id} title={todo.title} description={todo.description} />
          })
        }
      </div>
    </div>
  )
}

export default App
