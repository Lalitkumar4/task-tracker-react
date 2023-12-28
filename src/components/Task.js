import { FaTimes, FaEdit } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const handleDoubleClick = (e) => {
    if (
      e.target.classList.contains("edit-btn") ||
      e.target.closest(".edit-btn") ||
      e.target.classList.contains("delete-btn") ||
      e.target.closest(".delete-btn")
    ) {
      return
    }
    onToggle(task.id)
  }

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={handleDoubleClick}
    >
      <h3>
        {task.text} <FaEdit className="edit-btn" onClick={() => onEdit(task)} />
        <FaTimes className="delete-btn" onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
