import React, { useRef } from 'react'
import { useState} from 'react';

export default function UpdateTask({task, onUpdate}) {

    const [menu, SetMenu] = useState();
    const todoTitleRef = useRef()
    const todoDescriptionRef = useRef()
    const todoStatusRef = useRef()


    const handleTitleChange = (event) => {
        const title_input = todoTitleRef.current.value;
        if (title_input === '') return
        const updatedTask = {task, title: title_input };
        onUpdate(task.id, updatedTask);
      }

    const handleDescriptionChange = (event) => {
        const description_input = todoDescriptionRef.current.value;
        if(description_input == '') return
        const updatedTask = {description: description_input };
        onUpdate(task.id, updatedTask);
    }
    const handleStatusChange = (event) => {
        const status_input = todoStatusRef.current.value;
        if(status_input == '') return
        const updatedTask = {status: status_input };
        onUpdate(task.id, updatedTask);
    }
    const handleMenu = (event) => {
        if (menu == false) {
            SetMenu(true);
        }
        else {
            SetMenu(false);
        }
    };

    const handleSubmit = () => {
        handleTitleChange();
        handleDescriptionChange();
        handleStatusChange();
    }

  return (
        <>
        <button className='rounded full bg-sky-500/50' onClick={handleMenu}>UpdateTask</button>

        {menu ? (
        <>
        <button className="rounded full bg-green-500/50 ml-2">Title</button>
        <input  ref={todoTitleRef} type="text" className="w-12 h-5 bg-slate-200 ml-2"></input>

        <button className="rounded full bg-green-500/50 ml-2">Description</button>
        <input  ref={todoDescriptionRef} type="text" className="w-12 h-5 bg-slate-200 ml-2"></input>

        <button className="rounded full bg-green-500/50 ml-2">Status</button>
        <input ref={todoStatusRef} type="text" className="w-12 h-5 bg-slate-200 ml-2"></input>

        <button className="rounded full bg-green-500/50 ml-2" onClick={handleSubmit}>Submit</button>
        </>
        ) : (
        <>
        <button className="rounded full ml-2"></button>
        <input type="text" className="hidden"></input>
        <button className="rounded full ml-2"></button>
        <input type="text" className="hidden"></input>
        <button className="rounded full ml-2"></button>
        <input type="text" className="hidden"></input>
        <button className="rounded full ml-2"></button>
        </>
        
        )}
        </>
        )
}
