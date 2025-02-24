interface ButtonProps {
  name: string,
  id: string,
  active: string,
  func: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function Button({ name, id, active, func } : ButtonProps) {
  return (
    <li className={`option ${active === id ? 'active' : ''}`}>
      <button className='btn' type='button' onClick={(e) => func(e)} id={id}>
        {name}
      </button>
    </li>
  )
}
