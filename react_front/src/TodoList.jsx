import { useState, useEffect } from 'react';
import './App.css';
import CreateTask from './CreateTask';
import DeleteTask from './DeleteTask';
import UpdateTask from './UpdateTask';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  function fetchData() {
    fetch('http://localhost:8000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
      });
  }

  const handleUpdate = (id, updatedTask) => {
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    fetchData();
  }

  const handleCreation = (creationPackage) => {

    fetch(`http://localhost:8000/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creationPackage)
    })
    fetchData();
  }

  return (
    <div className='taskContainer'>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Status</th>
            </tr>
        </thead>
      <tbody>
        {tasks.map(task => (
          
        <tr key={task.id}>

                <td className='p-2'>{task.id}</td>
                <td className='p-2'>{task.title}</td>
                <td className='p-2'>{task.description }</td>
                <td className='p-2'>{`${new Date(task.created_at).toLocaleDateString()} ${new Date(task.created_at).toLocaleTimeString()}`}</td>
                <td className='p-2'>{task.completed}</td>
                <td className='p-2'><UpdateTask task={task} onUpdate={handleUpdate}/></td>
                <td className='p-2'><DeleteTask task={task} onDelete={handleDelete}/></td>
        </tr>

))}
      </tbody>
      </table>
      <div><CreateTask onCreate={handleCreation}/></div>
    </div>
  );
}
