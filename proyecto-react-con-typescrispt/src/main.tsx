import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { TodoApp } from './componentes/TodoApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <TodoApp></TodoApp>
  </React.StrictMode>,
)
