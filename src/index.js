// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)


// 1
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TaskProvider from './store/TodoProvider'
// import TaskProvider from './TaskProvider'

// 2
ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
)