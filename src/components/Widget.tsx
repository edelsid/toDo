import { useState, useEffect } from "react"
import toDoTypes from "../types"
import operations from "../operations"
import Header from "./Header"
import Tasks from "./Tasks"
import Footer from "./Footer"

export default function Widget() {
  const [ tasks, setTasks ] = useState<toDoTypes[]>(operations.retrieveData());
  const [ filter, setFilter ] = useState<string>('all');

  useEffect(() => {
    const taskArr = operations.retrieveData();
    switch (filter) {
      case 'active': setTasks(taskArr.filter((item) => !item.done));
        break;
      case 'completed': setTasks(taskArr.filter((item) => item.done));
        break;
      default: setTasks(taskArr);
    };
  }, [filter]);

  return (
    <div className='widget'>
      <Header setTasks={setTasks}/>
      <Tasks data={tasks}/>
      <Footer 
        counter={tasks.filter((item) => !item.done).length}
        setFilter={setFilter}
        setTasks={setTasks}
      />
    </div>
  )
}
