import { useState } from "react"
import toDoTypes from "../types";
import operations from "../operations";

interface HeaderProps {
  setTasks: (arr: toDoTypes[]) => void;
}

export default function Header({ setTasks }: HeaderProps) {
  const [data, setData] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData (e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validatedData = validateData(data);
    if (validatedData) {
      operations.addData(validatedData);
      setTasks(operations.retrieveData());
      setData('');
    };
  }

  const validateData = (text: string): string | undefined => {
    if (!text) return;
    return text.trim();
  }

  return (
    <header>
      <form className='input__form' id='task' onSubmit={handleSubmit}>
        <input 
          className='input' 
          type='text'
          placeholder='What needs to be done?'
          autoFocus={true}
          value={data}
          onChange={handleChange}
        />
      </form>
    </header>
  )
}
