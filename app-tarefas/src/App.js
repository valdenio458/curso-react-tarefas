import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/App.css';

import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

const App = () => {
  // let message = 'Hello, world!'
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: 'Estudar React',
      completed: false,
    },
    { 
      id: 2, 
      title: 'Ler livros',
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10'
      );

      setTasks(data)
    };
    fetchTasks();
  }, []);
  
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });
    setTasks(newTasks)
  };
  
  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]
    setTasks(newTask)
  }

  const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId)
      setTasks(newTasks)
  }
    
  return ( 
    <Router>
      <div className="container">
        <Header />
        <Routes>
        <Route
          path="/"
          exact
          element={
          <>
            <AddTask handleTaskAddition={handleTaskAddition}/>        
            <Tasks 
              tasks={tasks}
              handleTaskClick={handleTaskClick}
              handleTaskDeletion={handleTaskDeletion}
            />
          </>
          }
          />
          <Route
          path="/:taskTitle"
          exact
          element={<TaskDetails />}
          />
          </Routes>
      </div>
    </Router>
  );
} 
export default App;
