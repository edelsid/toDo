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
  updateStatus: (toDo: toDoTypes): void => {
    const data = operations.retrieveData();
    const newToDo = {
      id: toDo.id,
      text: toDo.text,
      done: !toDo.done,
    };
    const newData = data.map((item) => item.id === newToDo.id ? newToDo : item);
    localStorage.setItem('todos', JSON.stringify(newData));
  },
  deleteCompleted: (): void => {
    const data = operations.retrieveData();
    const newData = data.filter((item) => !item.done);
    localStorage.setItem('todos', JSON.stringify(newData));
  }
}

export default operations;