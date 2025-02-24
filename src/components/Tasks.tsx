import toDoTypes from "../types"
import Task from "./Task"

interface TasksProps {
  data: toDoTypes[],
}

export default function Tasks({ data } : TasksProps) {
  return (
    <ul className='tasks'>
      {data.map((item: toDoTypes) => 
        <Task key={item.id} data={item}/>
      )}
    </ul>
  )
}
