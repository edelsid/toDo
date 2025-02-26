import toDoTypes from "../types"
import Task from "./Task"

interface TasksProps {
  data: toDoTypes[],
  setTasks: (arr: toDoTypes[]) => void;
  handleError: (msg: string | null) => void;
}

export default function Tasks({ data, handleError, setTasks } : TasksProps) {
  return (
    <ul className='tasks' data-testid="tasks-id">
      {data.map((item: toDoTypes) => 
        <Task 
          key={item.id} 
          data={item} 
          handleError={handleError}
          setTasks={setTasks}
        />
      )}
    </ul>
  )
}
