import { useState } from "react";
import Button from './Button'

interface OptionsProps {
  setFilter: (id: string) => void;
}

export default function Options({ setFilter }: OptionsProps) {
  const [ active, setActive ] = useState<string>('all');

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const button = e.target as HTMLInputElement;
    setActive(button.id);
    setFilter(button.id);
  }

  return (
    <ul className='options'>
      <Button name='All' id='all' active={active} func={handleClick}/>
      <Button name='Active' id='active' active={active} func={handleClick}/>
      <Button name='Completed' id='completed' active={active} func={handleClick}/>
    </ul>
  )
}
