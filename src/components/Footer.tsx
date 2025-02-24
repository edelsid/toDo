import Options from "./Options"
import Clear from "./Clear"

interface FooterProps {
  counter: number,
  setFilter: (id: string) => void,
}

export default function Footer({ counter, setFilter } : FooterProps) {
  return (
    <footer className='options'>
      <span className='counter'>{counter} items left</span>
      <Options setFilter={setFilter}/>
      <Clear />
    </footer>
  )
}
