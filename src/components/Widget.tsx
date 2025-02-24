import { useState } from "react"
import toDoTypes from "../types"
import operations from "../operations"
import Header from "./Header"
import Tasks from "./Tasks"
import Footer from "./Footer"

export default function Widget() {
  const [ tasks, setTasks ] = useState<toDoTypes[]>(operations.retrieveData());

  return (
    <div className='widget'>
      <Header />
      <Tasks data={tasks}/>
      <Footer />
    </div>
  )
}
