function DeleteTask({ task, onDelete }) {
    const handleDelete = () => {
      onDelete(task.id);
    };
  
    return (
      <button className='rounded full, bg-red-500/50' onClick={handleDelete}>Delete Task</button>
    );
  }
  
  export default DeleteTask;
