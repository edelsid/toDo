import React from "react";
import Options from "./Options"
import Clear from "./Clear"
import toDoTypes from "../types"

interface FooterProps {
  counter: number,
  setFilter: (id: string) => void,
  setTasks: (arr: toDoTypes[]) => void;
  handleError: (msg: string | null) => void;
}

const PureOptions = React.memo(Options);
const PureClear = React.memo(Clear);

export default function Footer({ counter, setFilter, setTasks, handleError } : FooterProps) {
  return (
    <footer className='options'>
      <span className='counter'>{counter} items left</span>
      <PureOptions setFilter={setFilter} handleError={handleError}/>
      <PureClear setTasks={setTasks} handleError={handleError}/>
    </footer>
  )
}
