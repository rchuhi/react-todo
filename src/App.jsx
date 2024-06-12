import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const toDoList = [{id: 1, title: 'Watch React Tuts'},
{id: 2, title: 'COmplete assignment'},
{id: 3, title: 'Submit by due date'}];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Todo List</h1>
      <ul>
        {toDoList.map(list => (<li key={list.id}>{list.title}</li>))}
      </ul>
      </div>
    </>
  )
}

export default App
