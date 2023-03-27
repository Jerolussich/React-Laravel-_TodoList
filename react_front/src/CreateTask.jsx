import {React, useState, useRef} from 'react'

export default function CreateTask({onCreate}) {

    const [menu, SetMenu] = useState();
    const todoTitleRef = useRef()
    const todoDescriptionRef = useRef()
    const todoStatusRef = useRef()

    const handleCreate = (event) => {
    
        const title_input = todoTitleRef.current.value;
        const description_input = todoDescriptionRef.current.value;
        const status_input = todoStatusRef.current.value;
        const creationPackage = {title: title_input, description: description_input, status: status_input};
        onCreate(creationPackage);

    }

    const handleMenu = (event) => {
        if (menu == false) {
            SetMenu(true);
        }
        else {
            SetMenu(false);
        }}

  return (
    <>
    <button className='rounded full bg-orange-500/50 ml-2' onClick={handleMenu}>Create Task</button>

    {menu ? (
        <>
        <button className="rounded full bg-orange-500/50 ml-2">Title</button>
        <input  ref={todoTitleRef} type="text" className="w-12 h-5 bg-slate-200 ml-2"></input>

        <button className="rounded full bg-orange-500/50 ml-2">Description</button>
        <input  ref={todoDescriptionRef} type="text" className="w-12 h-5 bg-slate-200 ml-2"></input>

        <button className="rounded full bg-orange-500/50 ml-2">Status</button>
        <input ref={todoStatusRef} type="text" className="w-12 h-5 bg-slate-200 ml-2"></input>

        <button className="rounded full bg-orange-500/50 ml-2" onClick={handleCreate}>Submit</button>
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
  )}
