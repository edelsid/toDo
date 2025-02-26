import { useState } from "react";
import operations from "../operations";
import toDoTypes from "../types"

interface TaskProps {
  data: toDoTypes,
  setTasks: (arr: toDoTypes[]) => void;
  handleError: (msg: string | null) => void;
}

export default function Task({ data, handleError, setTasks } : TaskProps) {
  const { text, done } = data;
  const [ doneStatus, setDoneStatus ] = useState<boolean>(done);

  const changeStatus = (): void => {
    try {
      operations.updateStatus(data);
      setDoneStatus(!doneStatus);
      setTasks(operations.retrieveData());
    } catch (error) {
      handleError('Oops! Looks like something went wrong');
      return;
    }
    handleError(null);   
  };

  return (
    <li 
      className={`task ${doneStatus ? 'done' : ''}`}
      onClick={changeStatus}>
      {text}
    </li>
  )
}
