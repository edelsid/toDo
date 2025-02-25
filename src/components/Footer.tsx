import Options from "./Options"
import Clear from "./Clear"
import toDoTypes from "../types"

interface FooterProps {
  counter: number,
  setFilter: (id: string) => void,
  setTasks: (arr: toDoTypes[]) => void;
}

export default function Footer({ counter, setFilter, setTasks } : FooterProps) {
  return (
    <footer className='options'>
      <span className='counter'>{counter} items left</span>
      <Options setFilter={setFilter}/>
      <Clear setTasks={setTasks}/>
    </footer>
  )
}
