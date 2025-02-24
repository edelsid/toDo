import Counter from "./Counter"
import Options from "./Options"
import Clear from "./Clear"

export default function Footer() {
  return (
    <footer className='options'>
      <Counter />
      <Options />
      <Clear />
    </footer>
  )
}
