import toDoTypes from "../types"

interface TaskProps {
  data: toDoTypes,
}

export default function Task({ data } : TaskProps) {
  const { text, done } = data;

  return (
    <li className={`task ${done ? 'done' : ''}`}>
      {text}
    </li>
  )
}
