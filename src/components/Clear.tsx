import operations from "../operations"
import toDoTypes from "../types";

interface ClearProps {
  setTasks: (arr: toDoTypes[]) => void;
  handleError: (msg: string | null) => void;
}

export default function Clear({ setTasks, handleError }: ClearProps) {
  const handleClear = () => {
    try {
      operations.deleteCompleted();
      setTasks(operations.retrieveData());
    } catch (error) {
      handleError('Oops! Looks like something went wrong');
      return;
    };
    handleError(null);
  }

  return (
    <button className='btn' type='button' onClick={handleClear}>
      Clear completed
    </button>
  )
}
