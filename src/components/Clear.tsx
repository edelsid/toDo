import operations from "../operations"
import toDoTypes from "../types";

interface ClearProps {
  setTasks: (arr: toDoTypes[]) => void;
}

export default function Clear({ setTasks }: ClearProps) {
  const handleClear = () => {
    operations.deleteCompleted();
    setTasks(operations.retrieveData());
  }

  return (
    <button className='btn' type='button' onClick={handleClear}>
      Clear completed
    </button>
  )
}
