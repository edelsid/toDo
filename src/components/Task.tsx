import { useState } from "react";
import operations from "../operations";
import toDoTypes from "../types"

interface TaskProps {
  data: toDoTypes,
}

export default function Task({ data } : TaskProps) {
  const { text, done } = data;
  const [ doneStatus, setDoneStatus ] = useState<boolean>(done);

  const changeStatus = (): void => {
    operations.updateStatus(data);
    setDoneStatus(!doneStatus);
  }

  return (
    <li 
      className={`task ${doneStatus ? 'done' : ''}`}
      onClick={changeStatus}>
      {text}
    </li>
  )
}
