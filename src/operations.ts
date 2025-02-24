import toDoTypes from "./types";

const operations = {
  retrieveData: (): toDoTypes[] => {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  },
  addData: (text: string): toDoTypes => {
    const data = operations.retrieveData();
    const newToDo = {
      id: data.length + 1,
      text,
      done: false,
    };
    const newData = [...data, newToDo];
    localStorage.setItem('todos', JSON.stringify(newData));
    return newToDo;
  },
  deleteCompleted: (): void => {
    const data = operations.retrieveData();
    const newData = data.filter((item) => !item.done);
    localStorage.setItem('todos', JSON.stringify(newData));
  }
}

export default operations;