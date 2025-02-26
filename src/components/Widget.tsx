import { useState, useEffect, useCallback } from "react"
import toDoTypes from "../types"
import operations from "../operations"
import Header from "./Header"
import Tasks from "./Tasks"
import Footer from "./Footer"

export default function Widget() {
  const [ tasks, setTasks ] = useState<toDoTypes[]>(operations.retrieveData());
  const [ filter, setFilter ] = useState<string>('all');
  const [ error, setError ] = useState<string | null>(null);

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

  const changeFilter = useCallback((filter: string):void => {
    setFilter(filter);
  }, []);

  const changeTasks = useCallback((arr: toDoTypes[]): void => {
    setTasks(arr);
  }, []);

  const handleError = useCallback((msg: string | null): void => {
    setError(msg);
  }, []);

  return (
    <>
      <div className='widget'>
        <Header setTasks={setTasks} handleError={handleError}/>
        <Tasks 
          data={tasks} 
          handleError={handleError}
          setTasks={setTasks}
        />
        <Footer 
          counter={tasks.filter((item) => !item.done).length}
          setFilter={changeFilter}
          setTasks={changeTasks}
          handleError={handleError}
        />
      </div>
      {error && <span className='error'>{error}</span>}
    </>
  )
}
